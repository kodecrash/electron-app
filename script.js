// const { ipcRenderer } = require('electron');
const XLSX = require('xlsx')

let list = document.getElementById("list");
let newTask = document.getElementById("newTask");


const readExcel = () => {
    const workbook = XLSX.readFile('./files/apis.xlsx');
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    console.log(xlData);
}

document.getElementById("addTask").addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', `<li class="list-group-item">${newTask.value}</li>`);
 //   ipcRenderer.invoke('show-notification', newTask.value);
    newTask.value = '';
    readExcel();
});
