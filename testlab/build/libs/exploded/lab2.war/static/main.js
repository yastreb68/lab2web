
let form = document.getElementById("data-form");

form.onsubmit = function (event) {
    event.preventDefault();
    let xVal = document.querySelector('input[name="x"]:checked').value;
    let yVal = Number(document.getElementById("y").value.replace(',', '.')).toFixed(3);
    let rVal = document.querySelector('input[name="r"]:checked').value;
    fetch("/lab2/controller", setRequestContent(xVal, yVal, rVal, "fromForm"))
        .then(response => {
            if (!response.ok) {
                throw new Error("Error: " + response.status);
            } else {
                location.href = response.url;
            }})
        .catch(error => console.error("Error:", error));
};

function handleData({x, y, r, curDate, scriptTime, inArea}) {
    drawCircle(x, y, inArea)
    addData(x, y, r + ".0", curDate, scriptTime, inArea)
}

function sendRequest(xVal, yVal, rVal) {
    fetch("/lab2/controller", setRequestContent(xVal, yVal, rVal, "fromGraph"))
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(handleData)
        .catch(error => console.log(error));
}
function addData(x, y, r, curDate, scriptTime, inArea) {
    let stringResult = "Промах";
    if (inArea) {
        stringResult = "Попадание";
    }
    let table = document.getElementById("data-table")
    let newRow = table.insertRow(table.rows.length)
    newRow.insertCell(0).innerHTML = x;
    newRow.insertCell(1).innerHTML = y;
    newRow.insertCell(2).innerHTML = r;
    newRow.insertCell(3).innerHTML = new Date(curDate).toLocaleString();
    newRow.insertCell(4).innerHTML = scriptTime;
    newRow.insertCell(5).innerHTML = stringResult;
}
function setRequestContent(xVal, yVal, rVal, status) {
    return {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            x: xVal,
            y: yVal,
            r: rVal,
            status: status
        })
    }
}


