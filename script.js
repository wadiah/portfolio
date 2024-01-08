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



