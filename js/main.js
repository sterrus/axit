(function() {
    const btn = document.getElementById('nav-hamburger'),
          menu = document.getElementById('menu'),
          featuresBtn = document.getElementsByClassName('features-btn'),
          tabs = document.getElementsByClassName('features-tab');

    btn.addEventListener('click', function() {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        } else {
            menu.classList.add('active');
        }
    });

    for (var i = 0; i < featuresBtn.length; i++) {
        featuresBtn[i].addEventListener('click', function() {
            document.querySelectorAll('.features-tab.active').forEach(function(item) {
                item.classList.remove('active');
            });
            document.querySelectorAll('.features-btn.active').forEach(function(item) {
                item.classList.remove('active');
            });
            tabs[this.value].className += ' active';
            featuresBtn[this.value].className += ' active';
        });
    }
})();