import { Controller } from "stimulus";

export default class extends Controller {
  static get targets() {
    return [ "screenshot", "link" ]
  }

  initialize() {
    this.currentIndex = 0;
  }

  connect() {
    this.displayScreenshot(this.linkTargets[this.currentIndex].dataset.slug);
    this.startAutoPlay();
  }

  disconnect() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.refreshTimer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.linkTargets.length;
      this.displayScreenshot(this.linkTargets[this.currentIndex].dataset.slug);
    }, 3000);
  }

  stopAutoPlay() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }

  handleDisplayScreenshot(event) {
    event.preventDefault();
    this.stopAutoPlay();
    this.displayScreenshot(event.currentTarget.dataset.slug);
  }

  displayScreenshot(slug) {
    this.screenshotTargets.forEach((screenshot) => {
      screenshot.classList.toggle('hidden', screenshot.dataset.slug != slug);
    });

    this.linkTargets.forEach((link) => {
      link.dataset.slug === slug ? this.setActive(link) : this.setInactive(link);
    });
  }

  setActive(link) {
    link.classList.replace('text-gray-500', 'text-white');
    link.classList.remove('hover:text-gray-600');
    link.classList.add('k-btn-primary');
  }

  setInactive(link) {
    link.classList.replace('text-white', 'text-gray-500');
    link.classList.remove('k-btn-primary');
    link.classList.add('hover:text-gray-600');
  }
}
