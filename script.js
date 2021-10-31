const flashcards = document.getElementsByClassName("Flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');
let contentArray = []

contentArray.forEach(divMaker);
function divMaker(text){
    let div = document.createElement("Div");
    let h2_question = document.createElement("H2");
    let h2_answer = document.createElement("H2");

    div.className = 'flashcard';

    h2_question.setAttribute('style',"border-top: 1px solid red; padding: 15px; margin-top: 30px");

    h2_question.innerHTML = text.myQuestion

    h2_answer.setAttribute('style', "text-align:center; display:none; color: green")

    h2_answer.innerHTML = text.myAnswer

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none"){
            h2_answer.style.display = "block";
        }else{
            h2_answer.style.display = "none";
        }
    })

    flashcards.appendChild(div);
}


function addFlashcard(){
   let flashcard_info = {
        'myQuestion' : question.value,
        'myAnswer' : answer.value
    }

    contentArray.push(flashcard_info);

    divMaker(contentArray[contentArray.length - 1]);
    question.value = ''
    answer.value = ''
}

function delFlashcardBox(){
    localStorage.clear();
    flashcards.innerHTML =  '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}

function hideCreateBox(){
    createBox.style.display = "none";
}