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
