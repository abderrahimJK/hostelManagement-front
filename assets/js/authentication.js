

async function login() {
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const url = 'http://localhost:8090/web/login';  // Adjust this if the base URL is different
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        }).then(
            data => {return data}
        );

        if (response.status === 200) {
            console.log(response.json());
            // window.location.href = './home_admin.html';
        } else if (response.status === 401) {
            const p = document.querySelector('#error-message')
            p.innerHTML =  'Username or Password incorrect'
            console.log('Username or Password incorrect');
        } else {
            console.log(`Unexpected error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error during login:', error);
    }
}

async function register() {

    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const role = document.querySelector("#role").value
    const fullName = document.querySelector("#fullname").value

    const url = 'http://localhost:8090/web/register'; 
    const body = {
        username: username,
        password: password,
        fullName: fullName,
        Role: 'USER'
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const p = document.querySelector('#register_p')
        if (response.status === 200) {
            
            p.innerHTML = 'Registration Successful!'
        } else if (response.status === 409) {
           
            p.innerHTML ='Username already exists'
            alert('Username already exists. Please choose a different username.');
        } else {
            alert(`Unexpected error: ${response.status}`);
        }
    } catch (error) {
        alert('Error during registration. Please try again later.');
    }
}