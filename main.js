var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Cada línea de código es un paso hacia un futuro ...')
    .pauseFor(2500)
    //numero de caracteres que se borrarán//
    .deleteChars(3)
    .typeString('<strong>brillante</strong>')
    .pauseFor(2500)
    .start();