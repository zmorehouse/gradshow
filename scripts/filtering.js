// This script is used to control the filtering functionality. It's used on the graduates page.
document.addEventListener('DOMContentLoaded', function () {  // Ensure the page content is loaded before running the function.

    // 1) Get the relevant page elements and store them in variables
    const galleryItems = document.querySelectorAll('.gallery-item');
    const selectSort = document.getElementById('sort-alphabetically');
    const searchInput = document.getElementById('search');

    // 2) Create a function to extract the last name from the gallery item
    function extractLastName(item) {
        const fullName = item.querySelector('h3').textContent; // Grab the graduate name from the items heading
        const lastName = fullName.split(' ').pop();
        return lastName.toLowerCase();
    }

    // 3) Create a function to sort the gallery items in ascending order
    function sortAscending() {
        const sortedItems = Array.from(galleryItems).sort((a, b) => {
            const lastNameA = extractLastName(a);
            const lastNameB = extractLastName(b);
            return lastNameA.localeCompare(lastNameB); // Compare each graduates last name and order appropriately
        });
        const gallery = document.querySelector('.gallery');
        sortedItems.forEach(item => gallery.appendChild(item)); // Append each item to the gallery in the correct order
    }

    // 4) Create a function to sort the gallery items in descending order. This is simply the opposite of the above function
    function sortDescending() {
        const sortedItems = Array.from(galleryItems).sort((a, b) => {
            const lastNameA = extractLastName(a);
            const lastNameB = extractLastName(b);
            return lastNameB.localeCompare(lastNameA); // Compare each graduates last name and order appropriately
        });
        const gallery = document.querySelector('.gallery');
        sortedItems.forEach(item => gallery.appendChild(item)); // Append each item to the gallery in the correct order
    }

    // 5) Add an event listener to the select element. When the value changes, run the relevant function
    selectSort.addEventListener('change', function () {
        const selectedOption = this.value;
        if (selectedOption === 'asc') {
            sortAscending();
        } else if (selectedOption === 'desc') {
            sortDescending();
        }
    });

    // 6) Add an event listener to the search input. When the value changes, filter the gallery appropriately.
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();

        // Iterate over the gallery items
        galleryItems.forEach(function (item) {
            const fullName = item.querySelector('h3').textContent.toLowerCase();

            if (fullName.includes(searchTerm)) { // Check if the search term is included in the graduates name and apply the relevant styling
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    sortAscending(); // Load the gallery initially in ascending order
});
