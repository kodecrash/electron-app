const electron = require("electron");

const { app, BrowserWindow,  ipcMain, Notification  } = electron;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});

// ipcMain.handle('show-notification', (event, ...args) => {
//     const notification = {
//         title: 'New Task',
//         body: `Added: ${args[0]}`
//     }

//     new Notification(notification).show()
// });
