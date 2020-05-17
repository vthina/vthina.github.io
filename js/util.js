// Add to jQuery:
Mina = {
    html_folder_path: "html/",
    parseUrl: function(url) {
        var parser = document.createElement('a');
        parser.href = url;
        return parser;		
    },
    parseSearch: function(url, token) {
        var index = url.search(token+"=");
        if(index == -1) return index;
        return url.slice(index + (token+"=").length, url.length);		
    }
}