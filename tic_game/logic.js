window.addEventListener('load',bindEvents);
var count=0;
var arr=[];
var win=0;
var moves=0;
function bindEvents(){
    // document.querySelector('#b1'); // reading a button by # id
    // addEventListener --> attaching event
    // event name and function name to be call
    document.querySelector('#b0').addEventListener('click',sayWelcome);
    document.querySelector('#b1').addEventListener('click',sayWelcome);
    document.querySelector('#b2').addEventListener('click',sayWelcome);
    document.querySelector('#b3').addEventListener('click',sayWelcome);
    document.querySelector('#b4').addEventListener('click',sayWelcome);
    document.querySelector('#b5').addEventListener('click',sayWelcome);
    document.querySelector('#b6').addEventListener('click',sayWelcome);
    document.querySelector('#b7').addEventListener('click',sayWelcome);
    document.querySelector('#b8').addEventListener('click',sayWelcome);
}

function sayWelcome(e)
{ 
    
    if(count==0){
    this.innerHTML="X";
    count++;
    var mn=this.id;
    
    var m=mn.charAt(1);
    m=parseInt(m);
    
    arr[m]='X';
    moves++;
    
    }
    else
    {
        this.innerHTML="O";
         count--;
         
         var mn=this.id;
         var m=mn.charAt(1);
         m=parseInt(m);
        
       
        arr[m]='O';
        moves++;
        ;
    }

    rowcheck();
    colcheck();
    dicheck();
    if(win==0&&moves==9)
    {
        document.write("match draw");
    }
}
 function rowcheck() 
{
    if (arr[0] ===arr[1] && 
        arr[1] ===arr[2] &&  
        arr[0] != ""&&arr[0]) 
       {
        document.write("<h1>player "+arr[0]+" has won</h1>");
        win=1;
    }
    if (arr[3] == arr[4] && 
        arr[4] == arr[5]&& 
         arr[3] != ''&&arr[3]) 
         {
         document.write("<h1>player "+arr[3]+" has won</h1>");
        win=1;}
    if (arr[6] == arr[7] && 
            arr[7] == arr[8]&& 
             arr[6] != ''&&arr[6]) 
             {
                document.write("<h1>player "+arr[6]+" has won</h1>");
            win=1;}
}

function colcheck() 
{
    if (arr[0] ===arr[3] && 
        arr[3] ===arr[6] &&  
        arr[0] != ""&&arr[0]) 
       {
        document.write("<h1>player "+arr[0]+" has won</h1>");
        win=1;
    }
    if (arr[1] == arr[4] && 
        arr[4] == arr[7]&& 
         arr[1] != ''&&arr[1]) 
         {
         document.write("<h1>player "+arr[1]+" has won</h1>");
        win=1;}
    if (arr[2] == arr[5] && 
            arr[5] == arr[8]&& 
             arr[2] != ''&&arr[2]) 
             {
                document.write("<h1>player "+arr[2]+" has won</h1>");
            win=1;}
}

function dicheck() 
{
    if (arr[0] ===arr[4] && 
        arr[4] ===arr[8] &&  
        arr[0] != ""&&arr[0]) 
       {
        document.write("<h1>player "+arr[0]+" has won</h1>");
        win=1;
    }
    if (arr[2] == arr[4] && 
        arr[4] == arr[6]&& 
         arr[2] != ''&&arr[2]) 
         {
         document.write("<h1>player "+arr[2]+" has won</h1>");win=1;
        }
    
}

