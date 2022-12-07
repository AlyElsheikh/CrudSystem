pName = document.getElementById("pName");
pPrice = document.getElementById("pPrice");
pCate = document.getElementById("pCate");
pDesc = document.getElementById("pDesc");

if(localStorage.getItem("allData") == null){
    var productsList = [];
}else{
    var productsList = JSON.parse(localStorage.getItem("allData"));
    display()
}


function addProduct(){
    var product = {
        name: pName.value,
        price: pPrice.value,
        cate: pCate.value,
        desc: pDesc.value
    }
    productsList.push(product);
    localStorage.setItem("allData" , JSON.stringify(productsList));
    clearForm()
    display()
}

function clearForm(){
    pName.value = "";
    pPrice.value = "";
    pCate.value = "";
    pDesc.value = "";
}

function display(){
    var tBody = document.getElementById("tBody");
    var dPeoduct = "";
    for(var i = 0 ; i < productsList.length ; i++){
        dPeoduct += `
        <tr>
        <td>${i+1}</td>
        <td>${productsList[i].name}</td>
        <td>${productsList[i].cate}</td>
        <td>${productsList[i].price}</td>
        <td>${productsList[i].desc}</td>
        <td> <button class=" btn btn-outline-info"> Update </button> </td>
        <td> <button onclick="Delete(${i})" class=" btn btn-outline-danger"> Delete </button> </td>
        </tr>
        `
    }
    tBody.innerHTML = dPeoduct;
}

function Delete(index){
    productsList.splice(index , 1);
    localStorage.setItem("allData" , JSON.stringify(productsList));
    display()
}

function clearData(){
    localStorage.clear()
    productsList = [];
    display()
}




