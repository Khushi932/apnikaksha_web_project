// let namasteBtn = document.querySelector('button');
// namasteBtn.addEventListener('click', showMsg);

// function showMsg(){
//     alert("Namaste World!!");
// }

let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter name of student');
    namasteBtn.textContent = 'Roll No. 1 : ' +name;
}