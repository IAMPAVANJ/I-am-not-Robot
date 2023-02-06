var ri = new Array();
ri[0] = "./images/dragon.JPG";
ri[1] = "./images/horse.JPG";
ri[2] = "./images/monkey.JPG";
ri[3] = "./images/shoe.JPG";
ri[4] = "./images/spiderman.JPG";
ri[5] = "./images/black Cat.JPG";
ri[6] = "./images/butterFly.JPG";
ri[7] = "./images/Eagle.JPG";
ri[8] = "./images/wolfeyes.JPG";


var n1=Math.floor(Math.random()*ri.length)
var n2=Math.floor(Math.random()*ri.length)
var n3=Math.floor(Math.random()*ri.length)
var n4=Math.floor(Math.random()*ri.length)
var n5=Math.floor(Math.random()*ri.length)
var n6=Math.floor(Math.random()*ri.length)
var n7=Math.floor(Math.random()*ri.length)
var n8=Math.floor(Math.random()*ri.length)
var n9=Math.floor(Math.random()*ri.length)
var j = Math.floor(Math.random()*ri.length)

function getRandomImage(){
    document.getElementById('r1').innerHTML = '<img src="'+ri[n1]+'">'
    document.getElementById('r2').innerHTML = '<img src="'+ri[n2]+'">'
    document.getElementById('r3').innerHTML = '<img src="'+ri[n3]+'">'
    document.getElementById('r4').innerHTML = '<img src="'+ri[n4]+'">'
    document.getElementById('r5').innerHTML = '<img src="'+ri[n5]+'">'
    document.getElementById('r6').innerHTML = '<img src="'+ri[n6]+'">'
    document.getElementById('r7').innerHTML = '<img src="'+ri[n7]+'">'
    document.getElementById('r8').innerHTML = '<img src="'+ri[n8]+'">'
    document.getElementById('r9').innerHTML = '<img src="'+ri[n9]+'">'
    document.getElementById('s0').innerHTML = '<img src="'+ri[j]+'">'
}
document.getElementById('t1').setAttribute()
function check(){
    
    x =  document.getElementById('t1').value;
    var c = 0;
    if(ri[n1]==ri[j])
    {
        c++;
    }
    if(ri[n2]==ri[j])
    {
        c++;
    }
    if(ri[n3]==ri[j])
    {
        c++;
    }
    if(ri[n4]==ri[j])
    {
        c++;
    }
    if(ri[n5]==ri[j])
    {
        c++;
    }
    if(ri[n6]==ri[j])
    {
        c++;
    }
    if(ri[n7]==ri[j])
    {
        c++;
    }
    if(ri[n8]==ri[j])
    {
        c++;
    }
    if(ri[n9]==ri[j])
    {
        c++;
    }
    if(x==c){
        alert("Verifiction succeful")
        window.location.reload()
        
    }else{
        alert("verification Not succesfull")
        document.getElementById('instruction').innerHTML = "Kindly Count Again"
    }

}

