// Function to update the day of the week
function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    document.getElementById("dayOfWeek").textContent = dayOfWeek;
}


function updateUTCTime() {
    const currentDate = new Date();
    const hours = currentDate.getUTCHours();
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getUTCMilliseconds().toString().padStart(3, '0');
    
    let ampm = 'AM';
    let formattedHours = hours;
    
    if (hours >= 12) {
        ampm = 'PM';
        formattedHours = hours === 12 ? 12 : hours - 12;
    }
    
    formattedHours = formattedHours.toString().padStart(2, '0');
    
    const utcTime = `${formattedHours}:${minutes}:${seconds}.${milliseconds} ${ampm}`;

    document.getElementById("utcTime").textContent = utcTime;
}

updateDayOfWeek();
updateUTCTime();
setInterval(updateDayOfWeek, 100);
setInterval(updateUTCTime, 100); 

