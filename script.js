document.getElementById("button1").addEventListener("click", function() {
    // Get today's date
    const today = new Date();

    // Set Christmas date (December 25 of the current year)
    const christmas = new Date(today.getFullYear(), 11, 25);

    // If Christmas has already passed this year, set it for next year
    if (today > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

    // Calculate difference in milliseconds
    const diff = christmas - today;

    // Convert to days
    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Show alert
    alert("There are " + daysLeft + " days until Christmas!");
});
