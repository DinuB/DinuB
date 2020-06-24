var json;
var submit;

function submit(){
  submit = document.getElementById('input').value;
}

var minhaPromise = function(){
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/dinub');
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

}
