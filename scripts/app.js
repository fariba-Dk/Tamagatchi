//~~~~~~~~ CREATE A PET CLASS ~~~~~~~~
console.log('hi')
class Pet {
  constructor(character){
    this.character = character;
    this.age = 0;// start -> 0/1
    this.boredom = 0;
    this.hungry = 0;
    this.sleep = 0;
  }
}
const pet = new Pet('Pixie');
console.log(pet)

document.getElementById('start').addEventListener('click', function(event){
  document.querySelector(".controls").classList.remove('hidden')
  event.target.remove();
})


function counter(n){
  let timer = 0;

  setInterval(function(){
    if(timer == 11){
      clearInterval(this)
      console.log('Game Over!')
    }else{
      console.log('Time is kicking ', timer++)
    }
  }, 1000)
}
let n = 10
console.log(counter(n))

$('#start').on('click', function(){
  counter()
  console.log('tick tock')
})

//~~~~~~~~~  START - INSTANTIATE PET - SET TIMER ~~~~~~~~~~~~

//check to see if .start button works

//input for pet
//submit button --> name
//wire up the function to DIE -> black background with a white text - your pet died
//annimation



function startFunction(){

  const counter = setInterval(()=>{

    // age++;
    // pet.hungry++;
    //   $('#hunger').val(pet.hungry)

    // pet.boredom++;
    //   $('#boredom').val(pet.boredom)

    // pet.sleepy++;
    //   $('#sleepy').val(pet.sleepy)



    if (pet.hungry > 11 || pet.boredom > 11 || pet.sleep > 11){
      //set interval runs every sec
      alert(`Game Over!`);
      clearInterval(counter);
    }
  }, 3000);
}
startFunction()


function feedMe(){
$('.increment-btn-hunger').click(function () {
  pet.hungry--;
  $('#hunger').val(pet.hungry)
})}

// function rest(){
// $('.increment-btn-sleep').click(function () {
//   pet.sleep--;
//   $('#sleep').val(pet.sleep)
// })}

// function play(){
// $('.increment-btn-boredom').click(function () {
//   pet.boredom--;
//   $('#boredom').val(pet.boredom)
// })
// }


/*
img src="https://media1.tenor.com/images/8ab88b79885ab587f84cbdfbc3b87835/tenor.gif?itemid=15917800""
        <!--
*/




































