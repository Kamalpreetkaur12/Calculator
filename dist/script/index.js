const result=document.getElementById("inputext");

const calculate=(num)=>{
  result.value+=num;

}

const Result=()=>{
    try {
        
        result.value=eval(result.value)
    } catch (error) {
        alert("Enter the valid result");
    }
}


function clr() {
    result.value="";
}

function del() {
    result.value=result.value.slice(0,-1)
}