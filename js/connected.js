/**
 * Created by methawee on 5/4/2017 AD.
 */
$(document).ready(function () {
        $("#submit").click(function () {
            console.log("check submit");
            var first_name = $("#first_name").val();
            // console.log(first_name);
            var last_name = $("#last_name").val();
            var address = $("#address").val();
            var email = $("#email").val();
            var password = $("#password").val();
            
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
                console.info(xhr);
                // alert("Is success: " + response.success + "\n response: " + JSON.stringify(response));
            });
            request.fail(function (xhr, status, error) {
                // alert(error);
                console.error(xhr);
            });
            window.parent.location = "booking.html";
        });
});
