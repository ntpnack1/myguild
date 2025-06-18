fetch('components/navbar.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('navbar-container').innerHTML = html;
        
        const toggle = document.getElementById('menuToggle');
        const menu = document.getElementById('sideMenu');
        const overlay = document.getElementById('overlay');

        toggle.addEventListener('click', () => {
          toggle.classList.toggle('active');
          menu.classList.toggle('open');
          overlay.classList.toggle('show');
        });

        overlay.addEventListener('click', () => {
          toggle.classList.remove('active');
          menu.classList.remove('open');
          overlay.classList.remove('show');
        });
      });