document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from actually submitting

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const role = document.getElementById('role').value;

    const recommend = document.querySelector('input[name="recommed"]:checked');
    const recommendValue = recommend ? recommend.value : null;

    const languages = Array.from(document.querySelectorAll('input[name="inp"]:checked')).map(input => input.value);

    const comment = document.getElementById('comment').value;

    // Log the answers
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Age:', age);
    console.log('Role:', role);
    console.log('Recommend:', recommendValue);
    console.log('Languages Known:', languages.join(', '));
    console.log('Comments:', comment);
    });
