const card = document.querySelector(".card");
const character = document.querySelectorAll(".character");
// card.array.forEach(element => {
//     element=
// });
for (let i = 0; i < 403; i++) {
  // function HStudent() {
  //   if (json[i].hogwartsStudent) {
  //     return "Hogwarts Student: Yes";
  //   } else {
  //     return "Hogwarts Student: No";
  //   }
  // }
  function image_gender(json) {
    if (json[i].gender === `male` && json[i].image === "") {
      return `<img style="height: 180px" src="img/man.png" >`;
    } else if (json[i].gender === `female` && json[i].image === "") {
      return `<img style="height: 180px" src="img/woman.png">`;
    } else {
      return `<img src = "${json[i].image}">`;
    }
  }
  function TrFa(json) {
    if (json === true) {
      return `<i class="fa-solid fa-check"></i>`;
    } else if (json == false ) {
      return `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    }
    else return(json)
  }
  //   function gender_filter_male(json) {
  //     if (json[i].gender === `male`) {
  //     }
  //   }

  fetch("https://hp-api.herokuapp.com/api/characters/")
    .then((response) => response.json())
    .then(
      (json) =>
        (card.innerHTML +=
          `<div class = "character">` +
          `<h1> ${TrFa(json[i].name)}</h1>` +
          `<br>` +
          `<div class = "bl">` +
          image_gender(json) +
          `<br>` +
          `<div class= "con">` +
          `<b>Alternate Name: </b>` +
          TrFa(json[i].alternate_names) +
          `<br>`+
          `<b>Species: </b>` +
          TrFa(json[i].species) +
          `<br>` +
          `<b> Gender: </b>` +
          TrFa(json[i].gender) +
          `<br>` +
          "<b> House: </b> " +
          TrFa(json[i].house) +
          `<br>` +
          "<b> Date Of Birth: </b> " +
          TrFa(json[i].dateOfBirth) +
          `<br>` +
          "<b> Year Of Birth: </b> " +
          TrFa(json[i].yearOfBirth) +
          `<br>` +
          "<b> Wizard: </b> " +
          TrFa(json[i].wizard) +
          `<br>` +
          "<b> Ancestry: </b>" +
          TrFa(json[i].ancestry) +
          `<br>` +
          " <b> Eye colour: </b>" +
          `<i style="color: ${json[i].eyeColour};" class="fa-solid fa-eye "></i>` +
          `<br>` +
          "<b>Patronus: </b>" +
          TrFa(json[i].patronus) +
          "<br>" +
          "<b>Hogwarts Student: </b>" +
          TrFa(json[i].hogwartsStudent) +
          `<br>` +
          "<b>Hogwarts Staff: </b>" +
          TrFa(json[i].hogwartsStaff) +
          `<br>` +
          "<b>Actor: </b>" +
          `<p>${json[i].actor} </p>` +
          `<br>` +
          "<b>Alternate actors: </b>" +
          TrFa(json[i].alternate_actors) +
          `<br>`+
          "<b>Alive: </b>" +
          TrFa(json[i].alive) +
          `</div>` +
          `</div>` +
          `</div>`)
    );
}
