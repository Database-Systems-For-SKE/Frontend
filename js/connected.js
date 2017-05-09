/**
 * Created by methawee on 5/4/2017 AD.
 */

function insert_customer() {
    console.log("hi! i'm ur new customer ♡");
    $.ajax({
        type: 'post',
        url: 'customer.php',
        data: {
            'key': 'insert_customer',
            'first_name': document.getElementById('first_name').value,
            'last_name': document.getElementById('last_name').value,
            'address': document.getElementById('address').value,
            'email': document.getElementById('email').value,
            'password': document.getElementById('password').value
        },
        success: function (data) {
            console.log("insert customer is success: " + data);
        }
    });
}

function login() {
    console.log("i'm your old customer! ♡");
    $.ajax({
        type: 'post',
        url: 'customer.php',
        data: {
            'key': 'login',
            'input_email': document.getElementById('InputEmail').value,
            'input_password': document.getElementById('InputPassword').value
        },
        success: function (data) {
            console.log("login is success: " + data);
        }
    });
}

function insert_payment() {
    console.log("payment method ♡");
    $.ajax({
        type: 'post',
        url: 'customer.php',
        data: {
            'key': 'payment',
            'nameOnCard': document.getElementById('nameOnCard').value,
            'creditCardNo': document.getElementById('creditCardNo').value,
            'expireDate': document.getElementById('expireDate').value
        },
        success: function (data) {
            console.log("payment is success: " + data);
        }
    });
}

function load_booking() {
    /* this is work, but doesn't call yet */
    window.location.href = 'booking.html';
}
