//Questions
var Questions=[
    {
    question:"What is your favourite color?",
    options:["Red","Blue","Green","White"],
    correct:0},

    {question:"What is your favorite city?",
    options:["India","U.S.A","U.K","Japan"],
    correct:1},

    {
      question: "Which is your favorite book?",
      options:["Jungle Book","HarryPotter","Invisible Man","TOM and Jerry"],
      correct:3
    },
    {
        question: "Which is your favorite hero?",
        options:["James Bond","Iron man","Bat Man","TOM and Jerry"],
        correct:3
      },
    {
        question:"Which is your favorite Cartoon?",
        options:["Tom And Jerry","Doremon","Ben 10","Micky Mouse"],
        correct:1

      }

 ];
var username="";
 while(1){
  username=prompt("Enter Your Name?");
  if (username!="" && username!=null){
      break;
     }
   }
 
 //for storing prvious question so that to change background-color;


 var totalQuestions=Questions.length;
var currentQuestion=0
var preQues=currentQuestion;

var answerId=["#ans1","#ans2","#ans3","#ans4"]
var myanswer=[]
for(var i=0;i<totalQuestions;i++){
    myanswer.push(undefined)
}
console.log(myanswer)

 function my(current){
    $(document).ready(()=>{
      if(currentQuestion<=0){
        $('#pre').prop("disabled",true) }
        else {$('#pre').prop("disabled",false);}
     //for question to display 
     $('#question').text("Q "+current+") "+Questions[current].question)
     //for options to question
     for(i=0;i<Questions[i].options.length;i++){
         $(answerId[i]).text(Questions[current].options[i])
     }

      })
}
my(currentQuestion)

//next button
$(document).ready(()=>{
    $('#next').click(()=>{
    var ans= $('input[type=radio]:checked').attr("id");
    myanswer[currentQuestion]=parseInt(ans);
    console.log(myanswer);
    currentQuestion++;
    //changeing background-color of side question circle
    $('#Q'+preQues).css('background-color','blue')
    preQues=currentQuestion;
    $('#Q'+currentQuestion).css('background-color','red')

    if(currentQuestion==totalQuestions-1){
        $("#next").text("submit")
       }
       else{
        $("#next").text("Next")

       }
     
     //
      $('input[type=radio]').prop("checked",false);
      if(currentQuestion==totalQuestions){
         $("#next").prop("disabled",true)
         
         $('#pre').prop("disabled",true)
         yourscore()
          }
     else{
          my(currentQuestion);
         }
    })
 })

 //previous button
 $(document).ready(()=>{
     $('#pre').click(()=>{
        $('#Q'+currentQuestion).css('background-color','blue')
         if(currentQuestion!=totalQuestions){
             $("#next").text("Next")
         } 
       
        
         currentQuestion--
         preQues=currentQuestion
        $('#Q'+currentQuestion).css('background-color','red')

         my(currentQuestion);
          })
 })
 //your score function
  function yourscore(){
      var score=0;
      for(var i=0;i<totalQuestions;i++){
          if(myanswer[i]==Questions[i].correct){
              score=score+1 ;
             dynamicElement(Questions[i].question,true)

            }
            else{
             dynamicElement(Questions[i].question,false)

            }
      }

      console.log(`${username} correct answer ${score}`)
      $("#container").css("display","none") //for hide question container
      $("#result").css("display","inline")//for show result section
      $('#score').text(score)
       }

//Dynamically  for Result
 function dynamicElement(d,b){
     var html=document.createElement('p');
     var data=document.createTextNode(d);
     html.appendChild(data)
     var parent=document.getElementById('result');
     parent.appendChild(html)
     if(b){
         html.classList.add("green")
     }
     else{
         html.classList.add("red")
     }
 }

 //questionbar



 