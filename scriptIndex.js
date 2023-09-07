document.addEventListener('DOMContentLoaded', (event) => {
    let login = document.getElementById('login');
    let attempts = 3;
    login.addEventListener('click', (e) => {
        e.preventDefault();
        let userLogin = document.getElementById('userLogin');
        let passwordLogin = document.getElementById('passwordLogin');
        let user = userLogin.value
        let password = passwordLogin.value
        let getUsers = localStorage.getItem('users');
        let data = JSON.parse(getUsers);
        

        if (data === null || data.length === 0) {
            alert('No users registered');
        } else if (user.trim() === "" || password.trim() === "") {
            alert('Both user and password are required');
        } else {
            let userFound = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].user === user && data[i].password === password) {
                    userFound = true;
                    window.location.href = "html/home.html";
                    break;
                }
            }
            if (userFound) {
                attempts = 3;
            } else {
                attempts--
                if (attempts === 0) {
                    alert("Too many attempts, your user is blocked")
                    login.Disabled = true;
                } else {
                    alert(`User or password incorrect, there are ${attempts} attempts left`)
                }
            }
        }

        document.getElementById('userLogin').value = "";
        document.getElementById('passwordLogin').value = "";

    });
});
