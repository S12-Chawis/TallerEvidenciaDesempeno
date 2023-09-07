document.addEventListener("DOMContentLoaded", (event) => {
    let btnShowRegisters = document.getElementById("btnShowRegisters");
    btnShowRegisters.addEventListener("click", (e) => {
        e.preventDefault();
        let getCustomers = localStorage.getItem("customerList");
        let customers = JSON.parse(getCustomers);
        let getProducts = localStorage.getItem('productList');
        let products = JSON.parse(getProducts);
        let getSuppliers = localStorage.getItem('supplierList');
        let suppliers = JSON.parse(getSuppliers);
        let productCount = 0;
        let customerCount = 0;
        let supplierCount = 0;
        if (products !== null && products.length > 0) {
            productCount = products.length;
        }
        if (customers !== null && customers.length > 0) {
            customerCount = customers.length;
        }
        if (suppliers !== null && suppliers.length > 0) {
            supplierCount = suppliers.length;
        }

        let tbodyAll = document.getElementById('tbodyAll');
        let row = tbodyAll.insertRow();
        let productCell = row.insertCell(0);
        let customerCell = row.insertCell(1);
        let supplierCell = row.insertCell(2);

        productCell.innerHTML = productCount;
        customerCell.innerHTML = customerCount;
        supplierCell.innerHTML = supplierCount;

        let totalRegister = productCount + customerCount + supplierCount;
        let totalAverage = totalRegister / 3
        if (totalAverage < 1) {
            totalAverage = 0;
        }
        let tbodyAverage = document.getElementById('tbodyAverage');
        let rowAverage = tbodyAverage.insertRow();
        let totalAverageCell = rowAverage.insertCell(0);

        totalAverageCell.innerHTML = totalAverage;

        if (products === null || products.length === 0) {
            let tableMaxIncomes = document.getElementById('tableMaxIncomes');
            let tableMinIncomes = document.getElementById('tableMinIncomes');
            tableMaxIncomes.style.display = 'none';
            tableMinIncomes.style.display = 'none';
            let tbodyMinIncomes = document.getElementById('tbodyMinIncomes');
            let rowMinIncomes = tbodyMinIncomes.insertRow();
            let alertMessageMinCell = rowMinIncomes.insertCell();
            alertMessageMinCell.innerHTML = "No products registered"

            let tbodyMaxIncomes = document.getElementById('tbodyMaxIncomes');
            let rowMaxIncomes = tbodyMaxIncomes.insertRow();
            let alertMessageMaxCell = rowMaxIncomes.insertCell();
            alertMessageMaxCell.innerHTML = "No products registered"
        } else {

            products.forEach((product) => {
                product.totalAmount = product.valuee * product.quantity;
            });
            products.sort((a, b) => a.totalAmount - b.totalAmount);
            const productWithMinIncome = products[0];
            const productWithMaxIncome = products[products.length - 1];

            if (productWithMinIncome.totalAmount > 0 || productWithMaxIncome.totalAmount > 0) {
                let tbodyMaxIncomes = document.getElementById('tbodyMaxIncomes');
                let rowMaxIncomes = tbodyMaxIncomes.insertRow();
                let productNameMaxCell = rowMaxIncomes.insertCell(0);
                let productDescriptionMaxCell = rowMaxIncomes.insertCell(1);
                let productQuantityMaxCell = rowMaxIncomes.insertCell(2);
                let productValueMaxCell = rowMaxIncomes.insertCell(3);
                let productTotalAmountMaxCell = rowMaxIncomes.insertCell(4);

                let tbodyMinIncomes = document.getElementById('tbodyMinIncomes');
                let rowMinIncomes = tbodyMinIncomes.insertRow();
                let productNameMinCell = rowMinIncomes.insertCell(0);
                let productDescriptionMinCell = rowMinIncomes.insertCell(1);
                let productQuantityMinCell = rowMinIncomes.insertCell(2);
                let productValueMinCell = rowMinIncomes.insertCell(3);
                let productTotalAmountMinCell = rowMinIncomes.insertCell(4);

                productNameMaxCell.innerHTML = productWithMaxIncome.name
                productDescriptionMaxCell.innerHTML = productWithMaxIncome.description
                productQuantityMaxCell.innerHTML = productWithMaxIncome.quantity
                productValueMaxCell.innerHTML = productWithMaxIncome.valuee
                productTotalAmountMaxCell.innerHTML = productWithMaxIncome.totalAmount


                productNameMinCell.innerHTML = productWithMinIncome.name
                productDescriptionMinCell.innerHTML = productWithMinIncome.description
                productQuantityMinCell.innerHTML = productWithMinIncome.quantity
                productValueMinCell.innerHTML = productWithMinIncome.valuee
                productTotalAmountMinCell.innerHTML = productWithMinIncome.totalAmount
            } else {
                let tbodyMinIncomes = document.getElementById('tbodyMinIncomes');
                let rowMinIncomes = tbodyMinIncomes.insertRow();
                let alertMessageMinCell = rowMinIncomes.insertCell(3);
                alertMessageMinCell.innerHTML = "No Amount Registered"

                let tbodyMaxIncomes = document.getElementById('tbodyMaxIncomes');
                let rowMaxIncomes = tbodyMaxIncomes.insertRow();
                let alertMessageMaxCell = rowMaxIncomes.insertCell(3);
                alertMessageMaxCell.innerHTML = "No Amount registered"
            }
        }

    });
});