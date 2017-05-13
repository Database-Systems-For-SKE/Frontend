/**
 * Created by methawee on 5/4/2017 AD.
 */

/* ✓ insert_customer() , ✓ login(), booking(), insert_payment() */

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
        console.log("insert customer is success: " + JSON.stringify(data));
    });

    request.fail(function (xhr, status, error) {
        console.log(xhr);

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
                console.log(data.customerID);
                Cookies.set("customerID", data.customerID);
            } else {
                alert("the email address or password you entered is not valid ♡\n" +
                    "you can sign up your new account by clicking a link below.");
            }
        }
    });

    request.fail(function (xhr) {
        console.log("fail: " + xhr);
        alert("please type your email address and password ♡");
    });
}

function insert_payment() {
    console.log("payment method ♡");
    var request = $.ajax({
        type: 'post',
        url: 'https://api.kamontat.me',
        data: {
     		"action":"insert_payment",
     		"card_name_s": document.getElementById('nameOnCard').value,
     		"card_number_s": document.getElementById('creditCardNo').value,
     		"expire_data_s": document.getElementById('expireDate').value,
            "book_id_i": Cookies.get("bookID")
  	    },
        success: function (data, status, xhr) {
            console.log(data.message);
            console.log("payment is success: " + status);
            console.log(xhr);
        }
    });

    request.fail(function(xhr) {
	    console.log(xhr);
    });
}

function load_booking() {
    window.location.href = 'booking.html';
}

function booking() {
    console.log("booking ♡");
    console.log(Cookies.get('customerID'));
    $.ajax({
        type: 'post',
        url: 'https://api.kamontat.me',
        data: {
            "action": "booking",
            "customer_id_i": Cookies.get('customerID') /* not finish yet */,
            "room_type_id_i": Cookies.get('RoomTypeID') /* not finish yet */,
            "night_i": days_between($("#checkin").datepicker("getDate"), $("#checkout").datepicker("getDate")),
            "check_in_s": $("#checkin").datepicker("getDate"),
            "check_out_s": $("#checkout").datepicker("getDate")
        },
        success: function (data) {
            console.log("booking is success: " + data);
            window.location.href = 'payment.html';
        }
    });
}

function days_between(date1, date2) {
    var ONE_DAY = 1000 * 60 * 60 * 24;
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = Math.abs(date1_ms - date2_ms);
    return Math.round(difference_ms / ONE_DAY);
}


