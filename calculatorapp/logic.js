window.addEventListener('load',bindEvents);
function bindEvents(){
    // document.querySelector('#b1'); // reading a button by # id
    // addEventListener --> attaching event
    // event name and function name to be call
   
    document.querySelector('#b1').addEventListener('click',sayWelcome);
    document.querySelector('#b2').addEventListener('click',sayWelcome);
    document.querySelector('#b3').addEventListener('click',sayWelcome);
    document.querySelector('#b4').addEventListener('click',sayWelcome);
    document.querySelector('#b5').addEventListener('click',sayWelcome);
    document.querySelector('#b6').addEventListener('click',sayWelcome);
    document.querySelector('#b7').addEventListener('click',sayWelcome);
    document.querySelector('#b8').addEventListener('click',sayWelcome);
    document.querySelector('#b9').addEventListener('click',sayWelcome);
    document.querySelector('#b10').addEventListener('click',sayWelcome);
    document.querySelector('#b11').addEventListener('click',sayWelcome);
    document.querySelector('#b12').addEventListener('click',sayWelcome);
    document.querySelector('#b13').addEventListener('click',sayWelcome);
    document.querySelector('#b14').addEventListener('click',sayWelcome);
    document.querySelector('#b15').addEventListener('click',equal);
    document.querySelector('#b16').addEventListener('click',clear);
    document.querySelector('#b17').addEventListener('click',allclear);

}
function sayWelcome(e)
{
    document.getElementById('t1').value +=this.value;
}
function equal()
{
    var num= document.getElementById('t1').value;
    var res=eval(num);
    document.getElementById('t1').value=res;
}
function clear()
{
    document.getElementById('t1').value=document.getElementById('t1').value.slice(0,-1);
   
}
function allclear()
{
    document.getElementById('t1').value="";
}