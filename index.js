

let addbtn = document.getElementById("addbtn");
let list = document.getElementById("list-here");
console.log(list);

addbtn.addEventListener("click", () => {
    let div = document.createElement("div");
    div.classList.add("items");
    div.innerHTML =
        `<input type="text" name="text" id="item1">
                    <i class="fa-solid fa-pen-to-square updatebtn"
                        id="update1"></i><i
                        class="fa-solid fa-trash removebtn"
                        id="remove1"></i>`;
    list.appendChild(div);
    console.log(div);
});