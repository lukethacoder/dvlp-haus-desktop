// const electron = require('electron')
const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')
const installer = require('electron-devtools-installer')
const isDev = require('electron-is-dev')
const Store = require('electron-store')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// if (require('electron-squirrel-startup')) {
//   // eslint-disable-line global-require
//   app.quit()
// }

async function installExtensions() {
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ['REACT_DEVELOPER_TOOLS']

  return Promise.all(
    extensions.map((name) => installer.default(installer[name], forceDownload))
  ).catch(console.log)
}

async function createWindow() {
  if (process.env.NODE_ENV !== 'production') {
    await installExtensions()
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 600,
    backgroundColor: '#141414',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, 'preload.js'), // use a preload script
      // webSecurity: false,
    },
  })

  // and load the index.html of the app.
  mainWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
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

//json-schema.org
const schema = {
  theme: {
    type: 'string',
  },
  // add more store items here
}

// saves config.json to: C:\Users\USER_NAME\AppData\Roaming\dvlp.haus
const store = new Store({ schema })

ipcMain.on('get-value', (e, message) => {
  let responseObj

  try {
    const { key } = message

    if (key) {
      responseObj = {
        success: true,
        message: `Successfully found key of ${key}`,
        key: key,
        value: store.get(key),
      }
    } else {
      responseObj = {
        success: false,
        message: 'Invalid object passed. make sure you pass { key: key, value: value }',
      }
    }
  } catch (e) {
    // If error also return initialValue
    console.log(e)
    responseObj = {
      success: false,
      message: e,
    }
  }

  // Send result back to renderer process
  mainWindow.webContents.send('got-value', responseObj)
})

ipcMain.on('set-value', (e, message) => {
  let responseObj

  try {
    const { key, value } = message

    if (key && value) {
      store.set(key, value)

      responseObj = {
        success: true,
        message: `Successfully updated key of ${key}, with new value of ${value}`,
        key: store.get(key),
        value: value,
      }
    } else {
      responseObj = {
        success: false,
        message: 'Invalid object passed. make sure you pass { key: key, value: value }',
        key: store.get(key),
        value: value,
      }
    }
  } catch (e) {
    // If error also return initialValue
    console.log(e)
    responseObj = {
      success: false,
      message: e,
    }
  }

  // Send result back to renderer process
  mainWindow.webContents.send('set-value-main', responseObj)
})
