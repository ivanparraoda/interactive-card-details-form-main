const element = document.getElementById("submit");
element.addEventListener("click", myFunction);

function myFunction() {
    let op=document.querySelector('.complete');
    op.classList.toggle('open');

    let op1=document.querySelector('.form');
    op1.classList.toggle('close');
}

function myFunction1() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }