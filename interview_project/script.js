
document.getElementById('patient-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('patient-name').value;
    const age = document.getElementById('patient-age').value;
    const disease = document.getElementById('patient-disease').value;
    const contact = document.getElementById('patient-contact').value;

    if (name && age && disease && contact) {
        const patient = {
            name: name,
            age: age,
            disease: disease,
            contact: contact
        };

        addPatientToList(patient);
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to add a patient to the list
function addPatientToList(patient) {
    const patientList = document.getElementById('patients-list');

    const li = document.createElement('li');
    li.innerHTML = `
        <strong>Name:</strong> ${patient.name} <br>
        <strong>Age:</strong> ${patient.age} <br>
        <strong>Disease:</strong> ${patient.disease} <br>
        <strong>Contact:</strong> ${patient.contact}
        <button onclick="deletePatient(this)">Delete</button>
    `;

    patientList.appendChild(li);
}

// Function to clear the form fields
function clearForm() {
    document.getElementById('patient-name').value = '';
    document.getElementById('patient-age').value = '';
    document.getElementById('patient-disease').value = '';
    document.getElementById('patient-contact').value = '';
}

// Function to delete a patient from the list
function deletePatient(button) {
    const li = button.parentElement;
    li.remove();
}
