const MaxValue = document.querySelector("#max-input input")
const selectValue = document.querySelector("#select-input input")
const submit = document.querySelector("#select-input button")
const gameInfo = document.querySelector("#info")
// console.log(MaxValue)
// console.log(selectValue)
// console.log(submit)
const successCase = document.querySelector("#success")
const failCase = document.querySelector("#fail")
console.dir(successCase)


MaxValue.onkeydown = function (e) {
    
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

selectValue.onkeydown = function (e) {
    
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58) 
      || e.keyCode == 8)) {
        return false;
    }
}

function onsubmit(e){
    e.preventDefault()
    
    const maxNum = MaxValue.value;
    const selectNum = selectValue.value;
    
    const random_value = Math.ceil(Math.random() * maxNum)
    
    console.log(random_value)
    if (maxNum.length != 0 && selectNum.length){
        gameInfo.innerHTML = `You chose ${selectNum}, the machine chose: ${random_value}`
        
        if (random_value == selectNum){
            successCase.style.display="";
            failCase.style.display="none";
        }
        else{
            successCase.style.display="none";
            failCase.style.display="";
        }
    }
    else{
        
        gameInfo.innerHTML =""
        
        failCase.style.display="none";
        successCase.style.display="none";
        if (maxNum.length == 0 && selectNum.length == 0)
            alert("둘다 설정하시오")
        else if (maxNum.length == 0)
            alert("max 값을 설정해^^")
        else
            alert("너의 값을 설정해^^")
    }
    
    
}
console.dir(selectValue)
submit.addEventListener("click", onsubmit)
// selectValue.addEventListener("onkeydown",onkeyDown)