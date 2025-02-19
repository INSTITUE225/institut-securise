function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "institueV22" && password === "225522!") {
        window.location.href = "dashboard.html"; // Redirige vers la page sécurisée
    } else {
        document.getElementById("error-message").textContent = "❌ Identifiants incorrects";
    }
}
