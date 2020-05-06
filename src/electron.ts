// import path from 'path'
import { app, BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'
// import * as path from 'path'
// import * as url from 'url'

declare global {
  const MAIN_WINDOW_WEBPACK_ENTRY: string
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit()
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: null | BrowserWindow

const installExtensions = async () => {
  const installer = import('electron-devtools-installer')
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ['REACT_DEVELOPER_TOOLS']
  //   const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS']

  return Promise.all(
    extensions.map((name) => installer.default(installer[name], forceDownload))
  ).catch(console.log)
}

const createWindow = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await installExtensions()
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true, // web workers
      // webSecurity: false,
    },
  })

  // and load the index.html of the app.
  mainWindow.loadURL(
    // isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
    'http://localhost:3000'
  )

  // if (process.env.NODE_ENV !== 'production') {
  //   console.log('MAIN_WINDOW_WEBPACK_ENTRY => ', MAIN_WINDOW_WEBPACK_ENTRY)
  //   mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
  // } else {
  //   mainWindow.loadURL(
  //     url.format({
  //       pathname: path.join(__dirname, 'index.html'),
  //       protocol: 'file:',
  //       slashes: true,
  //     })
  //   )
  // }

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  // if (process.env.NODE_ENV !== 'production') {
  //   // Open DevTools
  //   mainWindow.webContents.openDevTools()
  // }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
