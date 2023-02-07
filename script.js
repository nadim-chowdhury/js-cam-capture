let video = document.getElementById("video");
let btn = document.getElementById("btn");
let canvas = document.getElementById("canvas");

let context = canvas.getContext("2d");

let webcam = navigator.mediaDevices.getUserMedia();

if (webcam) {
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    .then(() => {
      video.srcObject = Live;
    })
    .catch(() => {
      console.log("Error. Please, try again");
    });
}

btn.addEventListener("click", () => {
  context.drawImage(video, 0, 0, 1280, 720);
});
