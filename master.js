let icon = document.querySelector(".mobile-only i");
let nav = document.querySelector("#mobile nav");

icon.addEventListener("click", () => {
  if (icon.className == "fa-solid fa-bars") {
    icon.className = "fa-solid fa-x";
    nav.classList.toggle("open");
    document.body.classList.toggle("stop-scrolling");
  } else {
    icon.className = "fa-solid fa-bars";
    nav.classList.toggle("open");
  }
});

let Images = document.querySelectorAll("#products img");

Images.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overlay
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    //create Box
    let Box = document.createElement("div");
    Box.className = "Box";
    document.body.classList.toggle("stop-scrolling");

    //create ImageBox
    let ImageBox = document.createElement("div");
    ImageBox.className = "ImageBox";

    //create Img
    let Img = document.createElement("img");
    Img.src = img.src;
    Img.alt = "";
    Img.width = "100%";
    ImageBox.appendChild(Img);
    Box.appendChild(ImageBox);

    let h4 = document.createElement("h4");
    h4.textContent = "adidas";
    ImageBox.appendChild(h4);

    let h2 = document.createElement("h2");
    h2.textContent = "Carton Astronaut T-Shirt";
    ImageBox.appendChild(h2);

    let star = document.createElement("div");
    star.className = "star";
    for (let i = 0; i <= 5; i++) {
      let ico = document.createElement("i");
      ico.className = "fas fa-star";
      star.appendChild(ico);
      ImageBox.appendChild(star);
    }

    let h3 = document.createElement("h3");
    h3.textContent = "78$";
    ImageBox.appendChild(h3);

    // create DetailsBox
    let DetailsBox = document.createElement("div");
    DetailsBox.className = "DetailsBox";
    Box.appendChild(DetailsBox);

    let ProductDetails = document.createElement("h4");
    ProductDetails.textContent = "Product Details";
    DetailsBox.appendChild(ProductDetails);

    let description = document.createElement("span");
    description.textContent =
      "The Gildan Ultra Cotton T-Shirts is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey Knit provides unmatched comfort with each wear.";
    DetailsBox.appendChild(description);

    let sizes = ["Select Size", "Xl", "XXl", "Small", "Large"];
    let select = document.createElement("select");
    for (let size of sizes) {
      let option = document.createElement("option");
      option.textContent = size;
      select.appendChild(option);
    }
    DetailsBox.appendChild(select);

    let input = document.createElement("input");
    input.type = "number";
    input.value = "1";
    DetailsBox.appendChild(input);

    let button = document.createElement("button");
    button.className = "normal";
    button.textContent = "Add To Cart";
    DetailsBox.appendChild(button);

    // create CloseBtn
    let CloseBtn = document.createElement("button");
    let CloseBtnText = document.createTextNode("X");
    CloseBtn.className = "CloseBtn";
    CloseBtn.appendChild(CloseBtnText);
    Box.appendChild(CloseBtn);

    //add box to body
    document.body.appendChild(Box);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className == "CloseBtn") {
    e.target.parentNode.remove();
    document.querySelector(".overlay").remove();
  }
});
