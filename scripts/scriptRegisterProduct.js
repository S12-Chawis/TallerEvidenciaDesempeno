document.addEventListener("DOMContentLoaded", (event) => {
    let btnRegisterProduct = document.getElementById("btnRegisterProduct");
    var saveProducts = []
    btnRegisterProduct.addEventListener("click", (e) => {
        e.preventDefault();
        let productName = document.getElementById("productName");
        let productDescription = document.getElementById("productDescription");
        let productQuantity = document.getElementById("productQuantity");
        let productValuee = document.getElementById("productValuee");
        const Product = {
            name: productName.value,
            description: productDescription.value,
            quantity: productQuantity.value,
            valuee: productValuee.value
        }

        if (productName.value === "" || productDescription.value == "" || productQuantity.value == "" || productValuee.value == "") {
            alert("Please fill out all the required fields")
        } else {
            saveProducts.push(Product);
            localStorage.setItem('productList', JSON.stringify(saveProducts));
            alert('You successfully added a new product');
            productName = document.getElementById('productName').value = "";
            productDescription = document.getElementById('productDescription').value = "";
            productQuantity = document.getElementById('productQuantity').value = "";
            productValuee = document.getElementById('productValuee').value = "";

        }

    })
});