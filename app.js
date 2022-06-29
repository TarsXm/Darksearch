//Variables
const titulo = document.querySelector('#title');
const paragraph = document.querySelector('#paragraph');
const cta = document.querySelector('#cta');

const navegadores = document.querySelector('#navegadores');

document.addEventListener('DOMContentLoaded', () => {
     mostrarCard();
});

navegadores.addEventListener('change', e => {
    filtrarBusqueda(e);
})

//Funciones
function mostrarCard() {
    titulo.textContent = 'Debes de Instalar Brave';
    paragraph.textContent = `
   
El navegador Brave usa de manera predeterminada el HTTPS para forzar a los sitios web a usar conexiones en páginas seguras. `;
    cta.textContent = 'Link descarga de Brave';
    cta.setAttribute('href','https://brave.com/es/');

}


function filtrarBusqueda(e) {
    const valor = e.target.value;
    if (valor === 'Hidden Wiki') {
        hiddenValue();
    }
    if (valor === 'Torch') {
        torchValue();
    } if (valor === 'Ahmia') {
        ahmiaValue();
    } if (valor === 'NotEvil') {
        notEvilValue();
    }
}



function hiddenValue() {
    titulo.textContent = 'Hidden Wiki';
    paragraph.textContent = `
    En cuanto a Hidden Wiki, desde un punto estricto no lo podríamos considerar como un buscador. No obstante, como contiene un listado actualizado de enlaces de los principales sitios de la Deep Web`;
    cta.textContent = 'Enlace al navegador';
    cta.setAttribute('href', 'http://zqktlwiuavvvqqt4ybvgvi7tyo4hjl5xgfuvpdf6otjiycgwqbym2qad.onion/wiki/index.php/Main_Page');
}

function torchValue() {
    titulo.textContent = 'Torch';
    paragraph.textContent = `
    Ahmia es otro buscador muy útil para encontrar mucha información en la Deep Web, con los anteriores buscadores y con Ahmia tenemos todos los ingredientes para empezar a usar la red Tor y navegar por la web profunda.`;
    cta.textContent = 'Enlace al navegador';
    cta.setAttribute('href', 'http://xmh57jrknzkhv6y3ls3ubitzfqnkrwxhopf5aygthi7d6rplyvk3noyd.onion/cgi-bin/omega/omega');
}


function ahmiaValue() {
    titulo.textContent = 'Ahmia';
    paragraph.textContent = `
    En cuanto a Hidden Wiki, desde un punto estricto no lo podríamos considerar como un buscador. No obstante, como contiene un listado actualizado de enlaces de los principales sitios de la Deep Web`;
    cta.textContent = 'Enlace al navegador';
    cta.setAttribute('href', 'http://juhanurmihxlp77nkq76byazcldy2hlmovfu2epvl5ankdibsot4csyd.onion/');
}


function notEvilValue() {
    titulo.textContent = 'NotEvil';
    paragraph.textContent = `
    Otro buscador que podemos utilizar es NotEvil. Su funcionamiento es muy sencillo, bastará que delimiten bien con las palabras clave aquello que estás buscando. Únicamente tendrás que utilizar la barra del buscador y pulsar el botón Search para realizar tus consultas.`;
    cta.textContent = 'Enlace al navegador';
    cta.setAttribute('href', 'http://hss3uro2hsxfogfq.onion/');
}