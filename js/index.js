$(function(){ 
    

    if(Mina.getLang() == 'tw') {
        $("#body0").load(Mina.html_folder_path_tw + "bucket-0.html");
    }
    else if(Mina.getLang() == 'en') {
        $("#body0").load(Mina.html_folder_path_en + "bucket-0.html");
    }
   // $("#body1").load();
    //$("#body2").load();
});