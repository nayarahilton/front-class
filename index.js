const h1 = document.body.querySelector("h1");

h1.addEventListener("click", function() {
  h1.style.color = "red";
});

console.log(h1);

const soma = function(a, b) {
  return a + b;
};

console.log(soma(1, 2));
