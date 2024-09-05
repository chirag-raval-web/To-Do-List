

let addbtn = document.getElementById("addbtn");
let list = document.getElementById("list-here");
console.log(list);

addbtn.addEventListener("click", () => {
    let div = document.createElement("div");
    div.classList.add("items");
    div.innerHTML =
        `                <div class="form-group col-11 ms-3 d-flex gap-2">
                    <input type="text" class="form-control  p-2 shadow  "
                        placeholder="Create more ! we have no limits">
                    
                    <i
                        class="icons p-3 ps-4 pe-4 shadow border-dark  rounded text-light fa-solid fa-floppy-disk ms-3 w-2 d-flex align-items-center btn-success"></i>
                    <i
                        class="icons p-3  ps-4 pe-4 shadow border-dark rounded fa-solid fa-pen-to-square updatebtn ms-3 w-2 d-flex align-items-center btn-primary"></i>
                    <i
                        class="icons p-3  ps-4 pe-4 shadow border-dark rounded fa-solid fa-trash removebtn ms-3 w-2 d-flex align-items-center btn-danger letter-spaccing"></i>
                </div>`;
    list.appendChild(div);
    console.log(div);
});