function validate(){
    var x = document.getElementById("val").value;
    console.log(x);
    if (x !== number){
        alert("enter a number");
        return false;
    }
}