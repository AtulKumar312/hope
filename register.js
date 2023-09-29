function createProfile() {
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const course = document.getElementById('course').value;

    const profileData = {
        "name": name,
        "phone_number": phoneNumber,
        "course": course,
        "books": []
    };
}
