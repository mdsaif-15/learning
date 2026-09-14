# 🖥️ Terminal Commands Cheat Sheet

> A practical and beginner-friendly collection of terminal commands used while learning **C, Java, Python, MySQL, MongoDB, Node.js, React, Vite, npm, Git & GitHub**.

This README is built from my actual terminal practice/history and organized into categories so I can quickly find the command I need.

---

## 📌 Table of Contents

* [🧭 Navigation](#-navigation)
* [📂 Files & Directories](#-files--directories)
* [🍎 macOS Utilities](#-macos-utilities)
* [📝 Editing Files](#-editing-files)
* [🔵 C Programming](#-c-programming)
* [☕ Java](#-java)
* [🐍 Python](#-python)
* [🗄️ MySQL](#️-mysql)
* [🍃 MongoDB](#-mongodb)
* [🍺 Homebrew](#-homebrew)
* [🌐 Node.js & npm](#-nodejs--npm)
* [⚡ Vite & React](#-vite--react)
* [🌱 Git & GitHub](#-git--github)
* [📦 Archives](#-archives)
* [➡️ Redirection](#️-redirection)
* [❌ Common Mistakes](#-common-mistakes)
* [🧠 Terminal Mental Model](#-terminal-mental-model)
* [🚀 Most Important Commands](#-most-important-commands)

---

# 🧭 Navigation

Commands used to move around the filesystem.

| Command              | Meaning                 |
| -------------------- | ----------------------- |
| `pwd`                | Print current directory |
| `ls`                 | List files and folders  |
| `ls -a`              | Show hidden files       |
| `ls -l`              | Detailed file listing   |
| `cd folder`          | Enter a folder          |
| `cd ..`              | Move one directory up   |
| `cd ~`               | Go to home directory    |
| `cd`                 | Go to home directory    |
| `cd /path/to/folder` | Go to an absolute path  |

### Check current location

```bash
pwd
```

Example:

```text
/Users/saif-/Desktop
```

### List files

```bash
ls
```

### Show hidden files

```bash
ls -a
```

### Detailed listing

```bash
ls -l
```

### Move into a directory

```bash
cd Downloads
```

### Move one level up

```bash
cd ..
```

### Go home

```bash
cd ~
```

or simply:

```bash
cd
```

---

## 📁 Working With Spaces in Folder Names

If a folder contains spaces, escape the space:

```bash
cd Day\ 4
```

or use quotes:

```bash
cd "Day 4"
```

### Example

```text
Day 4
```

Correct:

```bash
cd Day\ 4
```

or:

```bash
cd "Day 4"
```

---

# 📂 Files & Directories

## Create a directory

```bash
mkdir folder
```

### Create nested directories

```bash
mkdir -p public/covers
```

`-p` creates parent directories when necessary.

---

## Open a file/application

macOS provides the `open` command.

```bash
open index.html
```

```bash
open notes.pdf
```

```bash
open IMG_6191.MOV
```

You can also open websites:

```bash
open https://youtube.com
```

---

## Display file contents

```bash
cat file.txt
```

Example:

```bash
cat ~/.zsh_history
```

---

# 🍎 macOS Utilities

## Clear terminal

```bash
clear
```

---

## Show current date/time

```bash
date
```

---

## Show current user

```bash
whoami
```

---

## Show command history

```bash
history
```

---

## Read command documentation

```bash
man history
```

```bash
man date
```

The `man` command opens the manual page for a command.

To exit a `man` page:

```text
q
```

> ⚠️ `q` is normally used **inside the manual/pager**. Typing `q` directly in the shell gives `command not found`.

---

## Exit a program

Common commands:

```bash
exit
```

or:

```bash
quit
```

Whether `quit` works depends on the program you're currently inside.

---

# 📝 Editing Files

## Nano

`nano` is a terminal-based text editor.

```bash
nano hello.c
```

Example:

```bash
nano saif.c
```

Basic workflow:

```text
nano file
   ↓
Write/Edit
   ↓
Ctrl + O → Save
   ↓
Enter
   ↓
Ctrl + X → Exit
```

---

# 🔵 C Programming

## Compile C code

The basic command is:

```bash
gcc filename.c
```

Example:

```bash
gcc area.c
```

Then GCC normally creates:

```text
a.out
```

Run it:

```bash
./a.out
```

### Example

```bash
gcc area.c
./a.out
```

---

## Better way: choose executable name

Instead of using `a.out`:

```bash
gcc area.c -o area
```

Run:

```bash
./area
```

### Recommended workflow

```bash
gcc program.c -o program
./program
```

---

## Check GCC version

```bash
gcc -v
```

> `gcc --v` is incorrect.

---

## C Programs Practiced

Examples from my terminal history:

```bash
gcc fibonacci.c
gcc binarysearch.c
gcc insertion.c
gcc traversal.c
gcc creation_linkedlist.c
gcc FCFS_CPUScheduling.c
gcc SJF_Scheduling.c
gcc Round_Robin_Scheduling.c
gcc implement_Producer_Consumer_Problem_Using_Semaphores.c
gcc Illustrate_IPC_Mechanism_Using_FIFO.c
gcc Simulate_Best_Fit_Memory_Allocation.c
```

Run the compiled program:

```bash
./a.out
```

---

# ☕ Java

Java has two important commands:

```text
javac → Compile
java  → Run
```

---

## Compile Java

```bash
javac Hello.java
```

This creates a `.class` file.

---

## Run Java

```bash
java Hello
```

### Important

When running Java, normally use the **class name**, not `.java`.

Correct:

```bash
java Hello
```

Not:

```bash
java Hello.java
```

---

## Basic Java workflow

```bash
javac Hello.java
java Hello
```

### Example

```bash
javac RemoveDuplicates.java
java RemoveDuplicates
```

---

## Compile package-based Java code

```bash
javac -d . Book.java
```

`-d .` tells `javac` where to place generated `.class` files.

---

## Java commands practiced

```bash
javac fibonacci.java
java fibonacci

javac SearchElement.java
java SearchElement

javac FindDuplicates.java
java FindDuplicates

javac EvenOddSum.java
java EvenOddSum

javac RemoveDuplicates.java
java RemoveDuplicates

javac toUpper.java
java toUpper
```

---

## ⚠️ VS Code Java Commands

Sometimes VS Code generated very long commands such as:

```text
/usr/bin/env ... java ... -cp ... ClassName
```

These are usually generated by the Java extension.

### Don't memorize them.

For normal terminal practice, remember:

```bash
javac File.java
java ClassName
```

---

# 🐍 Python

## Run Python program

```bash
python3 program.py
```

Examples:

```bash
python3 product.py
```

```bash
python3 function.py
```

```bash
python3 app.py
```

---

## Check Python version

```bash
python3 --version
```

---

## Python executable path

You may also run Python using its full path:

```bash
/usr/bin/python3 "product.py"
```

This is useful when you specifically want a particular Python executable.

---

## ❌ Don't run C files with Python

Incorrect:

```bash
python3 product.c
```

A `.c` file should normally be compiled with GCC:

```bash
gcc product.c -o product
./product
```

---

# 📦 pip

`pip` is Python's package manager.

## Check pip

```bash
pip --version
```

or:

```bash
pip3 --version
```

---

## Check pip through Python

```bash
python3 -m pip --version
```

---

## Install a package

```bash
pip install flask
```

or:

```bash
pip3 install flask
```

A more explicit approach:

```bash
python3 -m pip install flask
```

---

## Upgrade a package

Example:

```bash
pip install --upgrade mysql-connector-python
```

or:

```bash
pip3 install --upgrade mysql-connector-python
```

---

## Install MySQL connector

```bash
pip3 install mysql-connector
```

For the Python MySQL connector package used in projects:

```bash
pip3 install --upgrade mysql-connector-python
```

---

# 🗄️ MySQL

## Open MySQL

```bash
mysql -u root -p
```

Breakdown:

```text
mysql     → MySQL client
-u root   → username is root
-p        → ask for password
```

So:

```bash
mysql -u root -p
```

means:

> Connect to MySQL as user `root` and prompt me for the password.

---

## Exit MySQL

```sql
exit
```

or:

```sql
quit
```

---

## ⚠️ Common mistake

Incorrect:

```bash
mysql -u -root -p
```

Correct:

```bash
mysql -u root -p
```

---

# 🍃 MongoDB

## Open MongoDB Shell

```bash
mongosh
```

This opens the MongoDB shell.

---

## Exit MongoDB Shell

```bash
exit
```

or:

```bash
quit
```

---

## MongoDB with Homebrew

Install MongoDB:

```bash
brew install mongodb-community
```

Start MongoDB:

```bash
brew services start mongodb-community
```

Then open the shell:

```bash
mongosh
```

---

# 🍺 Homebrew

**Homebrew** is a package manager for macOS.

It allows you to install developer tools and software from the terminal.

---

## Check Homebrew version

```bash
brew --version
```

---

## Get Homebrew help

```bash
brew --help
```

---

## Install a package

General syntax:

```bash
brew install package-name
```

Example:

```bash
brew install mongodb-community
```

---

## Add a Homebrew repository

```bash
brew tap mongodb/brew
```

`brew tap` adds an additional repository/source from which Homebrew can find packages.

---

## Start a service

```bash
brew services start mongodb-community
```

---

## Reinstall a package

```bash
brew reinstall mongodb-community
```

---

## Install MongoDB

Examples from my practice:

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
mongosh
```

---

## Xcode Command Line Tools

```bash
xcode-select --install
```

These tools are commonly required for development/build tools on macOS.

---

# 🌐 Node.js & npm

## Check Node.js

```bash
node -v
```

---

## Check npm

```bash
npm -v
```

---

## Install project dependencies

```bash
npm install
```

Short version:

```bash
npm i
```

Both are commonly used to install dependencies from `package.json`.

---

## Run development server

```bash
npm run dev
```

This runs the `dev` script defined inside `package.json`.

Typical Vite workflow:

```bash
npm install
npm run dev
```

---

## Build project

```bash
npm run build
```

Creates a production build.

---

## Preview production build

```bash
npm run preview
```

---

# ⚡ Vite & React

## Create a Vite project

```bash
npm create vite@latest
```

Typical flow:

```text
npm create vite@latest
        ↓
Choose project name
        ↓
Choose framework
        ↓
Choose variant
        ↓
cd project
        ↓
npm install
        ↓
npm run dev
```

---

## Install Vite PWA plugin

```bash
npm install -D vite-plugin-pwa
```

`-D` means:

```bash
--save-dev
```

So:

```bash
npm install -D package
```

installs the package as a development dependency.

---

## Install Bootstrap

```bash
npm i bootstrap@5.3.8
```

---

## Typical React/Vite workflow

```bash
npm create vite@latest
cd project-name
npm install
npm run dev
```

---

## Production workflow

```bash
npm run build
npm run preview
```

---

# 📦 ZIP Files

## Extract ZIP

```bash
unzip react-music-player.zip
```

Then:

```bash
cd music-player
```

Install dependencies:

```bash
npm install
```

Start:

```bash
npm run dev
```

---

# ➡️ Redirection

The terminal allows output to be redirected into files.

## `>`

Overwrite/create a file:

```bash
echo "Hello" > file.txt
```

If `file.txt` already exists, its previous content is replaced.

---

## `>>`

Append to a file:

```bash
echo "Hello" >> file.txt
```

This adds content to the end without replacing existing content.

### Example

```bash
echo "# Demo" >> README.md
```

This adds:

```markdown
# Demo
```

to the end of `README.md`.

---

# 🌱 Git & GitHub

Git is used for **version control**.

---

## Initialize Git

```bash
git init
```

Creates a Git repository in the current directory.

---

## Check Git help

```bash
git --help
```

---

## Check branches

```bash
git branch
```

---

## Stage files

```bash
git add .
```

`.` means:

> Add changes from the current directory.

---

## Create a commit

```bash
git commit -m "Initial commit"
```

`-m` allows you to provide the commit message.

---

## Rename current branch to main

```bash
git branch -M main
```

---

## Add GitHub remote

```bash
git remote add origin <repository-url>
```

---

## Push to GitHub

First push:

```bash
git push -u origin main
```

Later pushes:

```bash
git push
```

---

# 🔥 Basic Git Workflow

```text
Write Code
    ↓
git status
    ↓
git add .
    ↓
git commit -m "Describe changes"
    ↓
git push
```

### First-time project setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repository-url>
git push -u origin main
```

### Future updates

```bash
git add .
git commit -m "Update project"
git push
```

---

# 📦 Useful File Commands

| Command               | Purpose                              |
| --------------------- | ------------------------------------ |
| `mkdir folder`        | Create directory                     |
| `mkdir -p a/b`        | Create nested directories            |
| `cat file`            | Display file                         |
| `nano file`           | Edit file in terminal                |
| `open file`           | Open using macOS default application |
| `unzip file.zip`      | Extract ZIP                          |
| `echo "text"`         | Print text                           |
| `echo "text" >> file` | Append text                          |
| `pwd`                 | Show current directory               |
| `ls`                  | List files                           |

---

# ❌ Common Mistakes From Practice

Mistakes are useful because they show what to remember.

| ❌ Typed                | ✅ Correct               |
| ---------------------- | ----------------------- |
| `cd..`                 | `cd ..`                 |
| `..cd`                 | `cd ..`                 |
| `.. cd`                | `cd ..`                 |
| `whoiam`               | `whoami`                |
| `git states`           | `git status`            |
| `npm instal`           | `npm install`           |
| `npm rum dev`          | `npm run dev`           |
| `npm dev run`          | `npm run dev`           |
| `npm --v`              | `npm -v`                |
| `gcc --v`              | `gcc -v`                |
| `mysql -u -root -p`    | `mysql -u root -p`      |
| `my sql -u root -p`    | `mysql -u root -p`      |
| `python3 product.c`    | `python3 product.py`    |
| `javaRemoveDuplicates` | `java RemoveDuplicates` |
| `jvm boss`             | `java boss`             |
| `cd downlods`          | `cd Downloads`          |
| `cd decktop`           | `cd Desktop`            |
| `mangosh`              | `mongosh`               |

---

# 🧠 Terminal Mental Model

Instead of memorizing hundreds of commands, think in **categories**.

```text
                    TERMINAL
                       │
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
    NAVIGATION      PROGRAMMING     TOOLS
        │              │              │
    pwd / ls        gcc / javac     npm / git
    cd / ..         python3        brew
        │              │            mysql
        │              │            mongosh
        ↓              ↓
     FILES           RUN CODE
        │              │
    mkdir / cat      ./a.out
    nano / open      java Class
    unzip            python3 file.py
```

---

# 🧩 The Most Important Concepts

## 1️⃣ Navigation

```bash
pwd
ls
cd folder
cd ..
cd ~
```

Think:

> **Where am I? → What's here? → Where do I go?**

---

## 2️⃣ Compile vs Run

### C

```bash
gcc program.c -o program
./program
```

### Java

```bash
javac Program.java
java Program
```

### Python

```bash
python3 program.py
```

Python normally doesn't require the separate `javac`-style compilation step for ordinary scripts.

---

## 3️⃣ JavaScript / React

```bash
npm install
npm run dev
```

Think:

```text
package.json
     ↓
npm install
     ↓
Dependencies installed
     ↓
npm run dev
     ↓
Development server
```

---

## 4️⃣ Git

```bash
git add .
git commit -m "message"
git push
```

Think:

```text
Code
 ↓
Stage
 ↓
Commit
 ↓
Push
 ↓
GitHub
```

---

# 🚀 Most Important Commands

If I only remember a small set, these are the commands to prioritize:

### 🧭 Terminal

```bash
pwd
ls
ls -a
ls -l
cd folder
cd ..
cd ~
clear
history
```

### 📂 Files

```bash
mkdir
mkdir -p
cat
nano
open
unzip
```

### 🔵 C

```bash
gcc file.c -o file
./file
```

### ☕ Java

```bash
javac File.java
java File
```

### 🐍 Python

```bash
python3 file.py
python3 --version
python3 -m pip --version
```

### 🗄️ Databases

```bash
mysql -u root -p
mongosh
```

### 🍺 Homebrew

```bash
brew --version
brew install package
brew services start package
```

### 🌐 Node / React

```bash
node -v
npm -v
npm install
npm run dev
npm run build
npm run preview
```

### 🌱 Git

```bash
git init
git add .
git commit -m "message"
git branch
git branch -M main
git remote add origin <url>
git push
```

---

# 🎯 Learning Priority

A good order for mastering these commands:

```text
LEVEL 1
🧭 Terminal Navigation
pwd → ls → cd → mkdir → cat
          ↓
LEVEL 2
💻 Programming
gcc → javac → java → python3
          ↓
LEVEL 3
⚡ Web Development
node → npm → Vite → React
          ↓
LEVEL 4
🌱 Version Control
git → GitHub
          ↓
LEVEL 5
🗄️ Databases
MySQL → MongoDB
          ↓
LEVEL 6
🍺 System & Package Management
Homebrew → services → system tools
```

---

# 💡 Golden Rule

Don't try to memorize the terminal.

Understand the **pattern**:

```text
WHERE AM I?
    ↓
pwd

WHAT IS HERE?
    ↓
ls

GO SOMEWHERE
    ↓
cd

CREATE SOMETHING
    ↓
mkdir

EDIT SOMETHING
    ↓
nano

RUN CODE
    ↓
gcc / javac / python3

RUN PROJECT
    ↓
npm run dev

SAVE VERSION
    ↓
git add → git commit → git push
```

---

## ⭐ Quick Reference

```bash
# Navigation
pwd
ls
ls -a
ls -l
cd folder
cd ..
cd ~

# Files
mkdir folder
mkdir -p a/b
cat file.txt
nano file.txt
open file.txt
unzip file.zip

# C
gcc program.c -o program
./program

# Java
javac Program.java
java Program

# Python
python3 program.py
python3 --version

# MySQL
mysql -u root -p

# MongoDB
mongosh

# Homebrew
brew --version
brew install package
brew services start package

# Node / npm
node -v
npm -v
npm install
npm run dev
npm run build
npm run preview

# Git
git init
git add .
git commit -m "message"
git branch
git branch -M main
git remote add origin <url>
git push
```

---

## 🏁 Final Note

> **The terminal becomes easy when you stop memorizing commands and start understanding what each command is doing.**

Keep this README as a personal **Terminal + Development Command Cheat Sheet** and add new commands as you encounter them.
