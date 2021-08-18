function generatePin(){
    let getDisplayPin = document.getElementById('display-pin');
    let genPin = Math.round(Math.random()*100000);
    let pinStr = genPin + '';
    if(pinStr.length == 5){
      return  getDisplayPin.value = genPin;
    }
    else{
       return generatePin();
    }
    
}

document.getElementById('key-pad').addEventListener('click',function(e){
    let number = e.target.innerText;
    let getDisplay = document.getElementById('typed-numbers');
    if(!isNaN(number)){
        let previousNum = getDisplay.value;
        let newNum = previousNum + number;
        getDisplay.value = newNum;
    }
    else{
        if(number == 'C'){
            getDisplay.value = '';
        }
    }

});

function backSpace(){
    let getDisplayNum = document.getElementById('typed-numbers');
    let displayValue = getDisplayNum.value;
    let outPut =displayValue.substring(0, displayValue.length -1);
    getDisplayNum.value = outPut;
}

function verifyPin(){
    var generPin = document.getElementById('display-pin').value;
    let yourPin = document.getElementById('typed-numbers').value;
    if(generPin == yourPin){
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    }
    else{
        let getLeft = document.getElementById('try-left');
        let leftText = parseInt(getLeft.innerText);
        leftText--
        if(leftText >= 0){
            getLeft.innerText = leftText;
        }
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';       
    }
}
 