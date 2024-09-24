let durability = 1;
let insanity = 1;
let abilities = 1;

let options = [
    "Durability",
    "Insanity",
    "Abilities"
]

let stats = [
    ["Low","Medium","High"],
    ["Normal","Psychotic","Insane"],
    ["Weak","Medium","Strong"]
]

function switchMain(){
    document.body.style.background = "url(../images/mainscreen.jpg)"
    document.body.style.backgroundSize = "112vw"
    document.body.style.backgroundPositionX = "-4vw"
    document.getElementById("content").innerHTML = `
    <h1 id="maintitle2">The boys supe archieve</h1>
    <h2 id="subMainTitle2">Find them by Ranking them in the given Categories</h2>
    <div id="bigMainBox">
    <div id="leftMainBox">
    <img src="">
    </div>
    <div id="rightMainBox">
    </div>
    </div>`


    for (let i = 1; i < 4; i++){
        document.getElementById("rightMainBox").innerHTML += `
        <h2 class="type">${options[i-1]}</h2>
        <div class="wholeletterline" id="line${options[i-1]}">
        <div class="textIndicator" id="${options[i-1]}${1}">
            <h5>${stats[i - 1][0]}</h5>
            </div>
            <div class="textIndicator" id="${options[i-1]}${2}">
            <h5>${stats[i - 1][1]}</h5>
            </div>
            <div class="textIndicator" id="${options[i-1]}${3}">
            <h5>${stats[i - 1][2]}</h5>
            </div>
        </div>

        <div class="wholeLineCust" id="line${i}"> 
        </div>`
    }

    for (let i = 1; i < 4; i++){
        document.getElementById(`line${i}`).innerHTML += `
        <div class="indicator" id="indicator${options[i - 1]}${1}" onclick="switchToAnother(${1},${options[i-1]})">
        </div>
        <div class="indicator" id="indicator${options[i - 1]}${2}" onclick="switchToAnother(${2} ,${options[i-1]})">
        </div>
        <div class="indicator" id="indicator${options[i - 1]}${3}" onclick="switchToAnother(${3} ,${options[i-1]})">
        </div>`
    }


}

function switchToAnother(numb,  opt){
    console.log(numb)
    console.log(opt)
    document.getElementById(`indicator${opt}${numb}`).style.backgroundColor = "white"
}