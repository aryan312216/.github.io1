let counTWord = 0;
let chongCheck = false;
let r = 0;


let word = [];
let wordCheck = []



let matchedArray = [];
let temp = 3;



function printData() {
    console.log(matchedArray);
}

function moveClick(fromtext, totext) {
    var lengthTile = fromtext.value.length;
    if (lengthTile == 1) {
        document.getElementById(totext).focus();
    }
}

function handleBackspaceClick() {
    console.log("backspace function called");
    let idx = 0;
    for (idx = 0; idx < 4; idx++) {
      if (document.getElementById(`${String(r + idx)}`).value == "") {
        console.log(idx);
        break;
      }
    }
    if (idx != 0) {
      document.getElementById(`${String(r + idx - 1)}`).focus();
    }
  }
  

function congratsMessage() {
    document.getElementById("hintButton").innerHTML = "CONFRATULATIONS YOU WON!!"
    
    document.getElementById("hintButton").className = "container py-2 has-background-success has-text-dark has-text-centered"
    setTimeout(() => {location.reload()}, "1000")
}

document.onkeydown = function(evt) {
    var key = evt ? (evt.which ? evt.which : evt.key) : event.key;
    if (key == 13) {
        rows()
        rowCheck()
    }
    if (key == 8 || key == 46) {
        handleBackspaceClick();
    }
};


function rowCheck() {
    if (document.getElementById(`${String(temp)}`).value == "")
        alert("Please enter all the letters in a row")
    else {
        console.log("else part");
        r += 4;
        temp += 4;
        checkMatching(wordCheck, word);
        count = 0;
        printData();
    }
}
function checkMatching(wordCheck, word) {
    counTWord = 0;
    for (let m = 0; m < 4; m++) {
        let yellowCheck = false;
        let greenCheck = false;
        if (wordCheck[m] == word[m]) {
            counTWord += 1;
           
            greenCheck = true;
            document.getElementById(`${String(r+m-4)}`).className = "input has-background-success is-dark"
            if (counTWord == 4) {
                congratsMessage();
            }
        } else {

            for (let n = 0; n < 4; n++) {
                if (wordCheck[n] == word[m]) {
                    document.getElementById(`${String(r+m-4)}`).className = "input has-background-warning is-dark"
                    
                    yellowCheck = true;
                }
            }

            if (yellowCheck == false && greenCheck==false) {
                document.getElementById(`${String(r+m-4)}`).className = "input has-background-grey is-dark"

            }
        }
    }
}

function rows() {
    wordCheck = []
   
    for (let m = r; m < r + 4; m++) {
        wordCheck.push(document.getElementById(`${String(m)}`).value);
    }
    wordCheck = [...wordCheck].map(char => char.toUpperCase()).join('');

    console.log(wordCheck);
}
document.getElementById("StartButton").onclick = function() { startOver() };

function startOver() {
    for (let i = 0; i < 16; i++) {
        document.getElementById(`${String(i)}`).value = "";
        document.getElementById(`${String(i)}`).className= "input has-background-white is-dark";
    }
    r = 0;
    temp = 3;
    counTWord = 0;

}

let countValue1 = 0
let countValue2 = 0
let countValue3 = 0

document.getElementById("ChangeMode").onclick = function() {
    countValue1 += 1
    if (countValue1 % 2 == 1) {
        document.getElementById("htmlTag").className = "has-background-dark"
        document.getElementById("Bar").className = "navbar py-2 px-2 is-dark has-text-light"
        document.getElementById("footer").className = "footer py-2 has-background-dark has-text-data"
        document.getElementById("wordle").className = "navbar-item center has-text-data"
        document.getElementById("StartButton").className = "button is-data"
        document.getElementById("Section").className = "level-item  has-text-data "


        for (let m = 0; m< 16; m++) {
            let cell = String(m)
            document.getElementById(`${cell}`).className = "input has-background-dark is-data has-text-white"
        }
    }
    if (countValue1 % 2 == 0) {
        document.getElementById("htmlTag").className = "has-background-white"
        document.getElementById("Bar").className = "navbar py-2 px-2 is-light has-text-dark"
        document.getElementById("wordle").className = "navbar-item center has-text-dark"
        document.getElementById("footer").className = "footer py-2 has-background-light has-text-dark"
        document.getElementById("submit-button").className = "button is-primary"
        document.getElementById("Section").className = "level-item  is-dark "
        for (let m = 0; m < 16; m++) {
            let cell = String(m)
            document.getElementById(`${cell}`).className = "input has-background-white is-dark has-text-dark"
        }
    }
}

document.getElementById("data").onclick = function() {
    countValue2 += 1
    if (countValue2 % 2 == 0) {
       
        document.getElementById("Section").innerHTML = " "
        document.getElementById("ID").className = " "
        document.getElementById("leftTable").className = "is-dark has-text-primary px-6"
    } else {
        // add data
        document.getElementById("ID").className = "level"
        document.getElementById("leftTable").className = "is-dark px-6"
        if (countValue1 % 2 == 1 && countValue1 != 0)
            document.getElementById("Section").className = "level-item has-text-data is-dark  "
        else
            document.getElementById("Section").className = "level-item has-text-dark is-dark  "
        document.getElementById("Section").innerHTML = `
        <div class='container'>
        <div class='columns is-mobile is-centered'>
            <div class='column is-5'>
                <div class='list is-primary'>
                    <ul>
                        <div class='list-item''>
                            <li><b>
                                How to Play</b>
                            </li>
                        </div>
        
                        <div class='list-item'>
                            <li>
                                Start typing. The letters will appear in the boxes
                            </li>
                        </div>
        
                        <div class='list-item'>
                            <li>
                                Remove letters with Backspace
                            </li>
                        </div>
        
                        <div class='list-item'>
                            <li>
                                Hit Enter/Return to submit an answer
                            </li>
                        </div>
        
                        <div class='list-item'>
                            <li>
                                Letters with green background are in right spot
                            </li>
                        </div>
        
                        <div class='list-item'>
                            <li>
                                Letters with yellow background exist in the word but are in the wrong spots
                            </li>
                        </div>
        
                        <div class='list-item'>
                            <li>
                                Letters with gray background do not exist in the word
                            </li>
                        </div>
        
                        <div class='list-item'>
                            <li>
                                If you need a hint, click &#63; icon
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        `
    }
}

async function getAPI() {
    const res = await fetch("https://api.masoudkf.com/v1/wordle", {
        headers: {
            "x-api-key": "sw0Tr2othT1AyTQtNDUE06LqMckbTiKWaVYhuirv",
        },
    });
    const data = await res.json();
    const indexData = Math.floor(Math.random() * data.dictionary.length);
    const dataObj = {
        dictionary: data.dictionary,
        secretWord: data.dictionary[indexData].word,
        hintD: data.dictionary[indexData].hint,
    }
    word = dataObj.secretWord.split("")
    word= [...word].map(char => char.toUpperCase()).join('');

    hint = dataObj.hintD
    console.log(word)
    console.log(hint)


    document.getElementById("hint").onclick = function() {
        countValue3++
        if (countValue3 % 2 == 1) {
            document.getElementById("hintButton").innerHTML = hint
            document.getElementById("hintButton").className = "container py-2 has-background-warning has-text-dark has-text-centered"
        } else {
            document.getElementById("hintButton").innerHTML = ""
            document.getElementById("hintButton").className = ""

        }
    }
}
function looseMessage(){
    if (temp == 19){
        alert(`You have lost the game ${word.join("")}`);
        startOver();
    }
}

getAPI()
looseMessage()