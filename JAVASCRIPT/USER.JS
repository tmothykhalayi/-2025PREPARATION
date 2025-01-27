let username;
username = window.prompt('What is your name?');

document.getElementById('mySubmit').addEventListener('click', function() {
    console.log(username);
});

// The below line will log the string 'username', not the actual value.
console.log(username);
