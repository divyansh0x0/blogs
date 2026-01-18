---
title: Commit Guidelines
description: Guidelines to follow when you commit to a project.
source: Progit, https://cbea.ms/git-commit/
---

Below are some guidelines to follow when you are commiting to any project. They will prevent you from submitting redundant changes and make collaboration a lot easier.

## Whitespace errors

Your submissions should not contain any whitespace errors, that is changes to files are just whitespaces added or removed. You can run `git diff --check` which identifies possible whitespace errors and lists them for you. This will prevent you from submitting whitespace issues that may annoy other developers.

## Commit Per Issue

You shouldn't work on 5 different issues and commit all the changes once. Make your changes easily digestible. You can work on one issue, commit it and work on next. If some change modifies the same file, try to use git add --patch to partially stage the files. This will make things easier for your fellow developers when they have to review your changes.

## Write Good Commit Messages

A good commit message makes collaboration a lot easier. Below are few general rules to follow:

1. Message should start with a single line that's no more than about 50 characters and describes the changeset concisely, followed by a blank line if you are adding a body of detailed explaination.
2. Follow this by a detailed explaination of the change, which should include why you made the changes and contrast its implementation with previous behavior. Wrap it to about 72 characters or so. 
3. Write your commit message in the imperative: "Fix bug" and not "Fixed bugs" or "Fixes bugs".

The following is a good template for a good message
Example:
```
Summarize changes in around 50 characters or less. 
Use imperitive writing. Ensure the line is capitalized
and do not end it with a period.

A more detailed explaination with paragraphs and bullet points.
This does not need to be imperative. Try to wrap the body at
72 characters by manually newlining the message.

 - Use bullter point
 - A hypen or asterisk is used for a bullet. It must precede 
   and followed by a single space with blank line in between
   points. Convention can vary with bullet points  

``` 

A proper git commit message should be able to complete the following sentence: If applied, this commit will <u>*your subject line here*</u>
