// script.js

// Function to dynamically insert the GitHub heatmap iframe
function loadGitHubHeatmap() {
    const container = document.getElementById('github-heatmap');
    
    // Create an iframe element
    const iframe = document.createElement('iframe');
    <iframe src="https://github-readme-stats.vercel.app/api?username=ThMizh21" width="WIDTH" height="HEIGHT" frameborder="0"></iframe>
    // Replace USERNAME with your GitHub username
    iframe.style.width = '100%';
    iframe.style.height = '600px'; // Adjust height as needed
    iframe.style.border = 'none';
    
    // Append the iframe to the container
    container.appendChild(iframe);
}

// Load the heatmap when the page loads
window.onload = loadGitHubHeatmap;