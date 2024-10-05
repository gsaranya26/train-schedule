function addTrain() {
    const trainNumber = document.getElementById("trainNumber").value;
    const arrivalTime = document.getElementById("arrivalTime").value;
    const departureTime = document.getElementById("departureTime").value;

    if (trainNumber !== "") {
        const table = document.getElementById("scheduleTable");
        const row = table.insertRow();

        row.insertCell(0).innerText = trainNumber;
        row.insertCell(1).innerText = arrivalTime;
        row.insertCell(2).innerText = departureTime;
        row.insertCell(3).innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
        row.insertCell(4).innerHTML = '<button onclick="updateRow(this)">Update</button>';
    } else {
        alert("Please enter the details");
    }
}

function deleteRow(button) {
    // Get the row to delete
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function updateRow(button) {
    const row = button.parentNode.parentNode;
    const trainNumber = prompt("Update Train Number:", row.cells[0].innerText);
    const arrivalTime = prompt("Update Arrival Time:", row.cells[1].innerText);
    const departureTime = prompt("Update Departure Time:", row.cells[2].innerText);
    
    if (trainNumber && arrivalTime && departureTime) {
        row.cells[0].innerText = trainNumber;
        row.cells[1].innerText = arrivalTime;
        row.cells[2].innerText = departureTime;
    } else {
        alert("All fields must be filled.");
    }
}
