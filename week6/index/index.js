$(document).ready(function() {

    $(":text").after("<span>*</span>");


    $("#contact").submit(
        function(event) {
            var isValid = true;


            // name
            var name = $("#name").val().trim();
            if (name == "") {
                $("#name").next().text("This field is required.");
                isValid = false;
            } else {
                $("#name").next().text("");
            }
            $("#name").val(name);

            // email
            var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
            var email = $("#email").val().trim();
            if (email == "") {
                $("#email").next().text("This field is required.");
                isValid = false;
            } else if ( !emailPattern.test(email) ) {
                $("#email").next().text("Must be a valid email address.");
                isValid = false;
            } else {
                $("#email").next().text("");
            }
            $("#email").val(email);

            // phone - pattern taken from stack overflow, handles several formats
            var phonePattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
            var phone = $("#phone").val().trim();
            if (phone == "") {
                $("#phone").next().text("This field is required.");
                isValid = false;
            } else if(!phonePattern.test(phone)) {
                $("#phone").next().text("Must be a valid phone number.");
                isValid = false;
            } else {
                $("#phone").next().text("");
            }
            $("#phone").val(phone);

            // country
            var country = $("#country").val().trim();
            if (country == "") {
                $("#country").next().text("This field is required.");
                isValid = false;
            } else {
                $("#country").next().text("");
            }
            $("#country").val(country);

            //trigger valid/invalid
            if (isValid == false) {
                event.preventDefault();
            }
        }
    );
});