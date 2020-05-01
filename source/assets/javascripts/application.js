document.addEventListener('DOMContentLoaded', (event) => {
  const openCrispButtons = document.querySelectorAll('.open-crisp');

  openCrispButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      $crisp.push(['do', 'chat:open']);
    })
  })
})
