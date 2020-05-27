$(function(){ 
    var url = $(location).attr('href');
    var id = Mina.parseSearch(url, "id");

    $("#game").load("Game/"+id+"/index.html");
    console.log(id);
});