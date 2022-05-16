function sendmail() {
    sent = document.getElementById("sent");

    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

emailjs.send('service_4rkt7lk', 'template_12wv3x5', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       sent.innerHTML = "Message sent!";
    }, function(error) {
       console.log('FAILED...', error);
       sent.innerHTML = "Message not sent!";
    });
    }