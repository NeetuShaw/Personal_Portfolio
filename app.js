const downloadButton = document.getElementById("downloadbtn");

downloadButton.addEventListener(`click`, () => {
    const a = document.createElement('a');

    a.href='https://drive.google.com/file/d/1QWJZGj1oGk0MaOwU4cvOaDCFLQFQkokg/view?usp=drive_link';
    a.download="Neetu-Shaw-CV.pdf";

    a.click();
    alert("Resume has been successfully downloaded!");

});

// 2nd parent
    document.addEventListener("DOMContentLoaded", () => {
    const eduButton = document.getElementById('eduBtn');
    const skillsButton = document.getElementById('skillsBtn');
    const expButton = document.getElementById('expBtn');
    const educationSection = document.getElementById('Education');
    const skillsSection = document.getElementById('Skills');
    const experienceSection = document.getElementById('Experiences');

    // Initially hide all sections
    educationSection.style.display = 'none';
    skillsSection.style.display = 'none';
    experienceSection.style.display = 'none';

     // Toggle Education section on button click
     eduButton.addEventListener('click', () => {
        // Toggle visibility of Education section
        if (educationSection.style.display === 'block') {
            educationSection.style.display = 'none';
        } else {
            educationSection.style.display = 'block';
            skillsSection.style.display = 'none';
            experienceSection.style.display = 'none';
        }
    });

    // Toggle Skills section on button click
    skillsButton.addEventListener('click', () => {
        // Toggle visibility of Skills section
        if (skillsSection.style.display === 'block') {
            skillsSection.style.display = 'none';
        } else {
            skillsSection.style.display = 'block';
            educationSection.style.display = 'none';
            experienceSection.style.display = 'none';
        }
    });

    // Toggle Experiences section on button click
    expButton.addEventListener('click', () => {
        // Toggle visibility of Experiences section
        if (experienceSection.style.display === 'block') {
            experienceSection.style.display = 'none';
        } else {
            experienceSection.style.display = 'block';
            educationSection.style.display = 'none';
            skillsSection.style.display = 'none';
        }
    });
});


