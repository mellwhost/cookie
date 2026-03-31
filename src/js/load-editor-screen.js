const load = document.getElementById("loading");

function hideLoadingScreen() {
  load.style.opacity = "0";
  load.addEventListener(
    "transitionend",
    () => {
      load.style.display = "none";
    },
    { once: true },
  );
}
setTimeout(hideLoadingScreen, 3000);
