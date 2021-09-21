function changeBackgorund() {
	document.body.classList.toggle("dark");
}

document.getElementById("dark-mode").onclick = function() {
    changeBackgorund()
};

document.getElementById("add").onclick = function() {
    var text = document.getElementById('input').value
    console.log(text);
};
