const scriptURL = 'https://script.google.com/macros/s/AKfycbzD8-nBZ2m9lfTd0nMdmA9jbBUX_prt8XVWCKkHQuGOMx-6r8FCHXwxxocUNUAHWJNx/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})