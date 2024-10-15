//Counter App
let count = 0
function increment() {
    count++
    document.getElementById("count-el").innerHTML = count
    console.log(count)
}
document.getElementById("count-el").innerText = 5