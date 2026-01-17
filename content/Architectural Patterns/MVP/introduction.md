---
title: Introduction to Model View Presenter
description: History and overview of MVP pattern
sources: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter
---
The **model–view–presenter (MVP)** software pattern was created in the early 1990s at **Taligent**, a joint venture between Apple, IBM, and Hewlett-Packard. It was first used in Taligent’s C++-based CommonPoint environment, later adapted to Java, and became widely known after a paper by Taligent CTO Mike Potel.

> Taligent was a pioneering software company, formed by Apple and IBM
> in 1992, to create a next-generation, object-oriented operating
> system (codenamed Pink) for cross-platform compatibility, but it 
> eventually pivoted to develop development frameworks (CommonPoint)
> before being dissolved into IBM in 1998, leaving behind influential 
> but commercially unsuccessful technology.

## Overview

MVP is a user interface architectural pattern designed to make unit testing easier and to better separate presentation logic.

* The model defines the data used by the user interface.
* The view displays the data and sends user actions to the presenter.
* The presenter handles the logic, gets data from the model, and prepares it for display in the view.
* Services can be added to the presenter to handle additional processing of the model.

Typically, the view instantiates the concrete presenter object and passes itself as a reference.

```ts
class Presenter {
    constructor(view: View) {
    }
}
```
```ts
class View {
    private  presenter: Presenter;
    constructor(/*Any arguments*/) {
        this.presenter = new Presenter(this);
    }
}
```

## Who uses it

### .NET

The .NET environment supports the MVP pattern like most development platforms:
* The same model and presenter can be reused across different interfaces, such as ASP.NET web applications and Windows Forms applications.
* The presenter communicates with the view through an interface.

Developers can implement MVP manually or use an MVP framework to automate parts of the process.

### Java

In Java applications (such as **AWT**, **Swing**, or **SWT**), MVP is implemented by having the user interface class implement a view interface.

The same idea works for Java web applications, since modern frameworks use component-based designs similar to desktop applications. Tools like **Google Web Toolkit**, **Vaadin,** and **Echo2** follow this approach.

Common Java frameworks include **JavaFX**, **Echo2**, **Google Web Toolkit**, **JFace**, **Swing**, **Vaadin**, and **ZK**.

### PHP
Because PHP has a flexible runtime environment, there are many ways to structure application logic. The model layer is usually designed by the application developer. Popular PHP frameworks that support MVP-style architecture include **CodeIgniter**, **Laravel**, and **Nette Framework**.