document.addEventListener("DOMContentLoaded", (event) => {
    let btnShowSupplier = document.getElementById("btnShowSupplier");
    btnShowSupplier.addEventListener("click", (ShowSuppliers));
});

function ShowSuppliers() {
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