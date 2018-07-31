const name = prompt('Enter your name:')

const greeting = console.log('Welcome to Ravnica, ' + name +  '. You have become a planeswalker, a wielder of magic.')

const color = prompt('Choose a color. Red, Blue, or Green?')

console.log(name +  ', you haven chosen to become a ' + color + ' planeswalker. Let the game begin.')


switch (color) {
  case 'red':
    red(prompt('Born a natural human wielder of fire, a clan is attacking your village. Do you fight, try to negotiate, or run away?'))
    break
  case 'blue':
    blue(prompt('Raised by a mage called Victivus, you have become a powerful human wielder of water. You find out Victivus plans to sell you as a slave to a Sorcerer. Do you confront him or run away?'))
    break
  case 'green':
    green(prompt('You are an elf of royalty and a powerful wielder of nature. But a life of royalty has never appealed to you. You decide to run away and become a hunter. Do you travel to the city? Yes or No?'))
    break
  default:
    alert('You have not chosen any of the three colors. The game has ended.')
}


function red(choice) {
  switch (choice) {
    case 'fight':
      alert('You manage to fight the clansmen off and ultimately save the village! You eventually become village chief!')
      break
    case 'run':
      alert('The clan manages to capture  you and destroys the village. The Game has Ended.')
      break
    case 'negotiate':
      alert('The clan manages to capture  you and destroys the village. The Game has Ended.')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}

function blue(choice) {
  switch (choice) {
    case 'confront':
      alert('Victivus turns on you and defeats you. You are sold as a slave. The game has ended.')
      break
    case 'run':
      alert('You run away and get enrolled in an academy for mages where you eventually take over as Headmaster.')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}

function green(choice) {
  switch (choice) {
    case 'yes':
      alert('You are captured and killed by city soldiers. Elves are not welcome in the city. The game has ended.')
      break
    case 'no':
      alert('You travel to a neighboring forest and join a group of nomadic hunters.')
      break
    default:
      alert('You have failed to select a valid option.')
  }
}
