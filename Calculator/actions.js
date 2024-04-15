function getValues() {
    let a = document.querySelector('.box1').value;
    let b = document.querySelector('.box2').value;
    return {a,b}
}

let btn1 = document.querySelector('.plus')
btn1.onclick = function() {
    let c = Number(getValues().a)+Number(getValues().b)
    alert (c)
}

let btn2 = document.querySelector('.minus')
btn2.onclick = function() {
    let c = Number(getValues().a)-Number(getValues().b)
    alert (c)
}

let btn3 = document.querySelector('.multi')
btn3.onclick = function() {
    let c = Number(getValues().a)*Number(getValues().b)
    alert (c)
}

let btn4 = document.querySelector('.devide')
btn4.onclick = function() {
    let c = Number(getValues().a)/Number(getValues().b)
    alert (c)
}