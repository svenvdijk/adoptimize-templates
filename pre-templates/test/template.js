function template() {
    var template = `
    <div class='automotive automotive-luxe automotive-luxe--slider automotive-slider'>
        <div class='container'>
            <div class='image-wrapper'>
                <ul class='slider'>
                    <li class='slider-item'>
                        <img src="./assets/image01.jpg" alt="">
                    </li>
                    <li class='slider-item'>
                        <img src="./assets/image02.jpg" alt="">
                    </li>
                    <li class='slider-item'>
                        <img src="./assets/image03.jpg" alt="">
                    </li>
                    <li class='slider-item'>
                        <img src="./assets/image04.jpg" alt="">                        
                    </li>
                </ul>
            </div>
            <div class='content-wrapper'>
                <header class='teaser-title'>{{title}}</header>
            </div>
        </div>
    </div>
    `

    return template
}

