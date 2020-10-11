
function questionbar(){
    for(var i=0;i<totalQuestions;i++){
     var html=document.createElement('div');
     var data=document.createTextNode(i);
     html.appendChild(data);
     var myid="Q"+i
     html.setAttribute("id",myid)
     html.setAttribute("onclick","quesChange(this)")
     html.setAttribute("data-num",i)

     var p=document.getElementById('questionbar');
     p.appendChild(html);
     html.classList.add('com')

    }
    $('#Q'+preQues).css('background-color','red')
   
}
questionbar();
function quesChange(id){
    var qnum=parseInt(id.dataset.num)


    console.log(id.id);
    console.log(id.dataset.num)
    if(qnum==totalQuestions-1){
        $("#next").text("Submit")
    }
    else{
        $("#next").text("Next")

    }
    $('#Q'+preQues).css('background-color','blue')
    preQues=qnum

    $('#Q'+qnum).css('background-color','red')
    currentQuestion=qnum;
    my(qnum)

}