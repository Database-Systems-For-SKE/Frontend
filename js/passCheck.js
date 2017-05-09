document.addEventListener("DOMContentLoaded", function () {


    var checkPassword = function (str) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return re.test(str);
    };

    var checkForm = function (e) {
        if (this.username.value == "") {
            alert("Error: Username cannot be blank!");
            this.username.focus();
            e.preventDefault(); // equivalent to return false
            return;
        }
        re = /^\w+$/;
        if (!re.test(this.username.value)) {
            alert("Error: name must contain only letters!");
            this.username.focus();
            e.preventDefault();
            return;
        }
        if (this.pwd1.value != "" && this.pwd1.value == this.pwd2.value) {
            if (!checkPassword(this.pwd1.value)) {
                alert("The password you have entered is not valid!");
                this.pwd1.focus();
                e.preventDefault();
                return;
            }
        } else {
            alert("Error: Please check that you've entered and confirmed your password!");
            this.pwd1.focus();
            e.preventDefault();
            return;
        }
        alert("Both username and password are VALID!");
    };

    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", checkForm, true);

    var supports_input_validity = function () {
        var i = document.createElement("input");
        return "setCustomValidity" in i;
    }

    if (supports_input_validity()) {
        var fnInput = document.getElementById("field_fn");
        fnInput.setCustomValidity(fnInput.title);

        var lnInput = document.getElementById("field_ln");
        lnInput.setCustomValidity(lnInput.title);

        var pwd1Input = document.getElementById("field_pwd1");
        pwd1Input.setCustomValidity(pwd1Input.title);

        var pwd2Input = document.getElementById("field_pwd2");

        fnInput.addEventListener("keyup", function () {
            fnInput.setCustomValidity(this.validity.patternMismatch ? fnInput.title : "");
        }, false);

        lnInput.addEventListener("keyup", function () {
            lnInput.setCustomValidity(this.validity.patternMismatch ? lnInput.title : "");
        }, false);

        pwd1Input.addEventListener("keyup", function () {
            this.setCustomValidity(this.validity.patternMismatch ? pwd1Input.title : "");
            if (this.checkValidity()) {
                pwd2Input.pattern = this.value;
                pwd2Input.setCustomValidity(pwd2Input.title);
            } else {
                pwd2Input.pattern = this.pattern;
                pwd2Input.setCustomValidity("");
            }
        }, false);

        pwd2Input.addEventListener("keyup", function () {
            this.setCustomValidity(this.validity.patternMismatch ? pwd2Input.title : "");
        }, false);

    }

}, false);
