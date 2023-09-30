// phone_number_form.js

document.getElementById('phoneForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the user's entered phone number
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    // Fetch the profile.json file
    fetch('profile.json')
        .then(response => response.json())
        .then(data => {
            // Check if the phone number exists in the profile.json data
            if (data.hasOwnProperty(phoneNumber)) {
                // Phone number exists, redirect to otp.html
                window.location.href = 'otp.html';
            } else {
                // Phone number doesn't exist, redirect to register.html
                window.location.href = 'register.html';
            }
        })
        .catch(error => {
            console.error('Error fetching profile data:', error);
        });
});

// Fetch area codes from JSON file
fetch('area_code.json')
    .then(response => response.json())
    .then(data => {
        const areaCodeSelect = document.getElementById('areaCode');
        for (const code in data) {
            if (data.hasOwnProperty(code)) {
                const option = document.createElement('option');
                option.value = data[code];
                option.textContent = `${code} (${data[code]})`;
                areaCodeSelect.appendChild(option);
            }
        }
    })
    .catch(error => {
        console.error('Error fetching area codes:', error);
    });
