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

var didmakestars = false
window.onload = function generateStars(){
    if (!didmakestars) {
        for (let i = 200; i--;) {
            let div = document.createElement("div");
            // let aura = document.createElement("div");

            // let bool = Math.random() < 0.25;
            // if (bool == true) {
            //     let bool = Math.random() < 0.5;
            //     if (bool == true) {
            //         div.style.backgroundColor = "var(--star-color-p)"
            //         // aura.style.backgroundColor = "var(--star-color-p) !important"
            //     } else {
            //         div.style.backgroundColor = "var(--star-color-b)"
            //         // aura.style.backgroundColor = "var(--star-color-b) !important"
            //     }
            // }

            var size = Math.random()*(4-1) + 1;
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

            document.querySelector("#back").appendChild(div)

            // aura.classList     = "star aura";
            // aura.style.left    = (posx / w)*100 + '%'
            // aura.style.top     = (posy / h)*100 + '%'
            // aura.style.width   = size + 18 + "px"
            // aura.style.height  = size + 18 + "px"
            // aura.style.margin  = -10 + "px"

            // document.querySelector("#back").appendChild(aura)
        }

        didmakestars = true
    }
}

  
