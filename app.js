const scriptURL = 'https://script.google.com/macros/s/AKfycbyfHf0dI6AS2sHDVmfQ9j-wPdRQmvf3insYY6tNjBLmpp1sJdMudIOwUMuMj2X-5_PcRg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})