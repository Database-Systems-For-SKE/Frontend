/**
 * Created by methawee on 5/21/2017 AD.
 */

function check_days() {
    console.log("check date :-)");
    if (days_between($("#checkin").datepicker("getDate"), $("#checkout").datepicker("getDate")) <= 0) {
        alert("your date is error! please make sure you checkin & checkout date ♡")
    }
}

function check_pass() {
    console.log("hi i'm password checker ♡");
    var password = document.getElementById('password').value;
    var confirm_pass = document.getElementById('field_pwd2').value;
    if (password != confirm_pass) {
        alert("please make sure your passwords match ♡");
        document.getElementById('field_pwd2').focus();
    } else {
        document.getElementById("regForm").submit();
    }
}
