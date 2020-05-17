$(function(){ 
    var html_folder_path = "html/",
        nav_bar_folder_path = "html/nav-bar/",
        banner_folder_path = "html/banner/",
        footer_folder_path = "html/footer/",
        nav_bar_path = nav_bar_folder_path + "first-nav",
        banner_path = banner_folder_path + "first-banner";
        body0_path = html_folder_path + "news-default";

    $("head").load("head.html");
    //$("header").load("header.html");
    $("#nav-bar").load(nav_bar_path + ".html");
    //$("#banner").load(banner_path + ".html");
});