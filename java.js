const buton = document.querySelector(".btn");
const input = document.querySelector(".input");
const sonuc = document.querySelector(".sonuc");
const par = document.querySelector("p");

const random = Math.floor(Math.random() * 100) + 1;

let counter = 7;
buton.addEventListener("click", () => {
  console.log(counter);

  if (counter > 0 && input.value > 0 && input.value < 100) {
    console.log(input.value);
    console.log(random);

    if (input.value < random) {
      sonuc.value = "Sayıyı Arttır";
      input.value = "";
    } else if (input.value > random) {
      sonuc.value = "Sayıyı Azalt";
      input.value = "";
    } else if (input.value == random) {
      sonuc.value = "WIN";
    }
    counter--;
  } else {
    par.innerHTML = "LOSE";
    sonuc.value = "GAME OVER";
    // return input.value = input.value;
  }
  console.log(counter);
  console.log("random:", random);
  par.innerHTML = `${counter} HAKKINIZ KALDI`;
});
