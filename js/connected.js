/**
 * Created by methawee on 5/4/2017 AD.
 */

function insert_customer() {
    console.log("hi! i'm ur new customer ♡");
    var request = $.ajax({
        type: 'post',
        url: 'https://api.kamontat.me',
        data: {
            'action': 'insert_customer',
            'first_s': document.getElementById('first_name').value,
            'last_s': document.getElementById('last_name').value,
            'address_s': document.getElementById('address').value,
            'email_s': document.getElementById('email').value,
            'password': document.getElementById('password').value
        }
    });

    request.done(function (data, status, xhr) {
        if (data.success === "true") {
            load_booking();
        }
        console.log("Insert customer is success: " + JSON.stringify(data));
        // complete do something
    });

    request.fail(function (xhr, status, error) {
        console.log(xhr);
        // error do something
    });
}

function login() {
    console.log("i'm your old customer! ♡");
    var request = $.ajax({
        type: 'post',
        url: 'https://api.kamontat.me',
        data: {
            "action": "login",
            "email_s": document.getElementById('InputEmail').value,
            "password": document.getElementById('InputPassword').value
        },
        success: function (data) {
            console.log(data);
            if (data.success === "true") {
                console.log(data.CustomerID);
                Cookies.set("CustomerID", data.CustomerID);
            }
        }
    });

    request.fail(function (xhr) {
        console.log(xhr);
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
