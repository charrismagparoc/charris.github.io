document.addEventListener("DOMContentLoaded", () => {
    fetch("https://charrismagparoc.github.io/json.github.io/courses.json")
        .then(response => response.json())
        .then(data => {
            courses = data.courses; // Store courses globally
            displayCourses(courses);
        })
        .catch(error => console.error("Error fetching JSON:", error));
});

let courses = []; // Global variable for storing courses

function displayCourses(courses) {
    const tableBody = document.getElementById("course-table-body");
    tableBody.innerHTML = ""; // Clear previous content

    if (courses.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center;">No results found</td></tr>`;
        return;
    }

    courses.forEach((course, index) => {
        let row = `
            <tr>
                <td>${course.year_level} Year - ${course.sem} Semester</td>
                <td>${course.code}</td>
                <td>${course.description}</td>
                <td>${course.credit}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function filterCourses() {
    const searchText = document.getElementById("search-bar").value.toLowerCase();
    const filteredCourses = courses.filter(course =>
        course.description.toLowerCase().includes(searchText) ||
        course.code.toLowerCase().includes(searchText) ||
        course.year_level.toLowerCase().includes(searchText) ||
        course.sem.toLowerCase().includes(searchText)
    );
    displayCourses(filteredCourses);
}
