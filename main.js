//define a function named buyClay

const buyClay = () => {
    return {}
}

//define a funnction named makePottery

const makePottery = (obj) => {
    let newObj = obj;
    newObj.shape = "Bowl";
    return newObj
}
const purchasedPottery = buyClay();

const madePottery = makePottery(purchasedPottery)
console.log(madePottery)

//define a function named bisqueFire
const bisqueFire = (obj) => {
    let newObj = obj;
    newObj.readyForGlazing = true;
    return newObj
}

const bisquedPottery = bisqueFire(madePottery);

// console.log(bisquedPottery)

//define a function named glazePottery
//if bisue fired, add name of glaze, otherwise log "Make sure you bisque fire the pottery before you glaze it."

const glazePottery = (obj) => {
    if (obj.readyForGlazing) {
        let newObj = obj;
        newObj.glazing = "Midnight Blue";
        return newObj

    } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
}


const glazedPottery = glazePottery(bisquedPottery);

// console.log(glazedPottery);

//define a function named finalFiring. the takes two arguments, the pottery and the temp. check if pottery is cracked.
const finalFiring = (obj, temp) => {
    if (temp > 1200) {
        let newObj = obj;
        newObj.cracked = true;
        return newObj
    
    } else {
        let newObj = obj;
        newObj.cracked = false;
        return newObj
    }
    
}

const finishedPottery = finalFiring(glazedPottery, 1201);

// console.log(finishedPottery)