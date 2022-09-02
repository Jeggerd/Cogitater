function copy(id) {
    var r = document.createRange();
    var e = document.querySelector('.tooltiptext')

    r.selectNode(document.getElementById(id).childNodes[0]);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    e.textContent = "Copied!"
    e.style.opacity = 1;
    setTimeout(function(){e.style.opacity = 0; setTimeout(function(){e.textContent = ""}, 250)}, 1250);
}

window.onload = function generateStars(){
    for (let i = 180; i--;) {
        let div = document.createElement("div");
        let aura = document.createElement("div");

        let bool = Math.random() < 0.25;
        if (bool == true) {
            let bool = Math.random() < 0.5;
            if (bool == true) {
                div.style.backgroundColor = "var(--star-color-p)"
                aura.style.backgroundColor = "var(--star-color-p) !important"
            } else {
                div.style.backgroundColor = "var(--star-color-b)"
                aura.style.backgroundColor = "var(--star-color-b) !important"
            }
        }

        var size = Math.random() * (2) + 2;
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

        aura.classList     = "star aura";
        aura.style.left    = (posx / w)*100 + '%'
        aura.style.top     = (posy / h)*100 + '%'
        aura.style.width   = size + 18 + "px"
        aura.style.height  = size + 18 + "px"
        aura.style.margin  = -10 + "px"

        document.querySelector("#back").appendChild(aura)
    }
}


function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

  window.onscroll = function() {
    const el1 = document.getElementById('scroll-indic');
    const el2 = document.getElementById('last-social');

    if (elementsOverlap(el1, el2)) {
        el1.style.opacity = 0;
        console.log("should hide indic")
    } else {
        // setTimeout(function(){
            el1.style.opacity = 1;
        // }, 250);
    }
  }
  
