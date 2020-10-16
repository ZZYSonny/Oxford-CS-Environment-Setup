# Prelim
## Functional Programming (Haskell)
### Environment

[GHCi](https://www.haskell.org/downloads/#platform)

### Recommended VSCode Extension
#### [Simple GHC (Haskell) Integration](https://marketplace.visualstudio.com/items?itemName=dramforever.vscode-ghc-simple)
Code Highlighting. Syntax Checking. Documentation of functions. Checking Type of a expression.

Most useful and easy-to-use Haskell extension as it does not require installing any other software and works for single file (which covers all usage in first year)

#### [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)

Run code (using ghci).

### Unrecommended VSCode Extension
#### [Haskell GHCi Debug Adapter Phoityne](https://marketplace.visualstudio.com/items?itemName=phoityne.phoityne-vscode)
The tool this extension requires is a little bit hard to install. In most cases in first year, you can find bugs in your code by running a few examples. 

## Imperative Programming (Scala)
Just use [Intellij IDEA](https://www.jetbrains.com/idea/download/) and use SBT Project for libraries.

For pure VSCode setup, [Scala (Metals)
](https://marketplace.visualstudio.com/items?itemName=scalameta.metals) is not good enough at the time of writing. 

## Digital System
### Environment
Follow a link in lab0

You'll have `pyocd`,`gcc`(for ARM Cortex M0),`gdb`,`make`, and a serial terminal installed.

### Recommended VSCode Extension
#### [ARM](https://marketplace.visualstudio.com/items?itemName=dan-c-underwood.arm)
Highlighting for assembly files.

#### [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
Syntax Checking for C/C++ files.

#### [Cortex-Debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug)
Debug (line by line) C/C++, assembly with MicroBit. Disassembly C easily. 

Use this in `launch.json`.

In assembly, you can see the value of each register. (Very useful)