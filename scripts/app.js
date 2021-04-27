class Pet {
  constructor(character) {
    this.age = 0; // start -> 0/1
    this.boredom = 20;
    this.hungry = 20;
    this.sleep = 20;
  }
}
const pet = new Pet('Pixie');
console.log(pet);

//the egg hatch and the pet appears
document.getElementById('start').addEventListener('click', function (event) {
  document.querySelector('.controls').classList.remove('hidden');
  event.target.remove();
});

function counter() {
  let timer = 0;

  let timerIntervals = setInterval(function () {
     timer++;
     pet.age++;
     console.log(pet)
     $('#age-bar').val(pet.age);
    if (timer == 130) {
      clearInterval(timerIntervals);
      console.log('Game Over!');
    } else {

      $('#timer').text(timer);
     // $('#age').text(pet.age)
    }
  }, 1000);
}

$('#start').on('click', function () {
  counter();
});

//pet.age++;~~~~~~~~~~~~~~~~~~~~~~~~~~~~ another place
function hungerFunction() {
  const counter = setInterval(() => {
    pet.hungry++;
   // $('#hunger').text(pet.hungry);
   $("#hunger-bar").val(pet.hungry)
    if (pet.hungry > 31) {
      //set interval runs every sec
      alert(`Game Over!`);
      clearInterval(counter);
    }
  }, 3000);
}
hungerFunction();

function feedMe() {
  console.log('Hi im feedMe');
  pet.hungry--;
  $('#hunger-bar').val(pet.hungry);
  console.log('feedMe button is working ');

}
$('#food').on("click", feedMe);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function boredFunction() {
  const counter = setInterval(() => {
    pet.boredom++;
    $('#bored-bar').val(pet.boredom);

    if (pet.boredom > 31) {
      //set interval runs every sec
      alert(`Game Over!`);
      clearInterval(counter);
    }
  }, 3000);
}
boredFunction();

function playWithMe() {
  pet.boredom--;
  $('#bored-bar').val(pet.boredom);
   console.log('playWithMe button is working');
}
$('#play').on("click", playWithMe);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function sleepFunction() {
  const counter = setInterval(() => {
    pet.sleep++;
    $('#tired-bar').val(pet.sleep);
    if (pet.sleep > 31) {
      //set interval runs every sec
      alert(`Game Over!`);
      clearInterval(counter);
    }
  }, 3000);
}
sleepFunction();

function rest(){
  pet.sleep--;
  $('#tired-bar').val(pet.sleep)
  console.log('rest is gooood')
}
$('#sleep').on("click", rest)









//~~~~~~~~ CREATE A PET CLASS ~~~~~~~~
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Animate your pet across the screen while it's alive.
