import { Controller } from "stimulus";

export default class extends Controller {
  static get targets() {
    return [ "image", "imageMobile", "link", "showMobile" ]
  }

  initialize() {
    this.setActive(this.linkTargets[0]);
  }

  displayImage(event) {
    event.preventDefault();

    this.imageTarget.setAttribute('src', event.target.dataset.image);

    this.showMobileTarget.classList.add('hidden');

    this.linkTargets.forEach((link) => {
      link.classList.remove('bg-gray-400');
      link.classList.replace('text-gray-700', 'text-gray-500');
      link.classList.add('hover:text-gray-600');
    })

    this.setActive(event.currentTarget);
  }

  displayImageWithMobile(event) {
    event.preventDefault();

    this.imageTarget.setAttribute('src', event.target.dataset.image);
    this.imageMobileTarget.setAttribute('src', event.target.dataset.imageMobile);
    this.showMobileTarget.classList.remove('hidden');

    this.linkTargets.forEach((link) => {
      link.classList.remove('bg-gray-400');
      link.classList.replace('text-gray-700', 'text-gray-500');
      link.classList.add('hover:text-gray-600');
    })

    this.setActive(event.currentTarget);
  }

  setActive(element) {
    element.classList.replace('text-gray-500', 'text-gray-700');
    element.classList.remove('hover:text-gray-600');
    element.classList.add('bg-gray-400');
  }
}
