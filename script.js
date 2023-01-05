function copy(id) {
    var r = document.createRange();
    var e = document.querySelector('.tooltiptext')

    r.selectNode(document.getElementById(id).childNodes[0]);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    // e.textContent = "Copied!"
    // e.style.opacity = 1;

    var copy = document.querySelector('#copy-success')
    var contact = document.querySelector('#contact-us')

    copy.style.opacity = 1
    contact.style.opacity = 0

    setTimeout(function(){
        copy.style.opacity = 0
        contact.style.opacity = 1
    }, 2000);

    // document.querySelector('#credit')
    // setTimeout(function(){e.style.opacity = 0; setTimeout(function(){e.textContent = ""}, 250)}, 1250);
}

function pauseAnim(e) {
    e.parentElement.style.animationPlayState = 'paused'
    for (let i = 0; i < e.parentElement.children.length; i++) {
        e.parentElement.children[i].style.animationPlayState = 'paused'
    }
}
function resumeAnim(e) {
    e.parentElement.style.animationPlayState = 'running'
    for (let i = 0; i < e.parentElement.children.length; i++) {
        e.parentElement.children[i].style.animationPlayState = 'running'
    }
}

var didmakestars = false
function generateStars(){
    if (!didmakestars) {
        for (let i = 245; i--;) {
            let div = document.createElement("div");

            var size = Math.random()*(3-0.5) + 0.5;
            size = Math.round(size)
            let w = document.documentElement.clientWidth
            let h = document.documentElement.clientHeight

            let posx = (Math.random() * (w-4));
            let posy = (Math.random() * (h-4));

            div.className    = "star";
            div.style.left   = (posx / w)*100 + '%'
            div.style.top    = (posy / h)*100 + '%'
            div.style.width  = size + "px"
            div.style.height = size + "px"

            document.querySelector("#stars").appendChild(div)
        }

        for (let i = 40; i--;) {
            let div = document.createElement("div");

            var size = Math.random()*(5-1.5) + 1.5;
            size = Math.round(size)
            let w = document.documentElement.clientWidth
            let h = document.documentElement.clientHeight

            let posx = (Math.random() * (w-4));
            let posy = (Math.random() * (h-4));

            div.className    = "star";
            div.style.left   = (posx / w)*100 + '%'
            div.style.top    = (posy / h)*100 + '%'
            div.style.width  = size + "px"
            div.style.height = size + "px"

            document.querySelector("#blurry-back").appendChild(div)
        }

        didmakestars = true
    }
}


window.onload = generateStars;
