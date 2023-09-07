document.addEventListener("DOMContentLoaded", (event) => {
    let btnRegisterSupplier = document.getElementById("btnRegisterSupplier");
    var saveSuppliers = []
    btnRegisterSupplier.addEventListener("click", (e) => {
        e.preventDefault();
        let supplierName = document.getElementById("supplierName");
        let supplierPhone = document.getElementById("supplierPhone");
        let supplierAddress = document.getElementById("supplierAddress");
        let supplierNIT = document.getElementById("supplierNIT");
        const Supplier = {
            name: supplierName.value,
            phone: supplierPhone.value,
            address: supplierAddress.value,
            NIT: supplierNIT.value
        }

        if (supplierName.value == "" || supplierPhone.value == "" || supplierAddress.value == "" || supplierNIT.value == "") {
            alert("Please fill out all the required fields")
        } else {
            saveSuppliers.push(Supplier);
            localStorage.setItem('supplierList', JSON.stringify(saveSuppliers));
            alert('You successfully added a new supplier');
            supplierName.value = "";
            supplierPhone.value = "";
            supplierAddress.value = "";
            supplierNIT.value = "";

        }

    })
});