let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 90,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Iniciando en el mundo de la programación')
  .pauseFor(200)
  .deleteChars(10)
  .start();
