---
title: "Workflows"
description: "An overview of various types of workflows in Git"
sources: progit
---

A workflow is a sequence of tasks or steps that are performed in a specific order to complete a specific process ro achieve a goal. It specifies what is done by whom, and in what order.

In system architecture, workflow describes how tasks are executed and coordinated across components. 

In Git, however, every developer is potentially both a node and a hub; that is, every developer can both contribute code to other other repositories and maintain a public repository on which others can base their work and which they can contribute to.

This presents a vast range of workflow possibilities for your project and/or your team. Below are few common paradigms that take advantage of the flexibility of Git.

## Centralized Workflow

One central hub, or repository, can accept code and everyone synchronizes code their work with it. A number of developers are nodes and synchronize with that centralized location.

If two developers clone from the hub and make changes, the first develoeper to push their changes back up can do so with no problems. The second developer must merge in the first one's work before pushing their own changes, otherwise they will overwrite the changes made by first developer. 

This workflow works perfectly well with Git. All you have to do is set yo a single repository, and give everyone on your team push access; Git won't let users overwrite each other.

### Benefits:

Very simple to use and most are already familiar with this kind of workflow.
## Integration-Manager Workflow

Because Git allows you to have multiple remote repositories, it's possible to have a workflow where each developer has write access to their own public repository and read access to everyone else's.

This workflow will often include a  canonical repository that represents the "official" project. To contribute, you create your own public clone of the project and push your changes to it. Then you can send a request to the maintainer of the main project to pull in your changes.

This process works as follows:
1. The project maintainer pushes to their public repository.
2. A contributer clones that repository and make changes.
3. The contributer pushes to their own repository.
4. The contributer asks the maintainer to pull changes.
5. The maintainer adds the contributor's repository as a remote and merges locally.
6. THe maintainer pushes merged changes to the main repository.


This workflow is very common with the hub-based tools like **Github** and **GitLab**. You fork a project, push you changes into your fork for everyone to see.

### Benefits:

Each contributor does not have to wait for the project to incoporate their changes - each party work at their own pace.

## Dictator and Lieutenants Workflow

This is a variant of a multiple-repository workflow. It's generally used by huge projects with hundreds of collaborators like the Linux kernel.  Various integration managers are in charge of certain parts of the repository; they are called "lieutinants". All the lieutenants have one integration manager known as "benevolent dictator". This dictator pushes from their directory to a reference repository from which all the collaborators need to pull. 

1. Regular developers work on their topic branch and rebase their work on top of master. The master branch is that of the reference repository to which the dictator pushes. 
2. Lieutenants merge the developers' topic branches into their master branch.
3. The dictator merges the lieutinants' master branches into the dictator's master branch.
4. Finally the dictator pshes that master branch to the reference repository so the other developers can rebase on it.

This kind of workflow is rare but useful in very big projects, or in highly hierarchical environments. It allows one project lead (dictator) to delegate as much of the work and collect large subsets of code at multiplepoints before integrating them.
 
