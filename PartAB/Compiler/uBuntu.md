
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

Add ocamlc to path
```bash
opam init
````
```
Do you want opam to modify ~/.profile? [N/y/f]
(default is 'no', use 'f' to choose a different file) y
A hook can be added to opam's init scripts to ensure that the shell remains in sync with the opam environment when they are
loaded. Set that up? [y/N] N
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

You may need to change value of switch if you are using other version of ocaml.
```json
{
    ...
    "ocaml.sandbox": {
        "kind": "opam",
        "switch": "4.07.1"  <-- Here
    },
}
```

## Debug arm binary from lab 4 on x64 linux

Install gdb-multiarch
```bash
sudo apt install gdb-multiarch
```

Run the binary with qemu, with a port gdb can listen
```bash
qemu-arm -g 12345 ./b.out
```

Run GDB
```bash
gdb-multiarch b.out --eval-command "target remote 127.0.0.1:12345" --eval-command "layout asm"
```

Some useful GDB command
|GDB Command|Effect|
|-----------|------|
|si|run one instruction (follow function call)|
|ni|run one instruction (do not debug function call)
|break *_start+4|breakpoint on a address in assemblt|
|info register r1 r2 r3 r4|show value of r1-r4 once|
|display $r1|show value of r1 every step|
|backtrace|show stack frame|