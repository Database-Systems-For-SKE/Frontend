/**
 * Created by methawee on 5/4/2017 AD.
 */


function getData() {
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("field_pwd1").value;
    sendRequest();
    window.parent.location = "booking.html";
}

function sendRequest() {
    var request = $.ajax({
        method: "POST",
        url: "api.kamontat.me",
        contentType: "application/json",
        dataType: "json",
        data: {
            "action": "insert_customer",
            "first_s": first_name,
            "last_s": last_name,
            "address_s": address,
            "email_s": email,
            "password": password
        }
    });


}


