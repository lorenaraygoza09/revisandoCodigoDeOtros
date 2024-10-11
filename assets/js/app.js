
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

//declare la funcion como async 
 async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  //cambie las comillas simples por `backticks` en las interpolaciones
  $n.textContent = `${data.name}`; 
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // añadi el signo $ en n.textContent
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);