// getting value of given field
function getInputValue(fieldId) {
    const inputValue = document.getElementById(fieldId).value;
    return inputValue;
}

// show amount in appropiate position
function showAmount(fieldId, amount) {
    document.getElementById(fieldId).innerText = amount;
}

// show error
function showError(errorMessage) {
    document.getElementById('error-area').style.display = "block";
    document.getElementById('error-area').innerText = errorMessage;
}
// hide error
function hideError() {
    document.getElementById('error-area').style.display = 'none';
}

// calculate button click handler
document.getElementById('calculate-btn').addEventListener('click', function() {
    const totalIncome = getInputValue('income-total');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothesCost = getInputValue('clothes-cost');

    // total income error check
    if (isNaN(totalIncome)) {
        showError("Income Must Be A Number");
    } else if (parseFloat(totalIncome) < 0) {
        showError("Income Must Be Positive");
    } else if (totalIncome == "") {
        showError("Income Can Not Be Empty");
    } else {
        // food cost error check
        if (isNaN(foodCost)) {
            showError("Food cost Must Be A Number");
        } else if (parseFloat(foodCost) < 0) {
            showError("Food cost Must Be Positive");
        } else if (foodCost == "") {
            showError("Food cost can not be empty");
        } else {
            // rent cost error check
            if (isNaN(rentCost)) {
                showError("Rent cost Must Be A Number");
            } else if (parseFloat(rentCost) < 0) {
                showError("Rent cost Must Be Positive");
            } else if (rentCost == "") {
                showError("Rent cost Cant not be empty");
            } else {
                // clothes cost error check
                if (isNaN(clothesCost)) {
                    showError("Clothes cost Must Be A Number");
                } else if (parseFloat(clothesCost) < 0) {
                    showError("Clothes cost Must Be Positive");
                } else if (clothesCost == "") {
                    showError("Clothes cost can not be empty");
                } else {
                    // total expenses
                    const totalExpenses = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
                    if (totalExpenses > totalIncome) {
                        showError("Expenses is more than Income !");
                    } else {
                        hideError();
                        showAmount('total-expenses', totalExpenses);
                        showAmount('balance', totalIncome - totalExpenses);
                    }
                }
            }
        }
    }
});


// save button click handler
document.getElementById('saving-btn').addEventListener('click', function() {
    const incomeTotal = getInputValue('income-total');
    const savingParcent = getInputValue('saving-parcent');
    if (incomeTotal == '') {
        showError('Income Field Is empty');
    } else if (isNaN(incomeTotal)) {
        showError('Income must be a number');
    } else if (parseFloat(incomeTotal) < 0) {
        showError('Income Must be positive');
    } else if (savingParcent == '') {
        showError('saving parcent can not be empty');
    } else if (isNaN(savingParcent)) {
        showError("Saving Parcentange Must Be A Number");
    } else if (parseFloat(savingParcent) < 0) {
        showError("Saving Parcentage Must Be Positive ");
    } else {
        const saving = ((parseFloat(savingParcent) * parseFloat(incomeTotal)) / 100);
        const balance = document.getElementById('balance').innerText;
        if (balance == '') {
            showError('Balance Is empty');
        } else if (saving > balance) {
            showError("Saving Amount is More Than Balance ");
        } else {
            hideError();
            showAmount('saving-amount', saving);
            showAmount('remaining-balance', balance - saving);
        }

    }



})