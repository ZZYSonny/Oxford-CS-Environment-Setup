# Graphics
## Task1
Always run the python webserver(serve.sh) in background. (The shader folder does not load using file://)

Launch the web page in browser and then debug in VSCode: \
Google Chrome(need to install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome))\
Chromium Edge (No extra extension required)

`launch.json` for launching in Edge:
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Edge",
            "request": "launch",
            "type": "pwa-msedge",
            "url": "http://localhost:8000",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```


## Task2
### Basic Python Setup