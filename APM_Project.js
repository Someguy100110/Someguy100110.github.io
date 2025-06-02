const canvas = document.getElementById("myCanvas"); 
const svg = document.getElementById("mySvg") 
var c = document.createElement("line")
c.setAttribute("x1", "0")
c.setAttribute("x2", "100%")
c.setAttribute("y1", "0")
c.setAttribute("y2", "100%")
c.setAttribute("style", "stroke:red;stroke-width:2" )
svg.appendChild(c)
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
var lines = []   
var curves = []
var state = "ad"
var phan = false; 
const bigStyle = "height: 10vh; width: 14vw; position: fixed;";  
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
function getPos(x, y, xOffset, yOffset){
    let topPos = y/window.innerHeight * 100 - yOffset
    let leftPos = x/window.innerWidth * 100 - xOffset
    console.log(topPos)
    topPos = topPos + "vh"
    leftPos = leftPos + "vw"
    return [leftPos, topPos];
}
function dragon(event){
    let poses = getPos(event.clientX, event.clientY, 0, 0);
    event.currentTarget.setAttribute("style", "top: " + poses[1] + "; left: " + poses[0] + "; height: 1vh; width: 1vh; position: fixed;")
    let roses = getPos(event.clientX, event.clientY, 0, 5);
    texts[event.currentTarget.getAttribute("id")-1].setAttribute("style", "top: " + roses[1] + "; left: " + roses[0] + "; height: 1vh; width: 1vh; position: fixed;")
}
function point(event){
    if(ready){
        /*ctx.beginPath();
        ctx.fillStyle = "black"
        ctx.arc(event.clientX, event.clientY, window.innerHeight/100, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()*/
        let topPos = event.clientY/window.innerHeight * 100 - 5
        let leftPos = event.clientX/window.innerWidth * 100 - 1
        console.log(topPos)
        topPos = topPos + "vh"
        leftPos = leftPos + "vw"  
        texts.push(document.createElement("p"))
        texts[texts.length-1].setAttribute("style", "top: " + topPos + "; left: " + leftPos + "; position: fixed;")
        texts[texts.length-1].innerHTML = value 
        console.log(value)
        topPos = event.clientY/window.innerHeight * 100
        topPos = topPos + "vh"
        document.body.appendChild(texts[texts.length-1])
        texts.push(document.createElement("img"))
        texts[texts.length-1].setAttribute("src", "Circle.png")
        texts[texts.length-1].setAttribute("style", "top: " + topPos + "; left: " + leftPos + "; height: 1vh; width: 1vh; position: fixed;")
        texts[texts.length-1].setAttribute("ondrag", "dragon(event)")
        texts[texts.length-1].setAttribute("ondragend", "dragon(event)")
        texts[texts.length-1].setAttribute("id", texts.length-1)
        texts[texts.length-1].setAttribute("name", "poi")
        document.body.appendChild(texts[texts.length-1])
        ready = false; 
    }
    if(phan){
        let xPos = ((1.01 * event.clientX - window.innerWidth/5) / 0.60)  
        ctx.beginPath()
        lines.push([xPos, 0, xPos, window.innerHeight]);
        ctx.moveTo(xPos, 0)
        ctx.lineTo(xPos, window.innerHeight)
        ctx.strokeStyle = "#000000"
        ctx.stroke();
        phan = false; 
        console.log("weird ")
    }
}
function graph(){
    for(let i = 0; i<curves.length; i+=2){
        ctx.beginPath();
        ctx.strokeStyle ="#000000"
        ctx.moveTo(curves[i][0], curves[i[1]])
        for(let j = 2; j < curves[i].length; j++){
            ctx.lineTo(curves[i][j], curves[i][j+1])
        }
        ctx.stroke();
    }
}    
function phantom(event){
    if(phan){

        
        let xPos = ((1.01 * event.clientX - window.innerWidth/5) / 0.60)  
        ctx.beginPath()
        lines.push([xPos, 0, xPos, window.innerHeight]);
        ctx.moveTo(xPos, 0)
        ctx.lineTo(xPos, window.innerHeight)
        ctx.strokeStyle = "gray"
        ctx.stroke();
        ctx.beginPath()
        ctx.strokeStyle = "#FFFFFF"
        for(var i = 0; i < 10; i++){
            ctx.moveTo(lines[lines.length-2][0], lines[lines.length-2][1]+1)
            ctx.lineTo(lines[lines.length-2][2], lines[lines.length-2][3]-2)
            ctx.stroke();
        }
        ctx.strokeStyle = "#000000"
        AD()
    }

}
function st(){
    phan = true; 
    document.getElementById("butts").remove()
}
function opts(){
    switch(state){
        case "ad":
            texts.push(document.createElement("div"))
            texts[texts.length-1].setAttribute("id", "butts")
            document.body.appendChild(texts[texts.length-1])
            texts.push(document.createElement("button"))
            texts[texts.length-1].setAttribute("style", "top: 50vh; left: 30vw; " + bigStyle)
            texts[texts.length-1].innerHTML = "Shift Curve"
            document.getElementById("butts").appendChild(texts[texts.length-1]);
            texts.push(document.createElement("button"))
            texts[texts.length-1].setAttribute("style", "top: 50vh; left: 56vw; " + bigStyle)
            texts[texts.length-1].innerHTML = "Add Curve" 
            texts[texts.length-1].setAttribute("id", "oppos")
            texts[texts.length-1].setAttribute("onclick", "st()")
            document.getElementById("butts").appendChild(texts[texts.length-1]);
            
    }
}
function PPC(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(window.innerWidth, 0);
    ctx.lineTo(window.innerWidth, window.innerHeight);
    ctx.lineTo(0, window.innerHeight);
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.beginPath()
    ctx.arc(0, window.innerHeight, 4*window.innerHeight/5, -Math.PI/2, 0)
    ctx.stroke()
    xa.innerHTML = "Capital Goods"
    ya.innerHTML = "Consumer Goods" 
}
function addText(top, left, text){
    texts.push(document.createElement("p"))
    let topPos = top*100 - 7
    let leftPos = left*100 - 1
    topPos = topPos + "vh"
    leftPos = leftPos + "vw"
    texts[texts.length-1].setAttribute("style", "top: " + topPos + "; left: " + leftPos + "; position: fixed;")
    texts[texts.length-1].innerHTML = text
    document.body.appendChild(texts[texts.length-1])
}
function baseGraph(){
    graphClear();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(window.innerWidth, 0);
    ctx.lineTo(window.innerWidth, window.innerHeight);
    ctx.lineTo(0, window.innerHeight);
    ctx.lineTo(0, 0);
    ctx.stroke();
}
function baseTest(){
    graphClear();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(window.innerWidth, 0)
    ctx.lineTo(window.innerWidth, window.innerHeight);
    ctx.lineTo(0, window.innerHeight);
    ctx.lineTo(0, 0); 
    ctx.stroke();
}
function AD(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(window.innerHeight, window.innerHeight)
    ctx.stroke()
    texts.push(document.createElement("p"))
    let topPos = 2/5*100 - 7
    let leftPos = 1.1/5*100 - 1
    topPos = topPos + "vh"
    leftPos = leftPos + "vw"
    texts[texts.length-1].setAttribute("style", "top: " + topPos + "; left: " + leftPos + "; position: fixed;")
    texts[texts.length-1].innerHTML = "AD ->"
    document.body.appendChild(texts[texts.length-1])
    ctx.beginPath()
    ctx.moveTo(0, window.innerHeight);
    ctx.lineTo(window.innerHeight, 0);
    ctx.stroke()
    addText(0.6, 1.1/5, "SRAS ->")
    addText(0.53, 1.3/5, "LRAS ->")
    ctx.beginPath()
    ctx.moveTo((0 + window.innerHeight)/2, 0)
    ctx.lineTo((0 + window.innerHeight)/2, window.innerHeight)
    ctx.stroke()
    xa.innerHTML = "Real GDP" 
    ya.innerHTML = "Price Level" 
}
function Loans(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(window.innerHeight, window.innerHeight)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, window.innerHeight);
    ctx.lineTo(window.innerHeight, 0);
    ctx.stroke()
    xa.innerHTML = "Quantity of Loanable Funds" 
    ya.innerHTML = "Interest Rates (Real)" 
    addText(0.6, 1.2/5, "Supply -> ")
    addText(0.4, 1.1/5, "Demand ->")
    
}
function Money(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(window.innerHeight, window.innerHeight)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo((0 + window.innerHeight)/2, 0)
    ctx.lineTo((0 + window.innerHeight)/2, window.innerHeight)
    ctx.stroke()
    xa.innerHTML = "Quantity of Money" 
    ya.innerHTML = "Interest Rates (Nominal)"  
}
function Reserve(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(0, window.innerHeight/3);
    ctx.lineTo(window.innerWidth/6, window.innerHeight/3)
    ctx.lineTo(2.5*window.innerHeight/5, 2*window.innerHeight/3)
    ctx.lineTo(window.innerWidth, 2*window.innerHeight/3)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo((0 + window.innerHeight)/2, 0)
    ctx.lineTo((0 + window.innerHeight)/2, window.innerHeight)
    ctx.stroke()
    xa.innerHTML = "Quantity of Reserves" 
    ya.innerHTML = "Interest Rates (Nominal)"  

}
function Foreign(){
    baseGraph();
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(window.innerHeight, window.innerHeight)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, window.innerHeight);
    ctx.lineTo(window.innerHeight, 0);
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
var optos = document.getElementById("Opti")
optos.setAttribute("onclick", "opts()")
p.setAttribute("onclick", "queue()")
can.setAttribute("onclick", "point(event)")
baseTest()
