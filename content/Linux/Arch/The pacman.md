# About Pacman
> The pacman package manager is one of the major distinguishing features of Arch Linux. It combines a simple binary package format with an easy-to-use Arch build system. The goal of pacman is to make it possible to easily manage packages, whether they are from the official repositories or the user's own builds. - [Arch Wiki](https://wiki.archlinux.org/title/Pacman)


## Some definitions

### What is a package?
A package is a single archive (file) that contains everything needed to install a program on Arch Linux:
- The program's actual files (already compiled, so you don't build  them yourself)
- Information about the program (name, version, dependencies, etc.)
- Instructions that tell `pacman` how to install it correctly

### What is pacman?
`pacman` is Arch Linux's package manager. It is used to:
- Install programs
- Update programs
- Remove programs

Instead of downloading source code and compiling it manually, `pacman` handles everything for you.

---

## Why use packages instead of compiling yourself?

Using packages has several advantages:
1. **Easy Updates**: Pacman can update packages automatically
2. **Automatic Dependency Handling**: Programs often require other programs (called dependencies) to work. `Pacman` can install those automatically.
3. Clean Removal: `Pacman` keeps track of every file installed by a package. It removes all its file when you remove a package.

## Pacman commands
A pacman command will always follow the following structure

```bash
pacman [operation] [options] [targets]
```
### **Operations**
It is a single letter prefixed with `-`, or you can also write it the full word with `--` prefixed for more explicit command.


Some important operations in pacman are:
### 0. The help command
The most important of all. Use `-h` followed by any other command to get a detailed list of options and their meaning. To get all operations of `-S` command you can use
```bash
pacman -h -S # short hands
pacman --help --sync # much more explicit
```

### 1. Target sync
`-S [target]` / `--sync [target]` syncs a target repo with your file system. Some imporant options it can have are:

`-u | --sysupgrade`: Upgrades installed packages to the latest version as stored in the database in your system locally. 
```bash
pacman -Su 
```

`-y | --refresh`: Refreshes package databases on your computer with latest package lists from mirrors.

It **does not** upgrade packages. Arch libraries may cause a force upgrade and this will result in partial upgrade of your system. Therefore `-y` must be followed by `-u` immediately to avoid any partial upgrades in the time between `-y` and `-u`.

So always do `-S -y -u`, which can be shortend to `-Syu`, when you want to upgrade packages. As this makes the opeartion atomic.

```bash
pacman -Sy # Dangerous 
pacman -Syu # Safe
```
`-s | --search`: Searches package names and descriptions in remote repositories. It does not search local packages

```bash
pacman -Ss keyword-to-search
```
`-i | --info`:  Shows version, dependencies, download size and other information regarding the package. You can use `-ii` for extended information
```bash
pacman -Si package
pacman -Sii package # extended information
```

`--asdeps`: It marks packages as installed as a dependency. It does not affect functionality but helps clustering of unused dependencies
```bash
pacman -S --asdeps package
```
`--asexplicity`: It marks the package `foo` as explicitly installed. It is opposite of `--asdeps`.
```bash
pacman -S --asexplicit package
```

`--noconfirm`: Automatically answers `yes` to prompts

### Removing packages
`-R` removes installed packages.


`-s`: Removes dependencies that were installed for the package `foo` and are no longer required
```bash
pacman -Rs foo 
```
`-n`: Removes all configuration files of the target package `foo`
```bash
pacman -Rn foo 
```
Combine both the options together for a clean removal:
```bash
pacman -Rsn foo 
```


## Optional dependencies
Some packages can use extra packages to add features. These are called optional dependencies They are not required for the program to run

Pacman shows them during installation, but they are not logged. You can later check optional dependencies using package query commands

Example:
A media player may run without extra codecs, but installing optional dependencies enables more formats.

### Installing packages as dependencies (--asdeps)

If you install a package only because another package needs it and you don't plan to use it directly, you should install it with the `--asdeps` option

This helps pacman know:
- Which packages you installed intentionally
- Which ones are only dependencies and can be removed later if unused

When you install a package `foo` with:
```bash
pacman -S --asdeps foo
```
This marks the package `foo` as installed as dependency. Pacman then later can remove this package if it no longer is a dependency.

This helps avoid cluttering of dependencies.
