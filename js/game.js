$(function(){ 
    var url = $(location).attr('href');
    var id = Mina.parseSearch(url, "id");
    Mina.parseUrl(url);
    
    if(id != -1) $("#game").load("../html/Game/"+id+".html");
    console.log(url);
});