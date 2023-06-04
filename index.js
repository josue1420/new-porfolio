//variable que manttiene el menu
let menuVisible = false;

//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = 'responsive';
        menuVisible = true;
        }
}
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//animacion kills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = Window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");s
        
    }
}

//detecto el scrolling
Window.onscroll = function(){
    efectoHabilidades();
}

const $form = document.querySelector('#form')

$form.addEventListener('submit', handlesubmit)

async function handlesubmit(event){
   event.preventDefault()
   const form = new FormData(this)
   const response = await fetch(this.action,{
       method: this.method,
       body: form,
       headers: {
           'accept': 'application/json'
       }
   })
   if (response.ok)
   this.reset()
   alert('Gracias tu mensaje a sido enviado, me contactare pronto!')
}

document.getElementById("form").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var tema = document.getElementById("tema").value;
    var mensaje = document.getElementById("mensaje").value;
    
    if (nombre === "" || telefono === "" || correo === "" || tema === "" || mensaje === "") {
      alert("Debes completar todos los campos obligatorios.");
      event.preventDefault();
    }
  });


