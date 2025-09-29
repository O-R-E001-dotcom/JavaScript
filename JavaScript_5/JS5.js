// EXERCISE 1
function changeColour() {
            document.getElementById('paragraph').style.color = "green"
};

// EXERCISE 2
const texts = document.getElementById('input')
const counter = document.getElementById('counting');
function updateCount() {
  let words = texts.value;
  let count = words.length;
      //Display
  
  counter.texContent = `Characters: ${count}`;
  if (count.length > 200) {
    counter.style.color = 'red';
  } else {
      counter.style.color = 'black'
  }
}
texts.addEventListener('', updateCount);


