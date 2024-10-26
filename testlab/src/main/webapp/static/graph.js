const cv = document.querySelector('canvas');
const width = cv.width
const height = cv.height
const radius = width * 0.42
const fontSize = 12
const ctx = cv.getContext("2d");

window.onload = loadGraph
function loadGraph() {
    let rVal = getRValue()
    ctx.strokeStyle = "#D0D0D0"
    ctx.fillStyle = "rgba(246,212,0,0.51)"
    ctx.clearRect(0, 0, width, height)

    //-r <= x <= 0 & -r/2 <= y <= 0
    ctx.fillRect(width / 2 - radius, height / 2, radius, radius / 2)

    //y >= -x + r, {x >= 0}, {y >= 0}
    ctx.beginPath()
    ctx.moveTo(width / 2, height / 2); // точка (0,0)
    ctx.lineTo(width / 2 + radius, height / 2); // точка (r, 0)
    ctx.lineTo(width / 2, height / 2 - radius); // точка (0, -r)
    ctx.closePath();
    ctx.fill();

    //x^2 + y^2 <= (r/2)^2, {x >= 0}, {y <= 0}
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius/2, Math.PI/2, 0, true);
    ctx.lineTo(width / 2, height / 2);
    ctx.fill()

    // оси
    ctx.beginPath()
    ctx.moveTo(width / 2, height)
    ctx.lineTo(width / 2, 0)
    ctx.lineTo(width / 2 + 5, 10)
    ctx.moveTo(width / 2, 0)
    ctx.lineTo(width / 2 - 5, 10)

    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.lineTo(width - 10, height / 2 + 5)
    ctx.moveTo(width, height / 2)
    ctx.lineTo(width - 10, height / 2 - 5)

    ctx.moveTo(width / 2 + radius / 2, height / 2 + 5)
    ctx.lineTo(width / 2 + radius / 2, height / 2 - 5)

    ctx.moveTo(width / 2 + radius, height / 2 + 5)
    ctx.lineTo(width / 2 + radius, height / 2 - 5)

    ctx.moveTo(width / 2 - radius / 2, height / 2 + 5)
    ctx.lineTo(width / 2 - radius / 2, height / 2 - 5)

    ctx.moveTo(width / 2 - radius, height / 2 + 5)
    ctx.lineTo(width / 2 - radius, height / 2 - 5)

    ctx.moveTo(width / 2 + 5, height / 2  + radius / 2)
    ctx.lineTo(width / 2 - 5, height / 2  + radius / 2)

    ctx.moveTo(width / 2 + 5, height / 2 + radius)
    ctx.lineTo(width / 2 - 5, height / 2 + radius)

    ctx.moveTo(width / 2 + 5, height / 2  - radius / 2)
    ctx.lineTo(width / 2 - 5, height / 2  - radius / 2)

    ctx.moveTo(width / 2 + 5, height / 2 - radius)
    ctx.lineTo(width / 2 - 5, height / 2 - radius)

    ctx.font = `bold ${fontSize} px serif`
    ctx.fillStyle = "#D0D0D0"

    ctx.fillText("x", width - fontSize / 2, height / 2 + 15)

    ctx.fillText("y", width / 2 + 10, fontSize / 2)

    ctx.fillText(rVal, width / 2 + 10, height / 2 - radius + fontSize / 2)
    ctx.fillText(rVal / 2, width / 2 + 10, height / 2 - radius / 2 + fontSize / 2)
    ctx.fillText(-rVal, width / 2 + 10, height / 2 + radius + fontSize / 2)
    ctx.fillText(-rVal / 2, width / 2 + 10, height / 2 + radius / 2 + fontSize / 2)

    ctx.fillText(-rVal, width / 2 - radius - fontSize / 2, height / 2 - 10)
    ctx.fillText(-rVal / 2, width / 2 - radius / 2 - fontSize / 2, height / 2 - 10)
    ctx.fillText(rVal, width / 2 + radius - fontSize / 2, height / 2 - 10)
    ctx.fillText(rVal / 2, width / 2 + radius / 2 - fontSize / 2, height / 2 - 10)

    ctx.stroke()
    drawAllCircles()


}
function drawCircle(x, y, isHit) {
    let rVal = getRValue()
    ctx.fillStyle = "rgba(255,21,21,0.76)"
    if (isHit) {
        ctx.fillStyle = "rgba(29,255,29,0.76)"
    }
    let xCoord = width / 2 + (x * radius / rVal)
    let yCoord = height / 2 - (y * radius / rVal)

    ctx.beginPath()
    ctx.arc(xCoord, yCoord, 3, 0, 2 * Math.PI)
    ctx.fill()
}

function drawAllCircles() {
    let table = document.getElementById("data-table")
    let tRows  = table.rows
    let tLen = tRows.length
    for (let i = 1; i < tLen; i++) {
        let tCells = table.rows.item(i).cells
        let x = parseFloat(tCells[0].innerHTML)
        let y = parseFloat(tCells[1].innerHTML)
        let inArea = tCells[5].innerHTML === "Попадание"
        drawCircle(x, y, inArea)
    }
}
cv.onclick = sendPressedPoint

function sendPressedPoint(ev) {
    let rVal = getRValue()
    let rect = cv.getBoundingClientRect();
    let x = ev.clientX - rect.left;
    let y = ev.clientY - rect.top;
    let xCoord = Number((x - width / 2) * rVal / radius).toFixed(3)
    let yCoord = Number((height / 2 - y) * rVal / radius).toFixed(3)
    if (isValidY(yCoord) && isValidX(xCoord)) {
        sendRequest(xCoord, yCoord, rVal);
    } else {
        drawCircle(xCoord, yCoord, false)
    }
}