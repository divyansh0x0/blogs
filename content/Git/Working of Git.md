---
title: What is git
description: An overview on working of git. Source - progit book
---
# An Overview of Working of Git
Most VCS store data as a list of file based changes. They store data information as a set of files and the changes made to each file over time. 
There will be a single version which will signify addition of file, the other versions will only store changes to that file. This is known as 
**delta-based version control**.

Git does not use this method, instead it takes a *snapshot* of your file system i.e. it stores how your files look when the version was created.
If a file has not changed git does not store the file again, instead it just stores a link pointing to the previous identical file it has already
stored. Thus Git stores data as a **stream of snapshots**.

This makes Git a miniature file system.

## How Git knows which file has changed?
Everything in Git - folder or files - are checksummed (a number uniquely identifying a block of data, usually a hash). Its not possible to lose information 
in a file or get a file corrupted without Git knowing.

Git uses `SHA-1` hash, which is a 40-character string composed of hexadecimal characters (`0` to `9` digits and letters from `a` to `f`). For a file it is 
calculated using its content and for a directory its computed using its file structure. A `SHA-1` has looks like this:
```shell
a9993e364706816aba3e25717850c26c9cd0d89d
```
Git stores everything in its database not by its name but by the hash value of its content.

## The Common operation Git uses
Almost all operation you will do on Git will only add data to the Git database. It is hard to get the system to do anything that is not undoable or to make it erase data 
in any way.

## Git States

Git has three main states in which your files can reside. These are
1. `modified`: You have changed the file but have not committed it to your database yet.
2. `staged`: You have marked a modified file in its current version to go into your next commit snapshot
3. `commited`: The data is safely stored in your local database.

## Sections of a Git project
There are three main stages of a Git Project:
1. **The working tree**: It is the single checkout of one version of your project. Meaning these are the files you are currently working on. These are placed on disk from your Git database for you to modify.
2. **The staging area** or **index**: It is a file stored in your git directory (`.git` folder) and is known as the index. It stores all the information about the data which will go into your next commit
3. **The Git directory**: The git directory is where Git stores the metadata and object database for your project. It is what is copied when you clone a repository from