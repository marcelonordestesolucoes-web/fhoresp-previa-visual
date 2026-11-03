const form = document.querySelector('form');
const notice = document.querySelector('#status');
notice.textContent = 'Prévia para visualização. O envio de dados está desativado.';
form.addEventListener('submit', event => event.preventDefault());
