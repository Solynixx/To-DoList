const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("days").innerHTML = day[new Date().getDay()];
document.getElementById("date").innerHTML = new Date().getDate() + "/" + new Date().toLocaleString('default', { month: '2-digit' }) + "/" + new Date().getFullYear();