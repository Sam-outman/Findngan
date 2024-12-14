// Job data (add or update jobs here)
const jobs = [
    {
        title: "Barista at Coffee Shop",
        tags: "Customer Service, Coffee",
        salary: "15",
        details: "Location: Downtown Cafe\nTime: 8 AM - 2 PM\nWork Hours: 6 hours/day"
    },
    {
        title: "Delivery Driver",
        tags: "Logistics, Driving",
        salary: "20",
        details: "Location: City Center\nTime: 9 AM - 5 PM\nWork Hours: 8 hours/day"
    }
];

// Function to render job listings
function renderJobs() {
    const jobList = document.getElementById('job-list');
    jobList.innerHTML = ""; // Clear existing jobs

    jobs.forEach(job => {
        const jobHTML = `
            <div class="job">
                <h3>${job.title}</h3>
                <p><strong>Tags:</strong> ${job.tags}</p>
                <p><strong>Salary:</strong> $${job.salary}/hour</p>
                <p><strong>Details:</strong> ${job.details.replace(/\n/g, '<br>')}</p>
            </div>
        `;
        jobList.innerHTML += jobHTML;
    });
}

// Render jobs on page load
document.addEventListener('DOMContentLoaded', renderJobs);

