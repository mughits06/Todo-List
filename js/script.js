// // elemnts
// const inputBox = document.querySelector(".inputField input");
// const addbtn  = document.querySelector(".inputField button");
// const todoList = document.querySelector(".todoList");
// const deleteAllBtn = document.querySelector("footer button");

// inputBox.onkeyup = ()=>{
//     let userEnternedValue = inputBox.value; // untuk mendapatkan value yang sudah ada
//     if(userEnternedValue.trim() != 0){ // mengecek value apakah sudah di input
//         addbtn.classList.add("active"); // active btn
//     }else{
//         addbtn.classList.remove("active"); // unactive btn
//     }
// }
// showTask();

// addbtn.onClick = () =>{ // ketika button + di klik 
//     let userEnternedValue = inputBox.value; // untuk get value yang sudah ada
//     let getLocalStorageData = localStorage.getItem("New Todo"); // get local
//     if (getLocalStorageData == null){ // mengecek kondisi data kosong
//         listArray = [] // membuat array kosong untuk value baru
//     } else{
//         listArray = JSON.parse(getLocalStorageData); // mengubah json string ke json object
//     }
//     listArray.push(userEnternedValue); // menambahkan data value ke array
//     localStorage.setItem("New Todo", JSON.stringify(listArray)); // mengubah json object ke array
//         showTask()
//         addbtn.classList.remove("active") // non aktifkan kan button
// }

// function showTask(){
//     let getLocalStorageData = localStorage.getItem("New Todo");
//     if (getLocalStorageData == null){
//         listArray = [];
//     }else{
//         listArray = JSON.parse(getLocalStorageData);
//     }
//     const pendingTaksNumb = document.valu.querySelector(".pendingTask")
//     pendingTaksNumb.textContent = listArray.length;
//     if(listArray.length > 0){
//         deleteAllBtn.classList.add("active");
//     } else{
//         deleteAllBtn,classList.remove("active");
//     }
//     let newLiTag = "";
//     listArray.forEach((element, index) => {
//         newLiTag += `<li>${element}<span class = "icon" onClick="deleteTask"(${index})">
//         <i class = "fas fa-trash"></i></span></li>`; // mengambil data yang ada pada array untuk di ulang didalam tag <ul></ul>
        
//     });

//     // $ => mengambil data dari html
//     todoList.innerHTML = newLiTag;// menambahkan tag <li> kedalam tag </ul>
//     inputBox.value = ""
// }

// function deleteTask(index){
//     let getLocalStorageData = localStorage.getItem("New Todo");
//     listArray = JSON.parse(getLocalStorageData);
//     listArray.splice(index,1);
//     localStorage.setItem("New Item" , JSON.stringify(listArray));
//     showTask();
// }

// deleteAllBtn.onClick = () =>{
//     let getLocalStorageData = localStorage.getItem("New Todo");
//     if(getLocalStorageData == null){
//         listArray = [];
//     }else{
//         listArray = JSON.parse(getLocalStorageData);
//         listArray = [];
//     }
//     localStorage.setItem("New Todo", JSON.stringify(listArray));
//     showTask();
// }

//elements

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");


inputBox.onkeyup = ()=>{ 
    let userEnteredValue = inputBox.value;//untuk mendapatkan value yang sudah diinput
    if (userEnteredValue.trim() != 0){//mengecek value apakah sudah diinput
        addBtn.classList.add("active");//active btn
    }else{
        addBtn.classList.remove("active");//unactive btn
    }
}

showTask();

addBtn.onclick = () =>{//ketika user click button +
    let userEnteredValue = inputBox.value; //mengambil value yang diinput
    let getLocalStorageData = localStorage.getItem("New Todo");//membuat localstorage
    if(getLocalStorageData == null){//mengecek apakah data kosong
        listArray = [];//membuat array kosong
    }else{
        listArray = JSON.parse(getLocalStorageData);//mengubah json string ke json object
    }
    listArray.push(userEnteredValue);//menambahkan data value ke array
    localStorage.setItem("New Todo", JSON.stringify(listArray));//mengubah json object ke json array
    showTask();
    addBtn.classList.remove("active")//unactive btn
}

function showTask(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if (getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTaskNumb = document.querySelector(".pendingTask")
    pendingTaskNumb.textContent = listArray.length;//memberikan jumlah panjang array di pendingTask
    if (listArray.length > 0){// jika panjang array lebih dari 0
        deleteAllBtn.classList.add("active")//active button
    } else{
        deleteAllBtn.classList.remove("active")//unactive button
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;//mengambil data yang ada pada array untuk di ulang di dalam tag <ul></ul>
    });
    //$ => mengambil dari html
    todoList.innerHTML = newLiTag;// menambahkan tag <li> ke dalam tag <ul>
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTask();
}

deleteAllBtn.onclick = ()=>{
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
        listArray = [];
    }else{
        listArray = JSON.parse(getLocalStorageData);
        listArray= [];
    }
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTask();
}