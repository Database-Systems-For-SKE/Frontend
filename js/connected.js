/**
 * Created by methawee on 5/4/2017 AD.
 */


function getData() {
    $(document).ready(function () {
        $("#submit").click(function () {
            var first_name = document.getElementById("first_name").value;
            console.log(first_name);
            var last_name = document.getElementById("last_name").value;
            var address = document.getElementById("address").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("field_pwd1").value;
            sendRequest();
            window.parent.location = "booking.html";
        });
    });
}

function sendRequest() {
    var request = $.ajax({
        method: "POST",
        url: "api.kamontat.me",
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
    
    request.done(function (response, status, xhr) {
        alert("Is success: " + response.success + "\n response: " + JSON.stringify(response));
    });
    
    request.fail(function (xhr, status, error) {
        alert(error);
        console.log(xhr);
    });
}
