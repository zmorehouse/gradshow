$(document).ready(function () {
    const galleryItems = $('.gallery-item');
    const selectSort = $('#sort-alphabetically');
    const searchInput = $('#search');

    // Define a function to extract last names from the <h3> elements.
    function extractLastName(item) {
        const fullName = item.find('h3').text();
        const lastName = fullName.split(' ').pop();
        return lastName.toLowerCase();
    }

    // Sort the gallery items by last name in ascending order.
    function sortAscending() {
        galleryItems.sort((a, b) => {
            const lastNameA = extractLastName($(a));
            const lastNameB = extractLastName($(b));
            return lastNameA.localeCompare(lastNameB);
        });
        $('.gallery').append(galleryItems);
    }

    // Sort the gallery items by last name in descending order.
    function sortDescending() {
        galleryItems.sort((a, b) => {
            const lastNameA = extractLastName($(a));
            const lastNameB = extractLastName($(b));
            return lastNameB.localeCompare(lastNameA);
        });
        $('.gallery').append(galleryItems);
    }

    // Initially, sort in ascending order.
    sortAscending();

    // Handle changes in the select box to trigger sorting.
    selectSort.on('change', function () {
        const selectedOption = $(this).val();
        if (selectedOption === 'asc') {
            sortAscending();
        } else if (selectedOption === 'desc') {
            sortDescending();
        }
    });

    // Handle input in the search field and filter gallery items.
    searchInput.on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
        galleryItems.each(function () {
            const fullName = $(this).find('h3').text().toLowerCase();
            if (fullName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});