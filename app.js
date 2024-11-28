document.addEventListener('DOMContentLoaded', function() {
    var InicioBoton = document.getElementById('VolverAlInicio');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            InicioBoton.classList.add('visible');
        } else {
            InicioBoton.classList.remove('visible');
        }
    });

    InicioBoton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const modoOscuro = document.getElementById('modoOscuro');
    const body = document.body;
   
    // Dark Mode Toggle
    modoOscuro.addEventListener('click', function() {
        body.classList.toggle('modo-oscuro');
        localStorage.setItem('oscuro', body.classList.contains('modo-oscuro'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('oscuro') === 'true') {
        body.classList.add('modo-oscuro');
    }


});