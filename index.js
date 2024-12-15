let imageElement = document.getElementById("img-el")

function imgDog() {
    const imageFolder = "images/dogs/";
    const images = ["dog1.png", "dog2.png", "dog3.png", "dog4.png", "dog5.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Update the <img> element's src attribute
    imageElement.src = imageFolder + randomImage;
    imageElement.alt = `Random Image: ${randomImage}`;
}

function imgCat() {
    const imageFolder = "images/cats/";
    const images = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Update the <img> element's src attribute
    imageElement.src = imageFolder + randomImage;
    imageElement.alt = `Random Image: ${randomImage}`;
}

function imgFruit() {
    const imageFolder = "images/fruits/";
    const images = ["fruits1.png", "fruits2.png", "fruits3.png", "fruits4.png", "fruits5.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Update the <img> element's src attribute
    imageElement.src = imageFolder + randomImage;
    imageElement.alt = `Random Image: ${randomImage}`;
}

function imgHuman() {
    const imageFolder = "images/humans/";
    const images = ["human1.png", "human2.png", "human3.png", "human4.png", "human5.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    // Update the <img> element's src attribute
    imageElement.src = imageFolder + randomImage;
    imageElement.alt = `Random Image: ${randomImage}`;
}