document.addEventListener("DOMContentLoaded", (event) => {
    let btnShowCustomer = document.getElementById("btnShowCustomer");
    btnShowCustomer.addEventListener("click", (ShowCustomers));
});

function ShowCustomers() {
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
}