<? header('content-type: text/json; charset=utf-8; X-Content-Type-Options: nosniff');

    $template_data = '{
        "template": {
            "info": {
                "template_variant": "slider",
                "branche": "Test",
                "advertiser": "Test",
                "campaign": "00000000"
            },
            "assets": {
                "javascript": "/js/script.js",
                "css": "/css/style.css"
            },
            "libaries": {
                "slick": {
                    "name": "slick",
                    "css": "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
                    "javascript": "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
                },
                "jQuery": {
                    "name": "jQuery",
                    "css": "",
                    "javascript": "https://code.jquery.com/jquery-3.4.1.slim.min.js"
                }
            },
            "html": {
                "template_src": "/template.js"
            }
        }
    }';
        
    echo $_GET['callback'] . '('.json_encode($template_data).')';

?>