
var operazione;

var booleanA = true;
var booleanS = true;
var booleanM = true;
var booleanD = true;

const element = document.getElementById("load");

let timeout;

function nascondi() {
    
    element.setAttribute("hidden", "hidden");
}

var addizioneButton = document.getElementById("bottoneAdd");
addizioneButton.addEventListener("click", function ()
{
    if (booleanA == true)
    {
        operazione = "+";
        
    }
    console.log(booleanA);
    if (booleanA == false)
    {
        let hidden = element.getAttribute("hidden");
        if (hidden) {
            element.removeAttribute("hidden");
            addizioneButton.disabled = true;
            timeout = setTimeout(function () { nascondi() }, 3000);
        }
        else {
            nascondi();
        }
    }
});

var sottrazioneButton = document.getElementById("bottoneSott");
sottrazioneButton.addEventListener("click", function ()
{
    if (booleanS == true)
    {
        operazione = "-";
        
      
    }
    console.log(booleanS);
    if (booleanS == false)
    {
        let hidden = element.getAttribute("hidden");
        if (hidden) {
            element.removeAttribute("hidden");
            sottrazioneButton.disabled = true;
            timeout = setTimeout(function () { nascondi() }, 3000);
        }
        else {
            nascondi();
        }
    }
});

var moltiplicazioneButton = document.getElementById("bottoneMolt");
moltiplicazioneButton.addEventListener("click", function ()
{
    if (booleanM == true)
    {
        operazione = "*";
        
    }
    console.log(booleanM);
    if (booleanM == false)
    {
        let hidden = element.getAttribute("hidden");
        if (hidden) {
            element.removeAttribute("hidden");
            moltiplicazioneButton.disabled = true;
            timeout = setTimeout(function () { nascondi() }, 3000);
        }
        else {
            nascondi();
        }
    }
});

var divisioneButton = document.getElementById("bottoneDiv");
divisioneButton.addEventListener("click", function ()
{
    if (booleanD == true)
    {
        operazione = "/";
       
    }
    console.log(booleanD);
    if (booleanD == false)
    {
        let hidden = element.getAttribute("hidden");
        if (hidden) {
            element.removeAttribute("hidden");
            divisioneButton.disabled = true;
            timeout = setTimeout(function () { nascondi() }, 3000);
        }
        else {
            nascondi();
        }
    }
});

var risultatoButton = document.getElementById("bottoneRis");
risultatoButton.addEventListener("click", function ()
{
    var numA = parseInt(document.getElementById("numA").value);
    var numB = parseInt(document.getElementById("numB").value);

    if (operazione == "+")
    {
        var risultato = numA + numB;
        booleanS = false;
        booleanM = false;
        booleanD = false;
    }
    if (operazione == "-")
    {
        var risultato = numA - numB;
        booleanA = false;
        booleanM = false;
        booleanD = false;
    }
    if (operazione == "*")
    {
        var risultato = numA * numB;
        booleanS = false;
        booleanA = false;
        booleanD = false;
    }
    if (operazione == "/")
    {
        var risultato = numA / numB;
        booleanS = false;
        booleanM = false;
        booleanA = false;
    }
    document.getElementById("risultato").innerHTML = risultato;
    document.getElementById("risultato").value = "";
});