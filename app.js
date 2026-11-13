'use strict';
const examples={
  horarios:{question:'¡Hola! ¿Hasta qué hora están abiertos?',answer:'¡Hola! En este ejemplo, atendemos de lunes a viernes de 9 a 18. ¿Querés saber cómo retirar tu pedido?',source:'Basado en los horarios del negocio'},
  precios:{question:'¿Cuánto sale el cuaderno?',answer:'En nuestra tienda de ejemplo, el cuaderno cuesta $8.000. Es un precio ficticio para mostrar cómo se usaría tu lista de productos.',source:'Basado en una lista de precios de ejemplo'},
  persona:{question:'Necesito ayuda con un pedido especial.',answer:'Para ese caso, te pondríamos en contacto con una persona del equipo. Los pedidos especiales requieren atención personalizada.',source:'Basado en una regla de atención del negocio'}
};
document.querySelectorAll('[data-example]').forEach(button=>button.addEventListener('click',()=>{
  const example=examples[button.dataset.example];
  document.querySelector('#demo-question').textContent=example.question;
  document.querySelector('#demo-answer').textContent=example.answer;
  document.querySelector('.source-note').textContent='▤ '+example.source;
  document.querySelectorAll('[data-example]').forEach(item=>{const active=item===button;item.classList.toggle('selected',active);item.setAttribute('aria-pressed',String(active));});
}));
