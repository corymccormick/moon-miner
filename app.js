let cheeseCount = 0;
let cheeseEaterVisited = false

let clickUpgrades = {
  cheeseKnife: {
    cost: 100,
    modifier: 1,
    quantity: 0,
    multiplier: 2
  },
  spacePlatter: {
    cost: 300,
    modifier: 2,
    quantity: 0,
    multiplier: 5
  }

}

let automaticUpgrades = {
  mouseDroid: {
    cost: 700,
    modifier: 3,
    quantity: 0,
    multiplier: 10
  },
  cheezeMagnet: {
    cost: 500,
    modifier: 2,
    quantity: 0,
    multiplier: 5
  }
}

// add click modifiers here add to cheeseCount, 
// iterate through click upgrades, find key(cheeseKnife), find item() and pull values, then take those values and make 
function mine() {
  cheeseCount++
  for (const [key, value] of Object.entries(clickUpgrades)) {
    cheeseCount = value.modifier * value.quantity + cheeseCount++
  }
  if (!cheeseEaterVisited && cheeseCount >= 150) {
    cheeseEaterVisited = true
    cheeseCount = cheeseCount - 75; alert('The teenage mutant ninja turtles just teleported in and took a bunch of cheese chunks for their pizzas! *-75 cheese chunks*')
  }
  update(cheeseCount)

}

//+ 1 TO CLICK ${clickUpgrades.cheeseKnife.modifier}  
function update(count) {
  document.getElementById('count').innerHTML = count

  document.getElementById('knife').innerHTML = `<h4>CHEESE KNIFE</h4> <h6> +1 TO CLICK </br> COST: ${clickUpgrades.cheeseKnife.cost} <br/> QUANTITY: ${clickUpgrades.cheeseKnife.quantity}</h6>`

  document.getElementById('platter').innerHTML = `<h4>SPACE PLATTER</h4> <h6> +2 TO CLICK</br> COST: ${clickUpgrades.spacePlatter.cost} <br/> QUANTITY: ${clickUpgrades.spacePlatter.quantity}</h6>`

  document.getElementById('mouse').innerHTML = `<h4>MOUSE DROID</h4> <h6> +3 AUTO</br> COST: ${automaticUpgrades.mouseDroid.cost} <br/> QUANTITY: ${automaticUpgrades.mouseDroid.quantity}</h6>`

  document.getElementById('magnet').innerHTML = `<h4>CHEEZE MAGNET</h4> <h6>+2 AUTO</BR> COST: ${automaticUpgrades.cheezeMagnet.cost} <br/> QUANTITY: ${automaticUpgrades.cheezeMagnet.quantity}</h6>`

  document.getElementById('music').play()
}


function upgrade(key) {
  let item = clickUpgrades[key]
  if (cheeseCount >= item.cost) {
    cheeseCount = cheeseCount - item.cost;
    item.quantity++;
    item.cost = item.cost * item.multiplier;
    update(cheeseCount)
  }
}

function autoUpgrade(key) {
  let item = automaticUpgrades[key]
  if (cheeseCount >= item.cost) {
    cheeseCount = cheeseCount - item.cost;
    item.quantity++;
    item.cost = item.cost * item.multiplier;
    update(cheeseCount)
  }
}



function collectAutoUpgrades() {

  for (const [key, item] of Object.entries(automaticUpgrades)) {
    cheeseCount = item.modifier * item.quantity + cheeseCount
  }
  update(cheeseCount)
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

startInterval()