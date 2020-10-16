# Part A/B
## Compiler
### Environment
[This](https://github.com/janestreet/install-ocaml) includes ways to install ocaml on many systems.

`opam` is useful for installing tools required by VSCode extensions.
### Recommended VSCode extensions
#### [OCaml Platform](https://marketplace.visualstudio.com/items?itemName=ocamllabs.ocaml-platform)
Highlighting for ocaml files. 

Syntax Checking. Error Checking. (not for `mll` and `mly` files though). 

##### Dependencies
[ocaml-lsp](https://github.com/ocaml/ocaml-lsp)

##### Project Setup
Put a `.merlin` file in the project root directory. So when you are working on lab x, files for other lab will not be used by the plugin. (To remove Unbounded warning)
```
S lab1
B lab1
S lib
B lib
```
### Unrecommended VSCode extensions
#### [OCaml Debugger](https://marketplace.visualstudio.com/items?itemName=hackwaly.ocaml-debugger)
Debugging for OCaml executable. 

The tools this extension depends on `earlybird` is undermaintained. The latest OCaml version it works is `4.7.1` (you can still use this for practical).

Most code written in practical still seems very functional. (I only used it for showing variable values.)