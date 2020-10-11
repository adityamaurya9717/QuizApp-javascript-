var answerId=["#ans1","#ans2","#ans3","#ans4"]

var questions=["what is your favourite color?","what is your favorite city?","which is your favorite book?"]
var options=[["red","blue","green","red"],["India","U.S.A","U.K","Japan"],["A","b","c","D"]]
var totalQuestions=questions.length;

var currentQuestion=0
setInterval(()=>{
    var d=new Date()
    var h=d.getHours()
    var m=d.getMinutes()
    var s=d.getSeconds()
    $('#time').text(` ${h} :${m}: ${s}`)
},1000)

var youranswer=[]
function my(current){
$(document).ready(()=>{
 $('#question').text("Q "+current+") "+questions[current])
 $("#Qnum").text("Q) "+current)
 for(i=0;i<4;i++){
     $(answerId[i]).text(options[current][i])
 }

 currentQuestion++
 
   
})
}
my(currentQuestion)

//button
$(document).ready(()=>{
   $('#next').click(()=>{
               
   var ans= $('input[type=radio]:checked').attr("id")
   youranswer.push(ans)
   console.log(youranswer)
     $('input[type=radio]').prop("checked",false)
     if(currentQuestion>=totalQuestions){
        $("#next").prop("disabled",true)
        $("#next").text("submit")
    }
    else{
    
       my(currentQuestion)
    }
   })
})
