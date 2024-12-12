function displayDetails() {

    let form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log("Name: " + name + " Email: " + email);
}

