let items = [];

function addItem() {
    let item = {field1: document.getElementById("field1").value, field2: document.getElementById("field2").value};
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

function generateTable() {
    let div = document.getElementById("table-area");
    while (div.firstChild) div.removeChild(div.firstChild); // removes all children

    let table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-striped");
    table.classList.add("table-bordered");
    table.classList.add("table-hover");
    // table.classList.add("table-sm");
    div.appendChild(table);
    let tBody = table.appendChild(document.createElement("tbody"));
    for (let i = 0; i < items.length; i++) {
        let row = tBody.insertRow(-1);


        let removeButton = document.createElement("button");
        removeButton.setAttribute("type", "button");
        removeButton.addEventListener("click", () => removeItem(i));
        removeButton.classList.add("btn");
        removeButton.classList.add("btn-danger");
        removeButton.innerText = "Remove";

        let upButton = document.createElement("button");
        upButton.setAttribute("type", "button");
        upButton.addEventListener("click", () => moveUp(i));
        upButton.classList.add("btn");
        upButton.classList.add("btn-info");
        upButton.innerText = "Up";

        let downButton = document.createElement("button");
        downButton.setAttribute("type", "button");
        downButton.addEventListener("click", () => moveDown(i));
        downButton.classList.add("btn");
        downButton.classList.add("btn-info");
        downButton.innerText = "Down";

        row.insertCell(-1).innerText = items[i].field1;
        row.insertCell(-1).innerText = items[i].field2;
        row.insertCell(-1).appendChild(removeButton);
        row.insertCell(-1).appendChild(upButton);
        row.insertCell(-1).appendChild(downButton);
    }
}


