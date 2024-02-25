function init() {

    _addEventListeners();
    _addMouseEvents();
    _createTimelines();
}

function _addEventListeners() {
    _addWindowEvents();
    _addMouseEvents();
}

///////////////////
// TIMELINES
///////////////////

function _createTimelines() {

    const elements = document.querySelectorAll('.project');

    let introTimeline = gsap.timeline({ paused: false });
    introTimeline.from(".jumbotron", 1, { y: 30, ease: 'sine.out' }, '<');
    introTimeline.from(".jumbotron", .6, { opacity: 0, ease: 'sine.out' }, '<+.1');
    introTimeline.from(elements, 1, { y: 30, stagger: .1, ease: 'sine.out' }, '<+.1');
    introTimeline.from(elements, .6, { opacity: 0, stagger: .1, ease: 'sine.out' }, '<+.1');


}

///////////////////
// EVENTS
///////////////////


function _addWindowEvents() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        gsap.set(".card-body", { y: 0 })
    } else {
        gsap.set(".card-body", { y: 200 })
    }
}


function _addMouseEvents() {
    const card = document.querySelectorAll('.card');

    card.forEach(element => {
        element.addEventListener('mouseenter', event => {
            gsap.to(element.children[0], .5, { scale: 1.1, ease: 'sine.inOut' })
            gsap.to(element.lastElementChild, .5, { y: 0 })
        });
    });

    card.forEach(element => {
        element.addEventListener('mouseleave', event => {
            gsap.to(element.children[0], .5, { scale: 1, ease: 'sine.inOut' })
            gsap.to(element.lastElementChild, .5, { y: 200 })
        });
    });

}

///////////////////
// EXECUTE INIT
///////////////////

init();

