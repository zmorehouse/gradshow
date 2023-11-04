$(document).ready(function () { 
    const galleryItems = $('.gallery-item');
    const selectSort = $('#sort-alphabetically');
    const searchInput = $('#search');

  
    function extractLastName(item) {
        const fullName = item.find('h3').text();
        const lastName = fullName.split(' ').pop();
        return lastName.toLowerCase();
    }

    function sortAscending() {
        galleryItems.sort((a, b) => {
            const lastNameA = extractLastName($(a));
            const lastNameB = extractLastName($(b));
            return lastNameA.localeCompare(lastNameB);
        });
        $('.gallery').append(galleryItems);
    }

    function sortDescending() {
        galleryItems.sort((a, b) => {
            const lastNameA = extractLastName($(a));
            const lastNameB = extractLastName($(b));
            return lastNameB.localeCompare(lastNameA);
        });
        $('.gallery').append(galleryItems);
    }

    sortAscending();

    selectSort.on('change', function () {
        const selectedOption = $(this).val();
        if (selectedOption === 'asc') {
            sortAscending();
        } else if (selectedOption === 'desc') {
            sortDescending();
        }
    });

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