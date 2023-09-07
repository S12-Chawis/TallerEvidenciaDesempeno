document.addEventListener("DOMContentLoaded", (event) => {
    let btnRegisterCustomer = document.getElementById("btnRegisterCustomer");
    var saveCustomers = []
    btnRegisterCustomer.addEventListener("click", (e) => {
        e.preventDefault();
        let customerName = document.getElementById("customerName");
        let customerPhone = document.getElementById("customerPhone");
        let customerAddress = document.getElementById("customerAddress");
        let customerEmail = document.getElementById("customerEmail");
        const Customer = {
            name: customerName.value,
            phone: customerPhone.value,
            address: customerAddress.value,
            email: customerEmail.value
        }

        if (customerName.value == "" || customerPhone.value == "" || customerAddress.value == "" || customerEmail.value == "") {
            alert("Please fill out all the required fields")
        } else {
            saveCustomers.push(Customer);
            localStorage.setItem('customerList', JSON.stringify(saveCustomers));
            alert('You successfully added a new customer');
            customerName.value = "";
            customerPhone.value = "";
            customerAddress.value = "";
            customerEmail.value = "";
            
        }
    })
});