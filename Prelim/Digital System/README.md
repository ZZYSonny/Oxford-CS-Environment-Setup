# Digital System
## ToolChain Install
Basically, you will need `gcc`, `gdb`, `make`, a serial terminal emulator.

### Windows
Note that WSL1 and WSL2 does not have full access to USB for now. All these package below works in native windows.
[GNU Toolchain](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads) used for compiling source file
[GNU Make](http://gnuwin32.sourceforge.net/packages/make.htm) Sadly not included in tool chain above and gnuwin32 make does not work well. Not required for the example project folder.
[OpenOCD Binary](https://github.com/xpack-dev-tools/openocd-xpack/releases) a bridge between GDB and device
[Tio Serial Terminal Emulator](https://github.com/tio/tio) Sadly no easy access to compiled binary online. One way to get it is through MSYS2. Not required for the example project folder.

Make sure binary are included in `PATH`.
```bash
> arm-none-eabi-g++.exe --version
arm-none-eabi-g++.exe (GNU Arm Embedded Toolchain 10-2020-q4-major) 10.2.1 20201103 (release) ...

> arm-none-eabi-gdb.exe --version
C:\Environment\GNUArm\bin\arm-none-eabi-gdb.exe: warning: ...

> openocd --version
xPack OpenOCD, x86_64 Open On-Chip Debugger 0.10.0+dev ...

> tio --help
Usage: /usr/bin/tio [<options>] <tty-device> ...

> make.exe
make: *** No targets specified and no makefile found.  Stop.
```
### MacOS & Linux
Instruction Missing. (Sadly Spivey removed the page.)

## VSCode
[ARM](https://marketplace.visualstudio.com/items?itemName=dan-c-underwood.arm) Highlighting for assembly files.
[C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) Syntax Checking for C/C++ files.
[Cortex-Debug](https://marketplace.visualstudio.com/items?itemName=marus25.cortex-debug) Support loading elf to MicroBit. Debug binaries, showing arm assembly and register value at each step.

You can also install these extension by pressing `Crtl+P` and input 
```
ext install dan-c-underwood.arm
ext install ms-vscode.cpptools
ext install marus25.cortex-debug
```

## Example VSCode Project Folder
- Open the folder in VSCode
- Open file [ssod.c](project/ssod.c), press `F5` to start running and debugging
- You can now see breakpoint met at init function. (First picture below)
- After pressing `F5`, the program resumes, showing `SEVEN STARS OF DEATH` periodically. 
- Or you can also Press `F1`, input `disassembly`, choose `Cortex-Debug: Set Force Disassembly`, then choose `Force`. You will see the second picture below. (Default is auto, when the program reaches some assembly file, assembly view will also be shown.)

![](pic/source.png)
![](pic/assembly.png)

//Breakpoint at init function is specified in [launch.json](project/.vscode/launch.json). Without this settings, initial debugger behavior is a bit weird. 
//Project file stripped down from 2019-2020 Digital system course practical.
