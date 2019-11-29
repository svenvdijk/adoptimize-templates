function renderTemplateFromHost(callback) {
    console.log('function:', 1);
    var host = "https://templating.test/server-template/test"; //"https://svenvandijk.com/test"
    var templateApi = host + "/template.php";
    var banner = document.getElementById('adoptimizeCreative');
    
    function setAssets(url, element) {
        var elementNode = element;
        prop = document.createElement(element);
    
        if(elementNode == 'link') {
            console.log(2,' Append CSS');
            prop = document.createElement(element);
            prop.rel = 'stylesheet';
            prop.href = url;
            document.head.appendChild(prop);
    
        } else if(elementNode == 'script') {
            console.log(5, ' Append JS');
            element = document.createElement(element);
            prop.type = 'text/javascript';
            prop.src = url;
            document.body.appendChild(prop);
        }
    }
    
    // Create HTML from template.js file
    function setHTML(url, callback) {
        console.log(4, ' Append HTML');
        $.getScript(url).done(function(){

            // create template with the 
            createTemplate(template(), banner);
            callback();
        }); 
    }
    
    // Create the template
    function createTemplate(src, append) {
        console.log(4.1, ' HTML is added to the DOM');
        var tsh_height = 250; // mediavoice data
        var tsh_width = 300; // mediavoice data
    
        var element = document.createElement('div');
        element.className = 'adoptimize-' + tsh_width + 'x' + tsh_height;
        element.innerHTML = src;
        element.style.width = tsh_width + "px";
        element.style.height = tsh_height + "px";
        append.appendChild(element);
    }
    
    // AJAX Connection to get the json file from server
    $.ajax({
        async: false,
        cache: false,
        url: templateApi,
        dataType: 'jsonp',
        type: 'GET',
        success: function(data){
            console.log(1, ' AJAX call');
            //Parse JSON to useable array
            data = JSON.parse(data);
            var css_assets = host + data.assets.css;
            var javascript_assets = host + data.assets.javascript;
    
    
            var template_src = host + data.html.template_src;
    
            // All the libaries
            var libaries = Object.entries(data.libaries);
    
            //Check JSON for libaries
            function iterateLibaries(libaries, file) {
                if(libaries.length > 0) {
                    libaries.forEach(libary => {
                        var tag = file == 'css' ? 'link' : false || file == 'js'? 'script' : false;
                        var cdn = document.createElement(tag);
                    
                        if(libary[1].css.length > 0 && file == 'css') {
                            console.log(3,' Append CDN CSS');
                            cdn.rel = 'stylesheet';
                            cdn.href = libary[1].css
                            banner.append(cdn); //document.head.appendChild(cdn);
                        }
                        if(libary[1].javascript.length > 0 && file == 'js') {
                            console.log(5,' Append CDN JS');
                            cdn.src = libary[1].javascript;
                            banner.append(cdn); //document.body.appendChild(cdn);
                        }
                    });
                }
            }
    
            // Append CSS from JSON
            setAssets(css_assets, 'link');
    
            //get css cdn from libaries and append this to the document
            iterateLibaries(libaries, 'css');

            // Append HTML from template literals -- template.js
            // Set callback function for handling async loading of template.js
            setHTML(template_src, function() {
                //get js cdn from libaries and append this to the document
                iterateLibaries(libaries, 'js');

                // Callback to activate afterRender function
                callback();
            });
    
            // Append JS from JSON
            //TODO Add javascript file from JSON. Also need to create a function to handle the file.
        },
        error: function(){
            console.error('The data returned ', data)
        }      
    });
};

function afterRender() {
    console.log('function:', 2);
    var template = {
        title: document.getElementsByClassName('ad-title')[0],
        subtitle: document.getElementsByClassName('ad-subtitle')[0],
        image: document.getElementsByClassName('image')[0]
    }

    var title = renderContext.fill.creatives[0].title;      // Polar: renderContext.fill.creatives[0].title
    var subtitle = renderContext.fill.creatives[0].summary;   // Polar: renderContext.fill.creatives[0].summary
    var imageURL = renderContext.fill.creatives[0].image.href;   // Polar: renderContext.fill.creatives[0].image.href
    var polar = {
        title: title,   
        subtitle: subtitle,                                       
        image: imageURL
    }

    // Place the Mediavoice text to the DOM
    function adjustInnerText(text, className) {
        if(text.length == 0){
            // Remove empty OBJ from DOM
            className.setAttribute("style", "display: none;")
        }
        var htmlObj = className;
        htmlObj.innerText = text;   
    }
    function adjustImage(image, className) {
        if(image.length > 0) {
            className.setAttribute("style", "background-image: url('"+ image +"');")
        } else {
            return false;
        }
    }

    // Adjust text to Mediavoice input
    adjustInnerText(polar.title, template.title);
    adjustInnerText(polar.subtitle, template.subtitle);
    // Adjust image to Mediavoice input
    adjustImage(polar.image, template.image);  

}

renderTemplateFromHost(afterRender)

