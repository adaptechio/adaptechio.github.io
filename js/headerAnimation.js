function fitElementToParent(el, padding) {
    var timeout = null;
    function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, {scale: 5});
        var pad = padding || 0;
        var parentEl = el.parentNode;
        var elOffsetWidth = el.offsetWidth - pad;
        var parentOffsetWidth = parentEl.offsetWidth;
        var ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(anime.set(el, {scale: ratio}), 1);
    }
    resize();
    window.addEventListener('resize', resize);
}

function getBackgroundColor(ease) {
    var result = '#'+ anime.stagger([0,16777215],{easing: ease, from: 'last'}).toString(16)
    console.log(result)
    return result
}
$(document).mousemove(function(getCurrentPos){
    var xCord = getCurrentPos.clientX;
    var yCord = getCurrentPos.clientY;

    var xPercent = xCord/window.innerWidth;
    var yPercent = yCord/window.innerHeight;
});

var easingsAnimation = (function() {

    var easingVisualizerEl = document.querySelector('.easing-visualizer');
    var barsWrapperEl = easingVisualizerEl.querySelector('.bars-wrapper');
    var dotsWrapperEl = easingVisualizerEl.querySelector('.dots-wrapper');
    var barsFragment = document.createDocumentFragment();
    var dotsFragment = document.createDocumentFragment();
    var numberOfBars = 91;
    var duration = 1500;
    var minWidth = 36;
    var maxWidth = 60;
    var animation;

    fitElementToParent(easingVisualizerEl, 0);

    for (var i = 0; i < numberOfBars; i++) {
        var barEl = document.createElement('div');
        var dotEl = document.createElement('div');
        barEl.classList.add('bar');
        dotEl.classList.add('dot');
        dotEl.classList.add('text-muted');
        barsFragment.appendChild(barEl);
        dotsFragment.appendChild(dotEl);
    }

    barsWrapperEl.appendChild(barsFragment);
    dotsWrapperEl.appendChild(dotsFragment);

    function play() {
        var scroll = $(window).scrollTop();
        var easings = [];
        for (let ease in anime.penner) easings.push(ease);
        // easings.push('steps('+anime.ra.text-primary, .text-primary:hoverndom(5, 20)+')');
        // easings.push('steps('+anime.random(5, 20)+')');
        // easings.push('cubicBezier(0, 0.475, 0.145, 1)');
        var ease = easings[anime.random(0, easings.length - 1)];

        animation = anime.timeline({
            duration: duration,
            easing: ease,
            complete: play
        })
            .add({
                targets: '.easing-visualizer .bar',
                scaleY: anime.stagger([minWidth, maxWidth], {easing: ease, from: 'center', direction: 'reverse'}),
                delay: anime.stagger(12, {from: 'center'})
            })
            .add({
                targets: '.easing-visualizer .dot',
                translateY: anime.stagger(['-160px', '160px'], {easing: ease, from: 'last'}),
                delay: anime.stagger(12, {from: 'center'}),
                backgroundColor: (el, i, t) => {
                    //Final Color: rgba(30, 137, 0, 1)
                    const r = 1 + (i * (30/numberOfBars));
                    const g = 1 + (i * (137/numberOfBars));
                    const b = 1 + (i * (0/numberOfBars));
                    const color = `rgb(${r}, ${g}, ${b})`;
                    return color;
                },
                // backgroundColor: ["hsl(0, 0%, 10%)", "hsl(107, 100%, 27%)"],
            }, 0);

    }

    play();

})();