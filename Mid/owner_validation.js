document.getElementById("ownerForm").addEventListener("submit", function(event) {

    let message = document.getElementById("ownerMessage");

    // Get Input Values
    let ownername = document.getElementById("ownername").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let nid = document.getElementById("nid").value.trim();

    let restname = document.getElementById("restname").value.trim();
    let cuisine = document.getElementById("cuisine").value;
    let area = document.getElementById("area").value;

    let opentime = document.getElementById("opentime").value;
    let closetime = document.getElementById("closetime").value;

    let mindelivery = document.getElementById("mindelivery").value;
    let logo = document.getElementById("logo").files[0];
    let paymethod = document.getElementById("paymethod").value;

    let services = document.querySelectorAll(
        'input[name="services[]"]:checked'
    );

    message.innerHTML = "";

    // 1. Owner Name Validation
    let namePattern = /^[A-Za-z]+(?:[ .'-][A-Za-z]+)*$/;

    if (ownername === "") {
        event.preventDefault();
        message.innerHTML = "Owner name cannot be empty.";
        return;
    }

    if (!namePattern.test(ownername)) {
        event.preventDefault();
        message.innerHTML = "Owner name should contain only letters.";
        return;
    }

    // 2. Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        event.preventDefault();
        message.innerHTML = "Email cannot be empty.";
        return;
    }

    if (!emailPattern.test(email)) {
        event.preventDefault();
        message.innerHTML = "Enter a valid email address.";
        return;
    }

    // 3. Phone Number Validation
    let phonePattern = /^01[3-9][0-9]{8}$/;

    if (phone === "") {
        event.preventDefault();
        message.innerHTML = "Phone number cannot be empty.";
        return;
    }

    if (!phonePattern.test(phone)) {
        event.preventDefault();
        message.innerHTML =
            "Enter a valid 11-digit Bangladeshi mobile number.";
        return;
    }

    // 4. NID Validation
    if (nid === "") {
        event.preventDefault();
        message.innerHTML = "Owner NID number cannot be empty.";
        return;
    }

    if (!/^[0-9]{10,17}$/.test(nid)) {
        event.preventDefault();
        message.innerHTML =
            "NID must contain 10 to 17 digits.";
        return;
    }

    // 5. Restaurant Name Validation
    if (restname === "") {
        event.preventDefault();
        message.innerHTML = "Restaurant name cannot be empty.";
        return;
    }

    if (restname.length < 2) {
        event.preventDefault();
        message.innerHTML =
            "Restaurant name must contain at least 2 characters.";
        return;
    }

    // 6. Cuisine Validation
    if (cuisine === "") {
        event.preventDefault();
        message.innerHTML = "Please select a cuisine type.";
        return;
    }

    // 7. Services Validation
    if (services.length === 0) {
        event.preventDefault();
        message.innerHTML =
            "Please select at least one service.";
        return;
    }

    // 8. Area Validation
    if (area === "") {
        event.preventDefault();
        message.innerHTML = "Please select your restaurant area.";
        return;
    }

    // 9. Opening Time Validation
    if (opentime === "") {
        event.preventDefault();
        message.innerHTML = "Please select opening time.";
        return;
    }

    // 10. Closing Time Validation
    if (closetime === "") {
        event.preventDefault();
        message.innerHTML = "Please select closing time.";
        return;
    }

    if (opentime === closetime) {
        event.preventDefault();
        message.innerHTML =
            "Opening and closing times cannot be the same.";
        return;
    }

    // 11. Minimum Order Amount Validation
    if (mindelivery === "" || Number(mindelivery) < 0) {
        event.preventDefault();
        message.innerHTML =
            "Minimum order amount cannot be negative or empty.";
        return;
    }

    // 12. Restaurant Logo Validation (Optional)
    if (logo) {

        if (!logo.type.startsWith("image/")) {
            event.preventDefault();
            message.innerHTML =
                "Please upload a valid image file for the restaurant logo.";
            return;
        }

        if (logo.size > 2 * 1024 * 1024) {
            event.preventDefault();
            message.innerHTML =
                "Restaurant logo must be less than 2 MB.";
            return;
        }
    }

    // 13. Payout Method Validation
    if (paymethod === "") {
        event.preventDefault();
        message.innerHTML = "Please select a payout method.";
        return;
    }

    // All Validations Passed
    event.preventDefault();
    message.innerHTML = "Restaurant Owner Registration Successful!";

});


// Clear message when Reset is clicked
document.getElementById("ownerForm").addEventListener("reset", function() {
    document.getElementById("ownerMessage").innerHTML = "";
});
