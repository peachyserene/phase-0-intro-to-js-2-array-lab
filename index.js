const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
    return cats
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    const appendedCats = [...cats, "Broom"]
    return appendedCats
}

function prependCat(name){
    const preppendedCats = ["Arnold",...cats]
    return preppendedCats
}

function removeLastCat(){
    const lastCatRemoved = cats.slice(0,-1)
    return lastCatRemoved 
}

function removeFirstCat(){
    const firstCatRemoved = cats.slice(1)
    return firstCatRemoved 
}
