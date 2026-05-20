function changeCharacter(character){

    switch(character){
        case "bbg":
            document.getElementById("img").src="images/bbg.png";
        break;
        case "bblg":
            document.getElementById("img").src="images/bblg.png";
        break;
        case "bblng":
            document.getElementById("img").src= "images/bblng.png";
        break;
        case "bbng":
            document.getElementById("img").src="images/bbng.png";
        break;
        case "brbg":
            document.getElementById("img").src="images/brbg.png";
        break;
        case "brblg":
            document.getElementById("img").src="images/brblg.png";
        break;
        case "brblng":
            document.getElementById("img").src="images/brblng.png";
        break;
        case "brbng":
            document.getElementById("img").src="images/brbng.png";
        break;
        case "brtg":
            document.getElementById("img").src="images/brtg.png";
        break;
        case "brtng":
            document.getElementById("img").src="images/brtng.png";
        break;
        case "brwg":
            document.getElementById("img").src="images/brwg.png";
        break;
        case "brwng":
            document.getElementById("img").src="images/brwng.png";
        break;
        case "btg":
            document.getElementById("img").src="images/btg.png";
        break;
        case "btng":
            document.getElementById("img").src="images/btng.png";
        break;
        case "bwg":
            document.getElementById("img").src="images/bwg.png";
        break;
        case "bwng":
            document.getElementById("img").src="images/bwng.png";
        break;
        case "cbg":
            document.getElementById("img").src="images/cbg.png";
        break;
        case "cblg":
            document.getElementById("img").src="images/cblg.png";
        break;
        case "cblng":
            document.getElementById("img").src="images/cblng.png";
        break;
        case "cbng":
            document.getElementById("img").src="images/cbng.png";
        break;
        case "ctg":
            document.getElementById("img").src="images/ctg.png";
        break;
        case "ctng":
            document.getElementById("img").src="images/ctng.png";
        break;
        case "cwg":
            document.getElementById("img").src="images/cwg.png";
        break;
        case "cwng":
            document.getElementById("img").src="images/cwng.png";
        break;
        case "gbg":
            document.getElementById("img").src="images/gbg.png";
        break;
        case "gblg":
            document.getElementById("img").src="images/gblg.png";
        break;
        case "gblng":
            document.getElementById("img").src="images/gblng.png";
        break;
        case "gbng":
            document.getElementById("img").src="images/gbng.png";
        break;
        case "gtg":
            document.getElementById("img").src="images/gtg.png";
        break;
        case "gtng":
            document.getElementById("img").src="images/gtng.png";
        break;
        case "gwg":
            document.getElementById("img").src="images/gwg.png";
        break;
        case "gwng":
            document.getElementById("img").src="images/gwng.png";
        break;

    }

}

     function save(){
    var myForm = document.getElementById("theForm");
        function noReset(event){
            event.preventDefault();
        }
        myForm.addEventListener('submit', noReset);
        
    var pName = document.getElementById("typed").value;
    var chr = document.querySelectorAll("img").alt;
    localStorage.setItem(pName, chr);
    }


 
