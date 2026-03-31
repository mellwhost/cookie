const editor = document.getElementById("editor");
const log = document.getElementById("console");
const header = document.querySelector("#console .header")[0];
const originalLog = console.log;

function jsEditor() {
  try {
    console.log = function (...args) {
      originalLog.apply(console, args);

      const message = args
        .map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : arg))
        .join(" ");

      log.innerHTML += "" + message + "<br>";
    };

    eval(editor.value);
  } catch (error) {
    log.innerHTML += "Error: " + error.message + "<br>";
  } finally {
    console.log = originalLog;
  }
}
jsEditor();
function clearConsole() {
  log.innerHTML =
    "<div class='header'> <i class='fa-solid fa-code'></i><span>console</span></div>";
  header.style.display = "flex";
}
