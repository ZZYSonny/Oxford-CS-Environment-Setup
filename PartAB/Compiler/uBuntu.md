
# Tool(chain)
## opam & ocaml
The default version of ocaml from apt is 4.08.1. But the debugging adapter is unmaintained and only work in lower version. So now we are going to manually install opam and ocaml 4.07.1. (You can use apt to install ocaml and opam if you don't want debug support. It is actually rarely used.)

Install opam and dependencies
```bash
sudo apt install m4 gcc binutils-dev make pkg-config
sh <(curl -sL https://raw.githubusercontent.com/ocaml/opam/master/shell/install.sh)
```

Install [Ocaml 4.07.1 and create switch](https://github.com/janestreet/install-ocaml)
```bash
opam init -y --compiler=4.07.1 --disable-sandboxing
opam switch create 4.07.1
```

Install [Ocamllsp](https://github.com/ocaml/ocaml-lsp) for language server
```
opam install ocaml-lsp-server
```

Install [Earlybird](https://github.com/hackwaly/ocamlearlybird) for debugging support
```
opam install earlybird
```

## ARM
In Lab4, the practical requires us to compile project for ARM devices. So these tools are needed.
```
apt install qemu-user gcc-arm-linux-gnueabihf
```

# VSCode
## Extension to Install
[OCaml Platform](https://marketplace.visualstudio.com/items?itemName=ocamllabs.ocaml-platform)

Need to `make` once at least. Otherwise it does not show any information.

[OCaml Debugger](https://marketplace.visualstudio.com/items?itemName=hackwaly.ocaml-debugger)

Need to add `-g` flag to every `ocamlc` in `Makefile`. You can search for `ocamlc` and replace it with `ocamlc -g` for the first few practicals.

## Project Setup
Please see [project folder](project/)

## Project Setup Explanation
### [.merlin](project/.merlin)
First few lines specifies source file included for language support. \
Last FLG line is for lab4. The ocaml source code is first 
```
S lab4
B lab4
S lib
B lib
S tools
B tools
FLG -pp ./tools/nodexp
```
### [launch.json](project/.vscode/launch.json)
In lab1-lab4, the compiled ocaml program is `ppc`. The argument is the file we want to compile.
```json
{
    "version": "0.2.0",
    "configurations": [
      {
        "name": "OCaml Debug",
        "type": "ocaml-debugger",
        "request": "launch",
        "program": "${fileDirname}/ppc",
        "arguments": ["test.p"],
        "cwd": "${fileDirname}",
        "console": "internalConsole",
        "preLaunchTask": "build"
      }
    ]
  }
```

### [settings.json](project/.vscode/settings.json)
Some useful setting for the project. Avoid showing unnecessary cmo files in explorer.