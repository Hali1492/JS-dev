function signUp() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let name = document.getElementById('name').value;
  let surName = document.getElementById('surname').value;
  let age = document.getElementById('age').value;
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  var urlencoded = new URLSearchParams();
  urlencoded.append('email', email);
  urlencoded.append('password', password);
  urlencoded.append('name', name);
  urlencoded.append('surName', surName);
  urlencoded.append('age', age);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };
  fetch('https://wise-quarter-api-server.herokuapp.com/user', requestOptions)
    .then((response) => response.text())
    .then((result) => {console.log(result);})
    .catch((error) => console.log('error', error));
}