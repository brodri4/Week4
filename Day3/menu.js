let startersListUL = document.getElementById("startersListUL")
let entreesListUL = document.getElementById("entreesListUL")
let dessertsListUL = document.getElementById("dessertsListUL")

let startersDishes = dishes.filter(function (n) {
    return n.course == "Starters"
})

let entreesDishes = dishes.filter(function (n) {
    return n.course == "Entrees"
})

let dessertsDishes = dishes.filter(function (n) {
    return n.course == "Desserts"
})


let starterItems = startersDishes.map(function (item) {
    return `<li class="list-group-item">
        <img src="${item.imageURL}" class="imgSize"></img>
        <h3 class="itemTitle"><b>${item.title}</b></h3>
        <i>${item.description}</i>
        <h5>$${item.price}</h5>
     </li>
 `
})

let entreeItems = entreesDishes.map(function (item) {
    return `<li class="list-group-item">
        <img src="${item.imageURL}" class="imgSize"></img>
        <h3 class="itemTitle"><b>${item.title}</b></h3>
        <i>${item.description}</i>
        <h5>$${item.price}</h5>
     </li>
 `
})

let dessertItems = dessertsDishes.map(function (item) {
    return `<li class="list-group-item">
        <img src="${item.imageURL}" class="imgSize"></img>
        <h3 class="itemTitle"><b>${item.title}</b></h3>
        <i>${item.description}</i>
        <h5>$${item.price}</h5>
     </li>
 `
})

startersListUL.insertAdjacentHTML('beforeend', starterItems.join(" "))
entreesListUL.insertAdjacentHTML('beforeend', entreeItems.join(" "))
dessertsListUL.insertAdjacentHTML('beforeend', dessertItems.join(" "))
