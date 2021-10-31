const flashcards = document.getElementsByClassName("Flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');
let contentArray = [];

//construct the flashcard
//tells the flashcard what should be on it
function divMaker(text){
    let div = document.createElement("Div");
    let h2_question = document.createElement("H2");
    let h2_answer = document.createElement("H2");
    let clickMe = document.createElement("H2")

   

    div.className = 'flashcard';

    h2_question.setAttribute('style',"border-top: 1px solid red; padding: 15px; margin-top: 30px");
    //this is giving the question that was stored a tag of h2  
    h2_question.innerHTML = text.myQuestion

    h2_answer.setAttribute('style', "text-align:center; display:none; color: red")
    //this is giving the answer that was stored a tag of h2 
    h2_answer.innerHTML = text.myAnswer

    clickMe.setAttribute('style', "text-align:center; color: red")
    //
    clickMe.innerHTML = "Click to show answer"

    //setting up the order it should apear in the flashcard 
    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    div.appendChild(clickMe)

    //hides the answer untill the card is click 
    //then the answer will show 
    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none"){
            clickMe.style.display = "none"
            h2_answer.style.display = "block";
        }else{
            clickMe.style.display = "block"
            h2_answer.style.display = "none";
        }
    })

    flashcards.appendChild(div);
}

//make the flashcard when click on save 
function addFlashcard(){
    // storing the info of questions and answers in an object
   let flashcard_info = {
        'myQuestion' : question.value,
        'myAnswer' : answer.value
    }
    //place the object into an array 
    contentArray.push(flashcard_info);

    //display what you just enter by picking the
    //last object that was push to the array
    divMaker(contentArray[contentArray.length - 1]);
    //reset the text fields 
    question.value = ''
    answer.value = ''
}

//removes all the current flash cards you have up 
function delFlashcardBox(){
    flashcards.innerHTML = '';
    contentArray = [];
}

//when you click on new card the create falashcard box appears
function showCreateCardBox(){
    createBox.style.display = "block";
}

//when you click close the create flashcard box hides
function hideCreateBox(){
    createBox.style.display = "none";
}