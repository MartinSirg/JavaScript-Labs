let items = [];

function generateTable() {
    let div = $("#table-area");
    div.children().remove(); // removes all children

    let table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-striped");
    table.classList.add("table-bordered");
    table.classList.add("table-hover");
    div.append(table);

    let tBody = table.appendChild(document.createElement("tbody"));
    for (let i = 0; i < items.length; i++) {
        let row = tBody.insertRow(-1);

        row.insertCell(-1).innerText = items[i].field1;
        row.insertCell(-1).innerText = items[i].field2;
        row.insertCell(-1).appendChild(getButton("remove", i));
        row.insertCell(-1).appendChild(getButton("up", i));
        row.insertCell(-1).appendChild(getButton("down", i));
    }
}

function addItem() {
    let item = {field1: $("#field1").val(), field2: $("#field2").val()};
    items.push(item);
    console.log(items);
    generateTable();
}

function removeItem(index) {
    items.splice(index, 1);
    generateTable();
}

function moveUp(index) {
    if(index === 0) {
        console.log("First Element");
        return;
    }
    let item = items.splice(index, 1)[0];
    items.splice(index - 1, 0, item);
    generateTable();
}

function moveDown(index) {
    if(index === items.length - 1) {
        console.log("Last element");
        return;
    }
    let item = items.splice(index, 1)[0];
    items.splice(index + 1, 0, item);
    generateTable();
}

function getButton(type, index) {
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("btn");

    switch (type) {
        case "remove":
            button.addEventListener("click", () => removeItem(index));
            button.classList.add("btn-danger");
            button.innerText = "Remove";
            break;
        case "up":
            button.addEventListener("click", () => moveUp(index));
            button.classList.add("btn-info");
            button.innerText = "Move up";
            break;
        case "down":
            button.addEventListener("click", () => moveDown(index));
            button.classList.add("btn-info");
            button.innerText = "Move down";
            break;
        default:
            throw "Wrong type";
    }
    return button;
}


