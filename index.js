// Getting the html tag with
let saveEl = document.getElementById("save-el")


let countEl = document.getElementById("count-el")

// declare a variabe count
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
  
}

function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
}

