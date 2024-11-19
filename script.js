// script.js
function addRow(tableId) {
    const table = document.getElementById(tableId);
    const newRow = table.insertRow();
    const columns = table.rows[0].cells.length;

    for (let i = 0; i < columns; i++) {
        const cell = newRow.insertCell(i);
        cell.innerHTML = '<input type="text">';
    }
}

document.getElementById('teachingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formObject = {};

    formData.forEach((value, key) => {
        if (formObject[key]) {
            if (!Array.isArray(formObject[key])) {
                formObject[key] = [formObject[key]];
            }
            formObject[key].push(value);
        } else {
            formObject[key] = value;
        }
    });

    console.log('Form Data:', formObject);
    alert('Form Submitted Successfully!');
});