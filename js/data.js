const bookingData = {
  name: 'Kamal Hossain',
  reference: 'YJGO4T',
  ticket: '152-5410364821',
  status: 'OK',
  fare: 'KLEEORSF',
  baggage: '25 KG',
  flights: [
    {
      from: 'Riyadh (RUH)',
      to: 'Dubai (DXB)',
      date: 'Wed, 21 Jan 2026 14:00 – 17:30',
      seat: '14A',
      class: 'Economy (E)'
    },
    {
      from: 'Dubai (DXB)',
      to: 'Melbourne (MEL)',
      date: 'Wed, 21 Jan 2026 20:00 – Thu, 22 Jan 2026 08:00',
      seat: '16A',
      class: 'Economy (E)'
    }
  ]
};

function loadBooking(){
  document.getElementById('pName').innerText = bookingData.name;
  document.getElementById('pRef').innerText = bookingData.reference;
  document.getElementById('pTicket').innerText = bookingData.ticket;
  document.getElementById('pStatus').innerText = bookingData.status;
  document.getElementById('pFare').innerText = bookingData.fare;
  document.getElementById('pBag').innerText = bookingData.baggage;

  const table = document.getElementById('flightTable');
  bookingData.flights.forEach(f => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${f.from}</td><td>${f.to}</td><td>${f.date}</td><td>${f.seat}</td><td>${f.class}</td>`;
    table.appendChild(row);
  });
}
