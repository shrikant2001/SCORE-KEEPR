function save() {
    window.localStorage.setItem("team1", document.getElementById("team1").value);
    window.localStorage.setItem("team2", document.getElementById("team2").value);
    window.localStorage.setItem("nscore", document.getElementById("nscore").value);
    window.location.href = "main.html";
}