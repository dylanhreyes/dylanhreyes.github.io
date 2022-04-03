let images = ["attheboard.jpg", "gtr.jpg", "headshot.jpeg", "piano1.jpg", "studiowork.JPG", "studio.jpg"];

(() => {
  document.getElementById("main-bg").style =
    `background-image: url('https://dylanhreyes.github.io/img/${images[Math.floor(Math.random() * images.length)]}'); height: 100vh`;
})();
