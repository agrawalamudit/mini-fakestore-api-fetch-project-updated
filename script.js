let one = document.querySelector(".one"); 
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");

let arr = [one, two, three, four, five];

let btn = document.querySelector("button");
window.onload = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      work(result);
    });
};

function work(result) {
  let counter = 0;
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < 4; x++) {
      let ele = document.createElement("div");
      ele.style = "margin: 20px; width: 300px;";
      let i = document.createElement("img");
      i.src = result[counter].image;
      i.style = "height: 200px; width: 200px;";
      let t = document.createElement("p");
      t.textContent = result[counter].title;
      t.style =
        "font-family: 'Poppins', sans-serif; font-weight: 500; font-size: 18px;";
      let pr = document.createElement("h4");
      pr.textContent = result[counter].price;

      ele.appendChild(i);
      ele.appendChild(t);
      ele.appendChild(pr);

      arr[y].appendChild(ele);
      counter++;
    }
  }
}
