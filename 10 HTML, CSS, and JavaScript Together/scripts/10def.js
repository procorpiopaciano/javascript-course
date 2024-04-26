function toggleButton() {
  const clickedButton = document.activeElement;

  if(clickedButton.classList.contains('is-toggled') === false) {
    clickedButton.classList.add('is-toggled');
  } else {
    clickedButton.classList.remove('is-toggled');
  }
}