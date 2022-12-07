const raffle = () => {
  return Math.round(Math.random() * 15);
};

const raffleNumber = (quantidade) => {
  let secret = [];

  let startNumber = 1;

  while (startNumber <= quantidade) {
    let numberRandom = raffle();

    if (numberRandom !== 0) {
      let hit = false;

      for (let i = 0; i < secret.length; i++) {

        if (secret[i] == numberRandom){
            hit = true;
            break
        }
      }

      if (hit == false){
        secret.push(numberRandom);
        startNumber++;
          }
    }
  }

  return secret;

  

};

let secret = raffleNumber (3);

console.log(secret);

let input = document.querySelector("input");
input.focus();

const checks = () => {

    let hit = false;

    for (let i = 0; i < secret.length; i++){
        if (input.value == secret [i]){

            alert("Você ACERTOU!!!");
            hit = true;
            break;
        }
    }

  

    if (hit == false){

        alert ("Você ERROU!!!")

        
    }

    input.value = "";
    input.focus();
}

let button = document.querySelector("button");

button.onclick = checks ; 