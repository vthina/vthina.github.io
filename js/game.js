$(function(){ 
    var url = $(location).attr('href');
    var id = Mina.parseSearch(url, "id");
    console.log(id);
});