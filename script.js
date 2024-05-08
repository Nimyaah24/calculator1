


// display the number in text box
function displayNumber(num){
    result.value += num //eg-234577
}

// clear the textbox
function clearBox(){
    result.value=""
}

// evaluate method

    // // method-1
    // exp = result.value //5*5
    // output = eval(exp)
    // result.value = output

    // // method2
   

function  equal(){

    //eval is a predefined method to evaluate our expression
      try{
        result.value=eval(result.value)
      }
      catch(err){
        result.value="err"
    
        setTimeout(() =>
           {result.value=''
          
        }, 1000);
    
    
      }
    
    }


// remove last item from txtbox
function removelastvalue(){
    result.value=result.value.slice(0,-1) 
    //slice is an array method to dlt items
    // slice(starting index, ending index)
}