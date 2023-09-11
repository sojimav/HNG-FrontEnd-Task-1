document.addEventListener("DOMContentLoaded", function () {
   
    const btn = document.getElementById("btn");

   
    const dayOfWeek = document.getElementById("DayOfWeek-now");
    const time = document.getElementById("time-now");

    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let index = now.getDay()



    btn.addEventListener("click", function () {
       
        if (dayOfWeek.style.display === "none") {
            dayOfWeek.innerText = daysOfWeek[index].toString();
            time.innerText = now.getTime();
            dayOfWeek.style.display = "block";
            time.style.display = "block";
        } else {
            dayOfWeek.style.display = "none";
            time.style.display = "none";
        }
    });
});
