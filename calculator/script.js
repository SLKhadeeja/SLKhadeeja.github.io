function disp(val){
    document.getElementById("view").value+=val;
}

function solu(){
    let x = document.getElementById("view").value;
    let y = eval(x);
    document.getElementById("view").value = y;
}

function cl(){
    document.getElementById("view").value = "";
}