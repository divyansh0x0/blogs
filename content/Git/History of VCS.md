---
title: Why GIT came into existence
description: A small history of Version Control System (VCS)
dated: 1 January 2025
---
(VCS)
A version control is the system that record changes to a file or set of files over time. If anything bad happens you can revert back to a previous state for any given file.

VCS can be as simple as making dated folders or zip file of you project. But this is extremely error prone and tedious. local version control systems were developed to store file changes in a local database.

## RCS - Revision Control System
One of the earliest type of VCS originally developed by Walter F. Tichy in the early 1980s. It is a set of **UNIX** comamnds that allow multiple users to develop and maintain program code or documents. 

RCS tracked history on a file by file basis. This resulted in significant limitations such as:
1. No atomic commits were allowed. You couldn't just commit changes to multiple files as a single transaction, each changed file was stored as a separate event.
2. Branching was difficult, so users preferred locking the file. To edit a file, a user had to lock it, which prevented others from modifying it until it was checked back in.
3. It was able to group specific versions of different files together using tags but did not inherently do any sort of tracking.

It worked like this:
1. You had to **check-in** using `ci` a file like `hello.c`, which would get removed and replaced by a history file ending in `,v`, so `hello.c` would become `hello.c,v`. This file would contain the main code + the metadata and history.
2. The system would store revisions in a single tree datastructure in the `,v` file.
3. To edit a file, you had to **check-out** using `co`, which would retrieve a usable version of file for the user to edit.

This was simple but had incredible disadvantage, biggest of which was no concurrency - two indivisuals cant work on same file, and no security - you could easily edit the version history yourself.

## Centralized Version Control Systems - CVCSs
A major issue people encountered was the difficulty to collaborate with developers on other systems. To deal with this **CVCSs** were developed.

These would have a single server which would contain all the versioned files and a number of clients that check out files from the central place. It was the standard for many years but had its own set of problems and being centralized was one of it. The central server goes down and you cannot work for hours, and if the hard disk gets corrupted and proper backups haven't been kept you lose absolutely everything (thats just terrifying). 

Local VCSs suffered similarly.

## Distributed Version Control Systems - DVCSs
These are the modern solution to all the problems we see above. GIT, Mercurial, or Darcs are some of the DVCs we use today. Clients don't just checkout the latest snapshot of the files rather, they fully mirror the repository with the full history. If any server dies, any of the client repository can be copied back to the server to restore it. Every clone is backup of all data.

These also allowed collaboration, multiple people could work on the same project simultaneously and allowed users to setup various kind of workflows which the centralized systems didn't provide.
