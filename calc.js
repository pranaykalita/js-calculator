function clacfunc(num){
    var s = document.getElementById("output").value;
    var chk = s.length

   console.log(chk)
    if(chk > 11){
       document.getElementById("output").value = "Input too Long"
       
    }
    else{
        var out = document.getElementById("output").value+num;
        document.getElementById("output").value = out
    }

}
function calculate(){
    var res = document.getElementById("output").value;
    if(res){
        document.getElementById("output").value = eval(res)
        
    }
    
}
function clr(){
    document.getElementById("output").value = "";
}

function rmv(){
    bck = document.getElementById("output").value;
    document.getElementById("output").value = bck.substr(0,bck.length - 1 );
    
}

function sqrt(){
     sq = document.result.outloc.value;
     document.result.outloc.value = eval(sq*sq)
}
//for keyboard
