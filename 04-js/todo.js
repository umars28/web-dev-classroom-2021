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
                <button class="delete btn btn-outline-danger" onclick="deleteElement()">Delete</button>
              </div>
            </div>`;
}

function deleteElement() {
  const deleteElementByClass = document.getElementsByClassName("delete");
    for (var i = 0; i < deleteElementByClass.length; i++) {
      deleteElementByClass[i].onclick = function() {
        var isConfirmDelete = confirm("Konfirmasi Penghapusan!");
        if (isConfirmDelete == true) {
          this.parentElement.style.display = "none";
        }  
      }
    }
}
