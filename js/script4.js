function setProgress(percent) {
    const circle = document.querySelector('.progress-ring__circle4');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // Set the total length of the circle
    circle.style.strokeDasharray = `${circumference}`;
    
    // Calculate how much of the circle should be visible based on percentage
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // Update the percentage text inside the circle
    document.getElementById('progress-text4').textContent = `${percent}%`;
}


setProgress(20); 