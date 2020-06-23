var json;
var submit;

function submit(){
  submit = document.getElementById('input').value;
}

var minhaPromise = function(){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/dinub');
        // xhr.open('GET', 'https://api.linkedin.com/v1/dinu-buzut-31a867162');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                    json = (JSON.parse(xhr.responseText));
                    dados();

                } else {
                    reject('Erro na Req.');
                }
            }
        }
    })
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })

    .catch(function(error) {
        console.warn(error);
        document.body.innerHTML = 'Erro ao carregar os dados';
    })


function dados(){

  document.getElementById('perfil').innerHTML =
  `
  <div class='img'>
    <img src='src/img/fotocvdinufim.png'>
  </div>
  <div class='bio'>
      <h3 style='color: #fff'>DinuB: UNDER CONSTRUTION!!!</h3>
  </div>
    `;s

}
