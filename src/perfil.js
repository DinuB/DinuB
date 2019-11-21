var perfil = {
  nome: 'Dinu Buzut',
  foto: 'dinubuzut.png',
  perfil: [
    'Team Leader',
    'UX / UI',
    'Design',
    'Front End Developer',
    'Network',
    'Security',
    'Helpdesk'
  ]
}

document.getElementById('perfil').innerHTML =
`
  <div id="foto">
    <img src="src/img/${perfil.foto}" alt="">
  </div>
  <div id="info">
    <h3>${perfil.nome}</h3>
    <p>${perfil.perfil.join('<br>')}</p>
  </div>
`;
