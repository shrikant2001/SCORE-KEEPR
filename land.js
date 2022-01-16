console.log("hi");
console.log(window.localStorage.getItem("nteam"));
console.log(window.localStorage.getItem("nscore"));
function save() {
  window.localStorage.setItem("nteam", document.getElementById("nteam").value);
  window.localStorage.setItem(
    "nscore",
    document.getElementById("nscore").value
  );
  window.location.href = "main.html";
}
