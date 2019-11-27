var templateApi = "../../assets/json-template.json";

$.getJSON(templateApi, function(json) {
    var css_href = json.template.assets.css;
    var javascript_src = json.template.assets.javascript;
    var tsh_src = json.template.html.template_src;

    createAssets(css_href, 'link');
    getScript(tsh_src);
    createAssets(javascript_src, 'script');

});

function createAssets(url, element) {
    var elementNode = element;
    prop = document.createElement(element);

    if(elementNode == 'link') {

        prop = document.createElement(element);
        prop.rel = 'stylesheet';
        prop.href = url;
        document.head.appendChild(prop);

    } else if(elementNode == 'script') {

        element = document.createElement(element);
        prop.type = 'text/javascript';
        prop.src = url;
        document.body.appendChild(prop);

    }
}

var banner = document.getElementById('adoptimizeCreative');
function getScript(url) {
    $.getScript(url, function(){

        // create template with the 
        createTemplate(template(), banner)
     
     });
}

function createTemplate(src, append) {

    var tsh_height = 250; // mediavoice data
    var tsh_width = 300; // mediavoice data

    var element = document.createElement('div');
    element.className = 'adoptimize-' + tsh_width + 'x' + tsh_height;
    element.innerHTML = src;
    element.style.width = tsh_width + "px";
    element.style.height = tsh_height + "px";
    append.appendChild(element);
}


