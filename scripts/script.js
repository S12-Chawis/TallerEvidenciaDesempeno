document.addEventListener('DOMContentLoaded', (event) => {
    let registerButton = document.getElementById('registerButton');
    var saveUsers = []
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        let userRegister = document.getElementById('userRegister');
        let userPassword = document.getElementById('userPassword');
        const User = {
            user: userRegister.value,
            password: userPassword.value
        }
        
        if (userRegister.value === "") {
            if (userPassword.value === "") {
                alert('Please enter an user and a password');
            } else {
                alert('Please enter an user');
            }
        } else if (userPassword.value === "") {
            alert('Please enter a password');
        } else {
            saveUsers.push(User)
            localStorage.setItem('users', JSON.stringify(saveUsers));
            alert("You successfully registered")
            document.getElementById("userRegister").value = "";
            document.getElementById("userPassword").value = "";
        }

    });
    
});
