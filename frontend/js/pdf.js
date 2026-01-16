'use strict';

/**
 * Downloads an QATAR AIRWAYS E-ticket as a PDF document.
 * 
 * Generates a Qatar Airways e-ticket receipt PDF containing passenger information,
 * flight segments, and fare details. The PDF is automatically saved to the user's device.
 * 
 * @function downloadTicket
 * @returns {void}
 * 
 * @requires jspdf - jsPDF library must be loaded in the window object
 * @requires bookingData - Global object containing ticket information with properties:
 *   @property {string} bookingData.name - Passenger name
 *   @property {string} bookingData.reference - Booking reference number
 *   @property {string} bookingData.ticket - Ticket number
 *   @property {string} bookingData.status - Booking status
 *   @property {Array} bookingData.flights - Array of flight objects with properties:
 *     @property {string} from - Departure airport code
 *     @property {string} to - Arrival airport code
 *     @property {string} date - Flight date
 *     @property {string} seat - Seat assignment
 *     @property {string} class - Passenger class
 *   @property {string} bookingData.fare - Fare basis information
 *   @property {string} bookingData.baggage - Baggage allowance details
 * 
 * @example
 * // Call the function to generate and download the ticket PDF
 * downloadTicket();
 */
function downloadTicket(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('p','mm','a4');

  // Header
  doc.setFontSize(18);
  doc.text('QATAR AIRWAYS E-TICKET RECEIPT', 14, 20);
  doc.setFontSize(10);
  doc.text('', 150, 20);

  // Passenger info table
  let y = 35;
  doc.setFontSize(12);
  doc.text('Passenger Information', 14, y);
  y += 6;
  doc.autoTable({
    startY: y,
    theme: 'grid',
    styles: { fontSize: 10 },
    head: [['Field', 'Details']],
    body: [
      ['Name', bookingData.name],
      ['Booking Reference', bookingData.reference],
      ['Ticket Number', bookingData.ticket],
      ['Status', bookingData.status]
    ]
  });

  // Flights table
  y = doc.lastAutoTable.finalY + 10;
  doc.text('Flight Segments', 14, y);
  y += 6;

  doc.autoTable({
    startY: y,
    theme: 'grid',
    styles: { fontSize: 10 },
    head: [['From', 'To', 'Date', 'Seat', 'Class']],
    body: bookingData.flights.map(f => [f.from, f.to, f.date, f.seat, f.class])
  });

  // Fare table
  y = doc.lastAutoTable.finalY + 10;
  doc.text('Fare & Baggage', 14, y);
  y += 6;

  doc.autoTable({
    startY: y,
    theme: 'grid',
    styles: { fontSize: 10 },
    head: [['Item', 'Details']],
    body: [
      ['Fare Basis', bookingData.fare],
      ['Baggage Allowance', bookingData.baggage]
    ]
  });

  // Footer
  doc.setFontSize(9);
  doc.text('This document is electronically generated and valid without signature.', 14, 285);

  doc.save('QATAR AIRWAYS E_Ticket.pdf');
}
