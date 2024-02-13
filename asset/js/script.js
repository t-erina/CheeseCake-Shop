(() => {
    const el = document;
    
    // navBtn
    const navBtn = el.getElementById('js_navBtn'),
        nav = el.getElementById('nav'),
        navLink = el.getElementsByClassName('js_navLink');

    const showNav = () => {
        const navState = navBtn.classList;
        if (navState.contains('is_active')) {
            navState.remove('is_active')
            nav.classList.remove('is_active');
        } else {
            navState.add('is_active');
            nav.classList.add('is_active');
        }
    }
    navBtn.addEventListener('click', () => showNav());

    let i = 0;
    while (i < navLink.length) {
        navLink[i].addEventListener('click', () => showNav());
        i++;
    }

    // topBtn
})();
