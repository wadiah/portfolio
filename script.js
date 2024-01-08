// const nounTime = ['sunset', 'sunrise', 'morning', 'night'];
// const nounPlace = ['city', 'studio', 'theatre'];
// const nounPeople = ['poet', 'painter', 'druggist', 'acrobat'];
// const nounThing = ['instrument', 'cologne', 'perfume', 'blood', 'metal', 'navel', 'time'];

// const verbTo = ['be', 'need', 'warm', 'search'];
// const verbPresent = ['is', 'needs', 'warms', 'searches'];
// const verbPast = ['was', 'needed', 'warmed', 'searched'];

// const pronouns = ['she', 'he', 'they',];
// const relProSub = 'who';
// const relProAnimObj = 'which';
// const relProTime = 'when';
// const relPron1 = ''


let text = "testing testing testing maybe i'll put the weather forecast here";
let result = text.repeat(1);


document.getElementById("banner").innerHTML = result;
document.getElementById("banner").animate(
  [
    // keyframes
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ],
  {
    // timing options
    duration: 30000,
    iterations: Infinity,
  }
);
