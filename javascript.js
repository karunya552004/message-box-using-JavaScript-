function decline(){
    alert("Question Declined");
}

let questions = [
   "what is your name",
   "do you have pet",
   "are you okay",
   "what is your age",
   "where do you live",
   "do you know any languages",
   "about current scenario",
   "climatic changes",
   "today news",
   "current status of India"
]

function accept(){
   let question = document.querySelector("#in").value;
   question = question.toLowerCase();
   if(questions.includes(question)) window.alert("Your question accepted ");
   else window.alert("Your question is rejected Chief");
}