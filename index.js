

let addbtn = document.getElementById("addbtn");

let list = document.getElementById("list-here");
console.log(list);
let conter = 2;
addbtn.addEventListener("click", () => {
    let div = document.createElement("div");
    div.classList.add("items");
    
    div.innerHTML =
        `              <div class="form-group col-11 ms-3 d-flex gap-2" id="list-group-${conter}">
                    <input type="text" class="form-control  p-2 shadow  " id="item-${conter}"
                        placeholder="Create your First To-Do-List..">

                    <i  id="saveBtn${conter}"
                        class="icons p-3 ps-4 pe-4 shadow border-dark  rounded text-light fa-solid fa-floppy-disk ms-3 w-2 d-flex align-items-center btn-success"></i>
                    <i id="updateBtn${conter}"
                        class="icons p-3  ps-4 pe-4 shadow border-dark rounded fa-solid fa-pen-to-square  ms-3 w-2 d-flex align-items-center btn-primary"></i>
                    <i id="deleteBtn${conter}"
                        class="icons p-3  ps-4 pe-4 shadow border-dark rounded fa-solid fa-trash  ms-3 w-2 d-flex align-items-center btn-danger letter-spaccing"></i>
                </div> `;
    list.appendChild(div);
    conter++;
});

