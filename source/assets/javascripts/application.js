import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

document.addEventListener('DOMContentLoaded', (event) => {
  const openCrispButtons = document.querySelectorAll('.open-crisp');

  openCrispButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      $crisp.push(['do', 'chat:open']);
    })
  })
})
