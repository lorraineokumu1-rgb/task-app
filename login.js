function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "lonne" && pass === "1234") {
        alert("Login successful!");
       window.location.href = "scholarship.html";
    } else {
        document.getElementById("msg").textContent = "Invalid username or password.";
    }
}
