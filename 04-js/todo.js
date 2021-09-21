function addElement() {
    const inputValue = document.getElementById("input").value;
    if (inputValue === '') {
        alert("Whooops, inputan kosong bro");
        return
    }
    document.getElementById("js-to-do").innerHTML += 
              `<div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${inputValue}</h5>
                </div>
                <button class="delete btn btn-outline-danger">Close</button>
              </div>
            </div>`;

    deleteElement();
}

function deleteElement() {
    const deleteElementByClass = document.getElementsByClassName("delete");
    for (var i = 0; i < deleteElementByClass.length; i++) {
        deleteElementByClass[i].onclick = function() {
            this.parentElement.style.display = "none";
        }
    }
}
