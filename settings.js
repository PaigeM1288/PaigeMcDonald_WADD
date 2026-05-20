function storage(){
    var playername = document.getElementById("player").value;

    localStorage.getItem(playername);
}