const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "Always remember You're Awesome!";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}
