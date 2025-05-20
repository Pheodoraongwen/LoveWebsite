function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    const users = { "Pheodora": "dopheo", "Tito": "dopheo" };
    if (users[username] && users[username] === password) {
        window.location.href = "our-story.html";
    } else {
        error.textContent = "Wrong username or password! Try again. Pswd hint(Where did we first meet?)";
    }
}