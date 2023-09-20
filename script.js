const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select media stream
// pass video format
// play it

async function selectMediaStream() {
  try {
    const mediaStrem = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStrem;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error
    console.log("Error here", error);
  }
}

button.addEventListener("click", async () => {
  // disable the button when click
  button.disable = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disable = false;
});

selectMediaStream();
