$(function(){ 
    var url = $(location).attr('href');
    var id = Mina.parseSearch(url, "id");

    $("#game").load("html/Game/"+id+".html");
    console.log(id);
});