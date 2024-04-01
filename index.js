function addingEventListener() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        console.log('Button clicked!');
    });
}

addingEventListener(); // Call the function to bind the event listener
