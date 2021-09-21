function changeBackgorund() {
	document.body.classList.toggle("dark");
}

document.getElementById("dark-mode").onclick = function() {
    changeBackgorund()
};
