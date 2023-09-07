document.addEventListener("DOMContentLoaded", (event) => {
    let btnShowEverything = document.getElementById("btnShowEverything");
    btnShowEverything.addEventListener("click", (ShowEverything));
});

function ShowEverything() {
    let tbodyCustomer = document.getElementById("tbodyCustomer");

    let getCustomers = localStorage.getItem('customerList');
    let customers = JSON.parse(getCustomers);
    
    tbodyCustomer.innerHTML = "";

    if (customers && customers.length > 0) {
        customers.forEach((customer) => {
            let row = tbodyCustomer.insertRow();
            let nameCell = row.insertCell(0);   
            let phoneCell = row.insertCell(1);
            let addressCell = row.insertCell(2);
            let emailCell = row.insertCell(3);

            nameCell.innerHTML = customer.name;
            phoneCell.innerHTML = customer.phone;
            addressCell.innerHTML = customer.address;
            emailCell.innerHTML = customer.email;
        })
    } else {
        let row = tbodyCustomer.insertRow();
        let alerMessage = row.insertCell(0)
        alerMessage.colSpan = 4;
        alerMessage.innerHTML = "There are not customers registered"
    }

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

    let tbodySupplier = document.getElementById("tbodySupplier");

    let getSuppliers = localStorage.getItem('supplierList');
    let suppliers = JSON.parse(getSuppliers);
    
    tbodySupplier.innerHTML = "";

    if (suppliers && suppliers.length > 0) {
        suppliers.forEach((supplier) => {
            let row = tbodySupplier.insertRow();
            let nameCell = row.insertCell(0);   
            let phoneCell = row.insertCell(1);
            let addressCell = row.insertCell(2);
            let NITCell = row.insertCell(3);

            nameCell.innerHTML = supplier.name;
            phoneCell.innerHTML = supplier.phone;
            addressCell.innerHTML = supplier.address;
            NITCell.innerHTML = supplier.NIT;
        })
    } else {
        let row = tbodySupplier.insertRow();
        let alerMessage = row.insertCell(0)
        alerMessage.colSpan = 4;
        alerMessage.innerHTML = "There are not suppliers registered"
    }
}