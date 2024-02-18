const container = document.getElementById('seatCont');
const buttons = container.getElementsByClassName('btn');
const sup = document.getElementById('sup')
const seatleft = document.getElementById('seat-left')
const table = document.getElementById('table')
const totalPrice = document.getElementById('total')
const couponfield = document.getElementById('coupon')
const couponbtn = document.getElementById('couponbtn')
const grandTotal = document.getElementById('grand')
const discountTotal = document.getElementById('discount')
const discountContainer = document.getElementById('discountCont')
const cpnContainer = document.getElementById('cpnContainer')
const next = document.getElementById('next')
const phone = document.getElementById('phone')
// set
let clicked = 0;
let left = 40;
let total = 0;
let grand = 0;
let discount = 0;
couponfield.disabled = true;
couponbtn.disabled = true;
next.disabled = true;
selected = false;


// Define a named function to create elements and append to the table
function createAndAppendRow(button) {

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td1.innerText = button.innerText;
    td2.innerText = 'Economy';
    td3.innerText = '550';
    td3.classList.add('text-right')

    button.style.color = 'white';
    button.style.backgroundColor = '#1DD100';
    total += 550;
    grand += 550;
    clicked++;
    if (clicked == 4) {
        couponfield.disabled = false;
        couponbtn.disabled = false;
    }
    left--;
    totalPrice.innerText = total.toString();
    sup.innerText = clicked.toString();
    seatleft.innerText = left.toString();
    grandTotal.innerText = grand.toString();

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);


    selected = true;
    // Remove the event listener after clicking once
    button.removeEventListener('click', buttonClickHandler);

}

// Define a named function for the event handler
function buttonClickHandler() {
    if (clicked >= 4) {

        return;
    }
    const button = this; // The clicked button
    createAndAppendRow(button);
}

// Attach event listeners to buttons
for (const button of buttons) {
    button.addEventListener('click', buttonClickHandler);
}

couponbtn.addEventListener('click', function () {

    if (couponfield.value === 'NEW15') {
        discount = (total * 15) / 100
        cpnContainer.classList.add('hidden')
        discountContainer.classList.remove('hidden');
    }
    else if (couponfield.value === 'Couple 20') {
        discount = (total * 20) / 100
        cpnContainer.classList.add('hidden')
        discountContainer.classList.remove('hidden');
    }
    else {
        discount = 0;
        alert('Invalid Coupon')
    }

    couponfield.value = '';
    discountTotal.innerText = discount.toString();
    grand -= discount;
    grandTotal.innerText = grand.toString();



})

phone.addEventListener('input', function () {
    if (!isNaN(phone.value) && selected === true && phone.value !== '') {
        next.disabled = false;
    } else {
        next.disabled = true;
    }

});

function refresh() {
    location.reload();
    phone.value = '';
}




function scrollToMain() {
    var mainSection = document.getElementById('main');
    mainSection.scrollIntoView({ behavior: 'smooth' });
}
