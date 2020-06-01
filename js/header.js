$(function(){ 
    var navbar_path = "nav-bar/";

    $("head").load("../head.html");
    //$("header").load("header.html");
    //$("#nav-bar").load(nav_bar_path + ".html");
    //$("#banner").load(banner_path + ".html");
   // console.log($("html").attr("lang").val());
    
    if(Mina.getLang() == 'tw') {
        $("#nav-bar").load(Mina.html_folder_path_tw + navbar_path + "first-nav.html");
    }
    else if(Mina.getLang() == 'en') {
        $("#nav-bar").load(Mina.html_folder_path_en + navbar_path + "first-nav.html");
    }
});