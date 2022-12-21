const answer = document.getElementById('answer')
const buttons = document.querySelectorAll('button')


for(const item of buttons){
    item.addEventListener('click',(event)=>{
        let buttonText = event.target.innerText;
        if(buttonText == "X"){
            buttonText = "*";
            answer.value += buttonText;
        }else if(buttonText == "C"){
            answer.value = ""
        }else if(buttonText == "="){
            answer.value = getAnswer();
            //calculate the result based on expression on answer.value
        }else{
            answer.value += buttonText
        }
    })
}



window.addEventListener("keydown",(event)=>{
    //key from 0 - 9
    let key = event.key;
    if(key == "(" || key == ")" || key == "%" || key == "." || key == "/"
        || key == "+" || key == "-" || key == "*")
        answer.value += key
    else if(key == "X" || key == "X")
        answer.value += "*"
    else if(key == "c" || key == "C")
        answer.value = ""
    else if(key == "Backspace")
        answer.value = answer.value.slice(0,-1)
    else{
        for(let i=0;i<=9;i++)
            if(key == i) answer.value += key;
    }

    if(key == "=" || key == "Enter")
        answer.value = getAnswer();
    

    console.log(event.key)
    
    
})



function getAnswer(){
    try{
        return eval(answer.value);
    }catch{
        alert("Please input correct expression!");
        return "";
    }

}
