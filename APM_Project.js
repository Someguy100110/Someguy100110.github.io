const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var text = document.createElement("input")
var submit = document.createElement("input")
var stuff = document.createElement("label")
var value = ""
var texts = []
var a = text.value 
var ready = false; 
var xa = document.getElementById("x-axis");
var ya = document.getElementById("y-axis");
text.oninput = function(){
    value = text.value
    /*if(typeof text.value !== "undefined" && (text.value !== null || text.value !== "")){
        value = text.value
    }*/
    console.log(value) 

}

function clear(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (i = 0; i < texts.length; i++){
        texts[i].remove()
    }
}
function graphClear(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    for (i = 0; i < texts.length; i++){
        texts[i].remove()
    }
}
function queue(){
    stuff.setAttribute("for", "label")
    stuff.innerHTML = "Label"
    stuff.setAttribute("style", "top: 45vh; left: 48vw; height: 10vh; width: 14vw; position: fixed;")
    text.setAttribute("name", "label")
    submit.setAttribute("type", "submit")
    submit.setAttribute("style", "top: 70vh; left: 42vw; height: 10vh; width: 14vw; position: fixed;")
    submit.setAttribute("value", "Submit")
    text.setAttribute("id", "label")
    submit.setAttribute("onclick", "rid(event)")
    text.setAttribute("style", "top: 50vh; left: 35vw; height: 10vh; width: 30vw; position: fixed;")
    document.body.appendChild(text)
    document.body.appendChild(stuff);  
    document.body.appendChild(submit)
}
function rid(event){
    text.remove()
    stuff.remove()
    submit.remove()
    ready = true; 
}
function point(event){
    if(ready){
        ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.arc(event.clientX, event.clientY, window.innerHeight/100, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
        var topPos = event.clientY/window.innerHeight * 100 - 7
        var leftPos = event.clientX/window.innerWidth * 100 - 1
        console.log(topPos)
        var topPos = topPos + "vh"
        var leftPos = leftPos + "vw"  
        texts.push(document.createElement("p"))
        texts[texts.length-1].setAttribute("style", "top: " + topPos + "; left: " + leftPos + "; position: fixed;")
        texts[texts.length-1].innerHTML = value 
        console.log(value)
        document.body.appendChild(texts[texts.length-1])
        ready = false; 
    }
    
}
function PPC(){
    graphClear()
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerWidth/5, 4*window.innerHeight/5);
    ctx.lineTo(window.innerWidth/5, 4*window.innerHeight/5);
    ctx.lineTo(window.innerWidth/5, window.innerHeight/5);
    ctx.stroke();
    ctx.beginPath()
    ctx.arc(window.innerWidth/5, 4*window.innerHeight/5, window.innerHeight/2, -Math.PI/2, 0)
    ctx.stroke()
    xa.innerHTML = "Capital Goods"
    ya.innerHTML = "Consumer Goods" 
}
function baseGraph(){
    graphClear();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerWidth/5, 4*window.innerHeight/5);
    ctx.lineTo(window.innerWidth/5, 4*window.innerHeight/5);
    ctx.lineTo(window.innerWidth/5, window.innerHeight/5);
    ctx.stroke();
}
function AD(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, 4*window.innerHeight/5)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(window.innerWidth/5, 4*window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, window.innerHeight/5);
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo((window.innerWidth/5 + 4*window.innerHeight/5)/2, window.innerHeight/5)
    ctx.lineTo((window.innerWidth/5 + 4*window.innerHeight/5)/2, 4*window.innerHeight/5)
    ctx.stroke()
    xa.innerHTML = "Real GDP" 
    ya.innerHTML = "Price Level" 
}
function Loans(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, 4*window.innerHeight/5)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(window.innerWidth/5, 4*window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, window.innerHeight/5);
    ctx.stroke()
    xa.innerHTML = "Quantity of Loanable Funds" 
    ya.innerHTML = "Interest Rates (Real)" 
}
function Money(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, 4*window.innerHeight/5)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo((window.innerWidth/5 + 4*window.innerHeight/5)/2, window.innerHeight/5)
    ctx.lineTo((window.innerWidth/5 + 4*window.innerHeight/5)/2, 4*window.innerHeight/5)
    ctx.stroke()
    xa.innerHTML = "Quantity of Money" 
    ya.innerHTML = "Interest Rates (Nominal)"  
}
function Reserve(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/5, 2*window.innerHeight/5);
    ctx.lineTo(1.5*window.innerWidth/5, 2*innerHeight/5)
    ctx.lineTo(3.5*window.innerHeight/5, 3*window.innerHeight/5)
    ctx.lineTo(4*window.innerWidth/5, 3*window.innerHeight/5)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo((window.innerWidth/5 + 4*window.innerHeight/5)/2, window.innerHeight/5)
    ctx.lineTo((window.innerWidth/5 + 4*window.innerHeight/5)/2, 4*window.innerHeight/5)
    ctx.stroke()
    xa.innerHTML = "Quantity of Reserves" 
    ya.innerHTML = "Interest Rates (Nominal)"  
}
function Loans(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, 4*window.innerHeight/5)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(window.innerWidth/5, 4*window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, window.innerHeight/5);
    ctx.stroke()
    xa.innerHTML = "Quantity of Loanable Funds" 
    ya.innerHTML = "Interest Rates (Real)" 
}
function Foreign(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(window.innerWidth/5, window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, 4*window.innerHeight/5)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(window.innerWidth/5, 4*window.innerHeight/5);
    ctx.lineTo(4*window.innerHeight/5, window.innerHeight/5);
    ctx.stroke()
    xa.innerHTML = "Quantity of Currency 1" 
    ya.innerHTML = "Currency 2/ Currency 1" 
}
function coords(event){
    console.log(event.clientX)
    console.log(event.clientY)
}
var button = document.getElementById("Graph")
button.setAttribute("onclick", "graphClear()")
var ppc = document.getElementById("PPC")
ppc.setAttribute("onclick", "PPC()")
var ad = document.getElementById("AD")
ad.setAttribute("onclick", "AD()")
var money = document.getElementById("Money")
money.setAttribute("onclick", "Money()")
var reserve = document.getElementById("Reserve")
reserve.setAttribute("onclick", "Reserve()")
var loans = document.getElementById("Loans")
loans.setAttribute("onclick", "Loans()")
var foreign = document.getElementById("Foreign")
foreign.setAttribute("onclick", "Foreign()")

var can = document.getElementById("myCanvas")
var p = document.getElementById("Point")
p.setAttribute("onclick", "queue()")
can.setAttribute("onclick", "point(event)")
PPC()