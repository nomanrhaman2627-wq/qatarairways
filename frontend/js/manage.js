'use strict';

function retrieveBooking() {
  const ref = document.getElementById('bookingRef').value.trim();
  const lname = document.getElementById('lastName').value.trim();

  // Assuming last name is the second part of the name
  const expectedLname = bookingData.name.split(' ')[1].toLowerCase();

  if (ref === bookingData.reference && lname.toLowerCase() === expectedLname) {
    // Redirect to booking details page
    window.location.href = 'booking.html';
  } else {
    alert('Invalid booking reference or last name. Please try again.');
  }
}