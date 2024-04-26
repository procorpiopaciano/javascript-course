
const buttons = document.querySelectorAll("button");

///////compact addEventListener
for(let i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener('click', function() {
    const clickedButton = document.activeElement;
    
    if(clickedButton.classList.contains('is-toggled')) {
      clickedButton.classList.remove('is-toggled');
  
    } else {
      let buttonToBeToggled;
  
      for(let i = 0; i < buttons.length; i++) {
  
        if(document.activeElement === buttons[i]) {
          buttonToBeToggled = i;
          continue;
        }
  
        buttons[i].classList.remove('is-toggled');
      }
  
      buttons[buttonToBeToggled].classList.add('is-toggled');
      
    }
  })

}


/*
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleButton);
}

function toggleButton() {

  const clickedButton = document.activeElement;
  
  if(clickedButton.classList.contains('is-toggled')) {
    clickedButton.classList.remove('is-toggled');

  } else {
    let buttonToBeToggled;

    for(let i = 0; i < buttons.length; i++) {

      if(document.activeElement === buttons[i]) {
        buttonToBeToggled = i;
        continue;
      }

      buttons[i].classList.remove('is-toggled');
    }

    buttons[buttonToBeToggled].classList.add('is-toggled');
    
  }

}
*/