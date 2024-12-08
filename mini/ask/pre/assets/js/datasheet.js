
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyii8NEVD6Djby1vVxLkKySA29ePebSAxDeJxA2BiOkGKmBl-YJcEXB1YPskTEAqddTbQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
