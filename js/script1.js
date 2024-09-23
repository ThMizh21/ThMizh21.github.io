function setProgress(percent) {
    const circle = document.querySelector('.progress-ring__circle1');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // Set the total length of the circle
    circle.style.strokeDasharray = `${circumference}`;
    
    // Calculate how much of the circle should be visible based on percentage
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // Update the percentage text inside the circle
    document.getElementById('progress-text1').textContent = `${percent}%`;
}

// Example usage:
setProgress(97); // Set progress to 67%