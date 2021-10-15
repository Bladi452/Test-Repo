const {app, BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        height:600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    });
    win.setTitle('My App')
    win.loadFile('src/html/index.html')
}

app.whenReady().then(createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () =>{
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});
