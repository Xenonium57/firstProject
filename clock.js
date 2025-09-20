const clock = document.getElementById("clock");
function loop() {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const mi = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    const ms = date.getMilliseconds().toString().padStart(3, "0").slice(0, 1);
    clock.textContent = `${yyyy}/${mm}/${dd}-${hh}:${mi}:${ss}:${ms}`;
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
