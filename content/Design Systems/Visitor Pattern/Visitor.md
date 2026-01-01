---
title: The Visitor Pattern
dated: 1 January 2026
description: A blog on how visiter pattern works
---
# The Vistor Pattern

## My Journey with the Visitor Pattern
While building [algo](https://github.com/divyansh0x0/algo), I wanted to create my own domain specific language (DSL). 
The idea was to allow users to define algorithms in a more human-readable way, while the interpreter handles the tracer generation and execution.


The lexer was simple, the parser was a bit more complex but manageable, however, the interpreter was a nightmare. I hadn't even implemented half the features when I realized that the code was getting complex. I wanted a complete language with various constructs, but the interpreter was becoming a mess — full of conditionals and type checks. 

The cause of this was all functions were defined in a single class, and each function had to handle multiple types of AST nodes. This led to tons of `if-else` statements checking the type of each node and executing the corresponding logic. I was following crafting-interpreters.com, the author had used a visitor pattern but I didn't understand it at that time, so I tried to implement it my own way. And yes, I shot myself in the foot.

You might be wondering why didn't I just refactor the code to use the visitor pattern? The problem was that I didn't understand it well enough. I had read about it, but I couldn't grasp how to implement it effectively.

I had also used the *interpreter pattern* before. In this method each node in AST contains a `evaluate()` method that knows how to interpret itself. While this works for simple interpreters (like a calculator), it becomes problematic when you want to add new operations or behaviors. Every time you want to add a new operation, you have to modify all the node classes, which violates the open/closed principle. Lets take an example:
```ts
class NumberNode extends Node {
    value:number;
    evaluate() { return value; }
}
```
Lets say we want to add a new operation, like `prettyPrint()`, to display the AST. Now i will have to modify every node class to add this new method. This is manageable for a small number of nodes, but as the AST grows, it becomes a maintenance nightmare. I have experienced this in my first project, [JCalc](https://github.com/divyansh0x0/JCalc) - an AST based calculator.

My current interpreter code used a **Tree Walking Interpreter**. In this approach, the interpreter traverses the AST and executes the logic based on the type of each node. This led to a lot of `if-else` statements checking the type of each node and executing the corresponding logic. Note that this is different from the interpreter pattern mentioned above. Here, the nodes do not have an `evaluate()` method, instead the interpreter class has a `interpret()` method that handles all node types, and helper methods for each node type.


## Understanding the Visitor Pattern
> A visitor pattern is a software design pattern that separates the algorithm from the object structure. Because of this separation, new operations can be added to existing object structures without modifying the structures. It is one way to **follow the open/closed principle in object-oriented programming and software engineering** - [Wikipedia](https://en.wikipedia.org/wiki/Visitor_pattern).

If you are wondering what open/closed principle is, it states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code.

My external tree walking interpreter violated this principle because every time I wanted to add a new operation, I had to modify the interpreter class, which meant changing existing code.

The Visitor pattern lets you define new operations on a set of objects without changing their classes. Instead of putting the operation logic inside the objects, you put it in a separate visitor object.

It does require some boilerplate code, and nodes do need one modification, but it pays off in the long run by making your code more maintainable and extensible.

### Structure of the Visitor Pattern
The Visitor pattern typically involves the following components:
1. **Visitor Interface**: This defines a visit method for each type of element in the object structure. Each method takes an element as an argument.
2. **Concrete Visitor**: This implements the visitor interface and provides the specific operations to be performed on each type of element.
3. **Element Interface**: This defines an accept method that takes a visitor as an argument.



### How the Visitor Pattern Works
I will try to take this intuitively as the method confused me a lot.

First, we will have to keep in mind that the nodes of our graph are dumb objects, all they do is store data.

```ts
interface Node{
}
```
```ts
class NodeA extends Node{
    dataA:any;
    left: Node;
    right:Node;
}
```

```ts
class NodeB extends Node{
    dataB:any;
    children:Node[];
}
```

To traverse this tree lets define a visitor, this visitor will be accepted by each node.

```ts
interface Visitor <T>{
    visitNodeA(nodeA:NodeA): T;
    visitNodeB(nodeB:NodeB): T;
}
```

The visitor will have every single method needed to visit the nodes of your AST and will always return some kind of value. I have used generics to implement this behaviour;

We will need to modify our dumb nodes to have some way to accept the visitor and tell the visitor what node it it. This will indirectly make a conditional dispatch, the nodes tell the visitor what they are. So there is a bit of behaviour in our class. But we will never have to refractor the code for `accept()` once we have defined it. 
```ts
interface Node{
    accept<T>(visitor:Visitor<T>):T;
}
```
```ts
class NodeA extends Node{
    dataA:any;
    left: Node;
    right:Node;
    accept<T>(visitor:Visitor<T>):T {
        return visitor.visitNodeA(this);
    }
}
```

```ts
class NodeB extends Node{
    dataB:any;
    children:Node[];
    
    accept<T>(visitor:Visitor<T>):T {
        visitor.visitNodeB(this);
    }
}
```

This solves one problem, no if-else branches of checking type of nodes.

Lets use this visitor to create a pretty-printer. The return type will be a string.

```ts
class PrettyPrinter implements Visitor<String>{
    visitNodeA(nodeA:NodeA){
        const result = `NodeA: ${nodeA.data}\n`
    }
    visitNodeB(nodeB:NodeB){
        return `NodeB: ${nodeB.data}\n`
    }
}
```
You might now wonder, how will we print the children of these nodes. Its simple, we make the children accept the same visitor.

This allows the visitor to visit every single node like this:

```ts
class PrettyPrinter implements Visitor<String>{
    private indentLevel = 0;
    getIndent(){
        return '--'.repeat(this.indentLevel)
    }
    visitNodeA(nodeA:NodeA){
        let result = `${this.getIndent()} NodeA: ${nodeA.dataA}\n`
        
        indentLevel++; // Increment because we are going deeper
        if(nodeA.data.left) // Runs if left node is defined
            result += `${this.getIndent()} ${nodeA.left.accept(this)}`
        if(nodeB.data.left) // Runs if right node is defined
            result += `${this.getIndent()} ${nodeB.left.accept(this)}`   
        indentLevel--; // Decrement as we have moved out of the child branch

        return result;
    }
    visitNodeB(nodeB:NodeB){
        let result = `${this.getIndent()} NodeB: ${nodeB.dataB}\n`


        indentLevel++; // Increment because we are going deeper
        for(const child of nodeB.children){
            if(child)
                result += `${this.getIndent()} ${child.accept(this)}`    
        }
        indentLevel--; // Decrement as we have moved out of the child branch
        return `NodeB: ${nodeB.data}\n`
    }
}
```

We can see, there is no if-else branches checking type of node using instanceof and storing the type of node is also not necessary.

We can just do this now:
```ts
const prettyPrinter = new PrettyPrinter();
const root = getAst(); // Some function returning the root node of Ast

root.accept(prettyPrinter);
```

If we have multiple systems which require traversing the AST we can just implement the visitor for each system and we getAst

```ts
root.accept(visitor1);
root.accept(visitor2);
root.accept(visitor3);
```

No need to check type of node.


## Double Dispatching

If you have noticed, the reason we were able to skip checking the type of node is because we are dispatching our visitor twice!

Inside every node we wrote a accept method which dispatched out visitor. For example in node A.
```ts
interface NodeB extends Node{
    ...

    accept<T>(visitor:Visitor<T>): T {
        return visitor.visitNodeB(this);
    }
}
```

So `NodeB` tells `Visitor` of type `T` that its visiting node B, and will return type `T`

The visitor will call accept on the nodes whenever required in its `visitNodeB()`

```ts
class PrettyPrinter implements Visitor<String>{
    ...
    visitNodeB(nodeB:NodeB){
        for(const child of nodeB.children){
            child.accept(this);    
        }

    }
}

```

This creates a two way communication (dispatch). The nodes tell the visitor who they are, the visitor tells the nodes when they need to accept the visitor.

Thats why its called **Double Dispatch**.

This double dispatch is the core of visitor pattern and is what makes it work.

