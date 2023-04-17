var name, number;
var grandTotal = 0;
document.getElementById('name').addEventListener('input', function () {
    document.getElementById('name2').textContent = this.value;
});
document.getElementById('number').addEventListener('input', function () {
    document.getElementById('number2').textContent = this.value;
});
document.getElementById('add-button').addEventListener('click', function () {
    var searchId = document.getElementById('Search-id').value;
    var price;
    var quantity = document.getElementById('quantity').value;
    // get quantity value
    if (searchId == 'fruit') {
        price = 100;
    } else if (searchId == 'nuts') {
        price = 105;
    } else if (searchId === 'rice') {
        price = 110;
    } else if (searchId === 'dall') {
        price = 115;
    } else if (searchId === 'toothpast') {
        price = 120;
    } else if (searchId === 'mm') {
        price = 125;
    }
    var totalAmount = price * quantity;
    grandTotal += totalAmount;
    var grandTotaltag = document.getElementById("grandTotal");
    if (grandTotaltag) {
        grandTotaltag.remove();
    }
    var billstatement = document.getElementById('billstatement');
    var newRow = billstatement.insertRow();
    createTableCell(newRow, searchId);
    createTableCell(newRow, price);
    createTableCell(newRow, quantity);
    createTableCell(newRow, totalAmount);
    var newRow1 = billstatement.insertRow();
    newRow1.id = "grandTotal";
    createTableCell(newRow1, "Grand Total", 3);
    createTableCell(newRow1, grandTotal);
    // bllstatement.innerHTML += '<tr><td>' +  + '</td><td>' + price + '</td><td>' + quantity + '</td><td>' + totalAmount + '</td></tr>';
    //billstatement.innerHTML += '<tr><td colspan="3">Grand Total</td><td>' + grandTotal + '</td></tr>';
});

function createTableCell(newRow, textValue, colspan = 0) {
    var newCell = newRow.insertCell();
    newCell.colSpan = colspan;
    var newText = document.createTextNode(textValue);
    newCell.appendChild(newText);
}
document.getElementById('print-button').addEventListener('click', function () {
    var printWindow = window.open('', '', 'height=400,width=600');
    var a = document.getElementsByClassName('myBill')[0].innerHTML;
    printWindow.document.write(a);
    printWindow.document.write('<body>');
    printWindow.document.write('<h1>jh </h1>');
    printWindow.document.write('</body></html>');
    printWindow.document.close(); // necessary for IE >= 10
    printWindow.focus(); // necessary for IE >= 10
    printWindow.print();
    printWindow.close();
});
