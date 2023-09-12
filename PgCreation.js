document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeek = document.getElementById("DayOfWeek-now");
    const time = document.getElementById("time-now");

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    setInterval(function () {
        const now = new Date();
        const index = now.getUTCDay();
        dayOfWeek.innerText = daysOfWeek[index];
        time.innerText = now.getTime();
    }, 1); // Update every 1 millisecond
});
