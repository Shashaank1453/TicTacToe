var trig= new Audio("ting.mp3");
var win= new Audio("sfx-victory6.mp3");
//function to check for wins
let winningLine=document.getElementById("winningLine");
const checkWin=()=>{
const ways=[
    [11,12,13,30,-20,-90,48],
    [21,22,23,30,0,-90,48],
    [31,32,33,30,20,-90,48],
    [11,21,31,10,0,0,48],
    [12,22,32,30,0,0,48],
    [13,23,33,50,0,0,48],
    [11,22,33,31,-6,-45,64], 
    [31,22,13,30,-8,45,64]
];
ways.forEach(element=>{
    if(document.getElementById(`subBox${element[0]}`).innerText=="X"&&document.getElementById(`subBox${element[1]}`).innerText=="X"&&document.getElementById(`subBox${element[2]}`).innerText=="X")
    {
    document.querySelector("#status").innerText=`X has WON`;
    win.play();
    winningLine.style.height=`${element[6]}vmin`;
    winningLine.style.transform=`translate(${element[3]}vmin,${element[4]}vmin) rotate(${element[5]}deg)`;
}
if(document.getElementById(`subBox${element[0]}`).innerText=="O"&&document.getElementById(`subBox${element[1]}`).innerText=="O"&&document.getElementById(`subBox${element[2]}`).innerText=="O")
{
    document.querySelector("#status").innerText=`O has WON`;
    win.play();
    winningLine.style.height=`${element[6]}vmin`;
    winningLine.style.transform=`translate(${element[3]}vmin,${element[4]}vmin) rotate(${element[5]}deg)`;
    }
});
}
//main code which executes when the boxes are clicked
let subBoxes=document.getElementsByClassName("subBoxes"),Turn="X";
Array.from(subBoxes).forEach(element=>{
    element.addEventListener("click",()=>{
        element.innerText=Turn;
        trig.play();
        Turn=(Turn=="O"?"X":"O");
        document.getElementById("status").innerText=`Turn for ${Turn}`;
        checkWin();
    });
});


//reset the game
document.querySelector("#reset").addEventListener("click",()=>{
    Turn="X";
    document.getElementById("status").innerText=`Turn for ${Turn}`;
    Array.from(subBoxes).forEach(element=>{element.innerText=""});
    winningLine.style="height: 0vmin;  transform: translate(0vmin,0vmin) rotate(0deg);";
})