// 3rd part
// Function to open the modal and populate it with project details
function openModal(title, description, link) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal-link').href = link;
    document.getElementById('project-modal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Event listener for the close button (x icon)
document.querySelector('.close-modal').addEventListener('click', closeModal);

// Function to flip the card
function flipCard(button) {
    const cardInner = button.closest('.flip-card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}

document.getElementById("load-more-projects").addEventListener('click', function () {
    const newProjectCard = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <video width="100%" height="auto" controls muted>
                        <source src="videos/Weather-Record_1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>                        
                    <h2>Weather-monitoring-system</h2>
                    <button class="flip-btn" onclick="flipCard(this)">See Details</button>
                </div>
                <div class="flip-card-back">
                    <h2>Weather-monitoring-system</h2>
                    <p>A real-time weather monitoring system that provides weather data for selected cities. Users can view current weather conditions, daily summaries, and alerts based on temperature thresholds. Built using Node.js, Express, and MongoDB, this application features a user-friendly dashboard with options for temperature units and data views.</p>
                    <h2><b>Technologies:</b></h2> 
                    <p><b>Frontend:</b> HTML, CSS, JavaScript  
                    <b>Backend:</b> Node.js, Express 
                    Database : MongoDB API : OpenWeatherMap API </p>
                    <button class="view-btn" onclick="openModal('Weather-monitoring-system', 'A real-time weather monitoring system that provides weather data for selected cities. Users can view current weather conditions, daily summaries, and alerts based on temperature thresholds. Built using Node.js, Express, and MongoDB, this application features a user-friendly dashboard with options for temperature units and data views.', 'https://github.com/NeetuShaw/Weather-monitoring-system')">View Project</button>
                    <button class="view-btn" onclick="flipCard(this)">Back to Front</button>
                </div>
            </div>
        </div>
         <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <video width="100%" height="auto" controls muted>
                       <source src="videos/flower-video.mp4" type="video/mp4">
                       Your browser does not support the video tag.
                    </video>                        
                    <h2>Fresh-Flower-Website</h2>
                    <button class="flip-btn" onclick="flipCard(this)">See Details</button>
                </div>
                <div class="flip-card-back">
                   <h2>Fresh-Flower-Website</h2>
                   <p>This project is a beautifully designed Flower Shop Website for the Fresh Flower Company. It showcases the company's mission, core values, and a wide variety of floral arrangements and services. The website offers users a delightful browsing experience and highlights the joy and beauty of flowers.</p>
                   <h2><b>Technologies:</b></h2>
                   <p>HTML, CSS</p>
                   <button class="view-btn" onclick="openModal('Fresh-Flower-Website', 'This project is a beautifully designed Flower Shop Website for the Fresh Flower Company. It showcases the company's mission, core values, and a wide variety of floral arrangements and services. The website offers users a delightful browsing experience and highlights the joy and beauty of flowers.', 'https://github.com/NeetuShaw/Fresh-Flower-Website')">View Project</button>
                   <button class="view-btn" onclick="flipCard(this)">Back to Front</button>
                </div>
            </div>
        </div>

<div class="flip-card">
<div class="flip-card-inner">
    <div class="flip-card-front">
        <video width="100%" height="auto" controls muted>
            <source src="videos/cake-record.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>                        
        <h2>Cake-Factory</h2>
        <button class="flip-btn" onclick="flipCard(this)">See Details</button>
    </div>
    <div class="flip-card-back">
        <h2>Cake-Factory</h2>
        <p>Welcome to the Cake Factory! This project is dedicated to creating a delightful online presence for a cake shop that specializes in crafting exquisite cakes for all occasions. Whether you're looking for a birthday cake, a wedding cake, or just a sweet treat to brighten your day, Cake Factory has something special for everyone.</p>
        <h2><b>Technologies:</b></h2>
        <p>HTML, CSS</p>
        <button class="view-btn" onclick="openModal('Cake-Factory', 'Welcome to the Cake Factory! This project is dedicated to creating a delightful online presence for a cake shop that specializes in crafting exquisite cakes for all occasions. Whether you're looking for a birthday cake, a wedding cake, or just a sweet treat to brighten your day, Cake Factory has something special for everyone.', 'https://github.com/NeetuShaw/Cake-Factory')">View Project</button>
        <button class="view-btn" onclick="flipCard(this)">Back to Front</button>
    </div>
</div>
</div>

<div class="flip-card">
<div class="flip-card-inner">
    <div class="flip-card-front">
        <video width="100%" height="auto" controls muted>
            <source src="videos/Spotify.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>                        
        <h2>Spotify-Clone-A-Comprehensive-Web-Player-Interface</h2>
        <button class="flip-btn" onclick="flipCard(this)">See Details</button>
    </div>
    <div class="flip-card-back">
        <h2>Spotify-Clone-A-Comprehensive-Web-Player-Interface</h2>
        <p>This is a web application that mimics the Spotify web player interface. It provides a music streaming platform-like layout with sections like "Home", "Search", "Your Library", and more. The design includes features like popular artists, albums, songs, charts, and podcasts.</p>
        <h2><b>Technologies:</b></h2>
        <p>HTML, CSS</p>
        <button class="view-btn" onclick="openModal('Spotify-Clone-A-Comprehensive-Web-Player-Interface', 'This is a web application that mimics the Spotify web player interface. It provides a music streaming platform-like layout with sections like "Home", "Search", "Your Library", and more. The design includes features like popular artists, albums, songs, charts, and podcasts.', 'https://github.com/NeetuShaw/Spotify-Clone-A-Comprehensive-Web-Player-Interface')">View Project</button>
        <button class="view-btn" onclick="flipCard(this)">Back to Front</button>
    </div>
</div>
</div> 
    `;
    const projectsContainer = document.querySelector('.projects-container');
    if (projectsContainer) {
        // Add the new project card to the container
        projectsContainer.innerHTML += newProjectCard;
    } else {
        console.error('Projects container not found!');
    }

    // Disable the "See More Projects" button after it has been clicked
    const loadMoreButton = document.getElementById("load-more-projects");
    loadMoreButton.disabled = true;
    loadMoreButton.textContent = "No More Projects"; // Change button text to indicate no more projects
});

// 4th part & Footer
emailjs.init('QJ6Brbs_Xe2jIGvKG');
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !number || !message) {
        alert('Please fill out all fields before submitting.');
        return;
    }

    // Simple email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

     // Sending the email using EmailJS
    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: number,
      message: message
    };

    emailjs
    .send('service_udoqpv6', 'template_s105m1e', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('Thank you for reaching out! I will get back to you soon.');
           document.getElementById('contact-form').reset(); // Clear form
        }, 
        function(error) {
           console.log('FAILED...', error);
           alert('Failed to send message. Please try again later.');
        
       });
    });



