Mina = {
    html_folder_path: "html/",
    html_folder_path_tw: "../html/tw/",
    html_folder_path_en: "../html/en/",
    parseUrl: function(url) {
        var parser = document.createElement('a');
        parser.href = url;
        console.log(parser);
        
        return parser;		
    },
    parseSearch: function(url, token) {
        var index = url.search(token+"=");
        if(index == -1) return index;
        return url.slice(index + (token+"=").length, url.length);		
    },
    getLang: function(){
       return $("html").attr("lang");
    }
}