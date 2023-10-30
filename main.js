"use strict";

// для сборки app
const { app, BrowserWindow } = require('electron');

const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'app_script.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    main();
})





// let win;
//
// function createWindow() {
//     win = new BrowserWindow({
//         width: 700,
//         height: 500,
//     });
//
//     win.loadURL(url.format({
//         pathname: path.join(__dirname, 'index.html'),
//         protocol: 'file:',
//         slashes: true
//     }));
//
//     win.webContents.openDevTools();
//
//     win.on('closed', () => {
//         win = null;
//     });
// }
//
// app.on('ready', createWindow);
//
// app.on('window-all-closed', () => {
//     app.quit();
// });





