document.addEventListener("DOMContentLoaded", (event) => {
    let btnShowProduct = document.getElementById("btnShowProduct");
    btnShowProduct.addEventListener("click", (ShowProducts));
});

function ShowProducts() {
    let tbodyProduct = document.getElementById("tbodyProduct");

    let getProducts = localStorage.getItem('productList');
    let products = JSON.parse(getProducts);
    
    tbodyProduct.innerHTML = "";

    if (products && products.length > 0) {
        products.forEach((product) => {
            let row = tbodyProduct.insertRow();
            let nameCell = row.insertCell(0);   
            let descriptionCell = row.insertCell(1);
            let quantityCell = row.insertCell(2);
            let valueeCell = row.insertCell(3);

            nameCell.innerHTML = product.name;
            descriptionCell.innerHTML = product.description;
            quantityCell.innerHTML = product.quantity;
            valueeCell.innerHTML = product.valuee;
        })
    } else {
        let row = tbodyProduct.insertRow();
        let alerMessage = row.insertCell(0)
        alerMessage.colSpan = 4;
        alerMessage.innerHTML = "There are not products registered"
    }
}