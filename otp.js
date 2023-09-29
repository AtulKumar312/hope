//otp.js

function verifyOTP() {
    const enteredOTP = document.getElementById('otp').value;
    const hardcodedOTP = '1234'; // Replace this with your actual OTP logic
    
    if (enteredOTP === hardcodedOTP) {
        // Retrieve the phoneNumber from session storage
        const phoneNumber = sessionStorage.getItem('phoneNumber');
        
        // Redirect to home_page.html with the phoneNumber query parameter
        window.location.href = `home_page.html?phoneNumber=${phoneNumber}`;
    } else {
        alert('OTP verification failed. Please try again.'); // Replace with your desired action
    }
}
