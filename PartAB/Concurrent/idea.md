# IDEA Setup
Create a new sbt project in IDEA. Wait until setup finishes.

## Basic Setup (no documentation popup)
Download three package zip from course website (CSO.zip, CADS.zip, utils.zip) and change the extension name from zip to jar.

Create lib folder in project root folder. Move three downloaded jars to this folder.

In IDEA, sbt window, click the cycle (reload) button. Restart IDEA if it shows fails to extract project structure.

## Complete Setup (TBD, need source file)
Source File:
|Package Name|Status|
|--|--|
|[CSO](https://www.cs.ox.ac.uk/people/bernard.sufrin/personal/CSO/2.12.3/) | Only works in old scala |
|[CADS](https://www.cs.ox.ac.uk/teaching/materials20-21/cads/) | Working |
|util | Not found |

Move the source file folder to `src/main/scala`

First compilation might take a bit longer.

## Hackier way
#### Using provided class file but (older version) source file for documentation 
Follow Basic Setup

Create doc folder in project root folder. Unzip the sources to this folder. Your folder should look like this.
```
├─doc
│  ├─io
│  │  └─threadcso
|  |       ├─ ...
│  └─ox
│      └─cads
│          ├─...
```

In IDEA, top menu, `File - Project Structure` - `Module - Dependencies - sbt: unmanaged-jars`, click `+`, add the doc folder as sources.

It migh also be useful to add do not step into the classes settings, because now the class and source file does not match. Open `Setting`, search for `Do not step into the classes`, `add pattern`, `io.threadcso.*`