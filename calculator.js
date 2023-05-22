var button=document.getElementsByClassName('btn');
var display=document.getElementById("result-box");
var operand1=0;
var operand2=null;
var operator=null;
for (var i=0; i< button.length;i++){
    button[i].addEventListener('click',function(){
        var value=this.getAttribute("data-value");
        if(value=="all-clear"){
            display.innerText=null;
        }
        else if(value=="+"||value=="-"||value=="*"||value=="/"||value=="%"){
            operator=value;
            operand1=parseFloat(display.innerText);
            display.innerText=null;
        }
        else if(value=="="){
            if(operator!=null){
                operand2=parseFloat(display.innerText);
                display.innerText=eval(operand1+""+operator+""+operand2);
            }
            else{
                display.innerText="error";
            }

        }
        else if(value=="clear-no"){
            display.innerText=eval(parseFloat(display.innerText)%10);
        }
        else if(value=="[]")
        {

            display.innerText=display.innerText.slice(0, - 1);
        
           
        }
        else if(value=="."){
            if(display.innerText.length &&!display.innerText.includes(".")){
                display.innerText+=value;
            }
        }
            else{
            display.innerText+=value;

        }

        

    });

}