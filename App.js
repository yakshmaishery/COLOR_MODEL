const {app,BrowserWindow, ipcMain} = require("electron")
const path = require("path")
const os = require("os")

let root;

const AppWindow = () => {
    root = new BrowserWindow({
        frame:false,
        webPreferences:{
            webSecurity:true,
            nodeIntegration:false,
            preload:path.join(app.getAppPath(),"Renderer.js")
        }
    })
    root.loadFile("index.html")
    
}

// for hardware 
app.disableHardwareAcceleration()

// Initial Start up
app.on("ready", () => {AppWindow()})

// close button
ipcMain.on("closeaction", () => {app.quit()})

// min button
ipcMain.on("minaction", () => {root.minimize()})

// max Button
ipcMain.on("maxaction", () => {root.isMaximized()?root.unmaximize():root.maximize()})