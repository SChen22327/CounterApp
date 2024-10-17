//Counter App
let count = 0
function increment() {
    count++
    document.getElementById("count-el").innerHTML = count
    console.log(count)
}
function save() {
    let history = document.getElementById("history")
    history.innerHTML += count + " - "
}