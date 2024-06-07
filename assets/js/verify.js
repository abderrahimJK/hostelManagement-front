// Check if user is logged in
if (localStorage.user) {
    // User is logged in
    //redirect to home page
    

} else {
    // User is not logged in

    window.location.href = './login.html';
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = './login.html';
}