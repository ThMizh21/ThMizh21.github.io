// Scroll Progress Bar Function
window.onscroll = function() {
  myFunction();
  updateActiveLink();
};

function myFunction() {

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


const navLinks = document.querySelectorAll('.nav');

const sections = document.querySelectorAll('section');

// Function to update active link based on scroll position
function updateActiveLink() {
  let currentSection = '';
 
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      currentSection = section.getAttribute('id');
    }
  });
  // Remove 'active' class from all links and add to current section's link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}


function setProgress1(percent) {
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


function setProgress2(percent) {
  const circle = document.querySelector('.progress-ring__circle2');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  // Set the total length of the circle
  circle.style.strokeDasharray = `${circumference}`;
  
  // Calculate how much of the circle should be visible based on percentage
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Update the percentage text inside the circle
  document.getElementById('progress-text2').textContent = `${percent}%`;
}


function setProgress3(percent) {
  const circle = document.querySelector('.progress-ring__circle3');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  // Set the total length of the circle
  circle.style.strokeDasharray = `${circumference}`;
  
  // Calculate how much of the circle should be visible based on percentage
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Update the percentage text inside the circle
  document.getElementById('progress-text3').textContent = `${percent}%`;
}


function setProgress4(percent) {
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


function setProgress5(percent) {
  const circle = document.querySelector('.progress-ring__circle5');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  // Set the total length of the circle
  circle.style.strokeDasharray = `${circumference}`;
  
  // Calculate how much of the circle should be visible based on percentage
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Update the percentage text inside the circle
  document.getElementById('progress-text5').textContent = `${percent}%`;
}
function setProgress6(percent) {
  const circle = document.querySelector('.progress-ring__circle6');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  // Set the total length of the circle
  circle.style.strokeDasharray = `${circumference}`;
  
  // Calculate how much of the circle should be visible based on percentage
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Update the percentage text inside the circle
  document.getElementById('progress-text6').textContent = `${percent}%`;
}
function setProgress7(percent) {
  const circle = document.querySelector('.progress-ring__circle7');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  // Set the total length of the circle
  circle.style.strokeDasharray = `${circumference}`;
  
  // Calculate how much of the circle should be visible based on percentage
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Update the percentage text inside the circle
  document.getElementById('progress-text7').textContent = `${percent}%`;
}
function setProgress8(percent) {
  const circle = document.querySelector('.progress-ring__circle8');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  // Set the total length of the circle
  circle.style.strokeDasharray = `${circumference}`;
  
  // Calculate how much of the circle should be visible based on percentage
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  
  // Update the percentage text inside the circle
  document.getElementById('progress-text8').textContent = (`Lvl:${percent/10}`);
}

setProgress1(93); 
setProgress2(87); 
setProgress3(83);
setProgress4(89); 
setProgress5(81); 
setProgress6(84); 
setProgress7(58); 
setProgress8(60); 

