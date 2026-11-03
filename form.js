const form = document.querySelector('form');
const notice = document.querySelector('#status');
notice.textContent = 'Prévia para visualização. O envio de dados está desativado.';
for (const field of form.querySelectorAll("input:not([type=checkbox]), button")) field.disabled = true;
form.addEventListener('submit', event => event.preventDefault());
