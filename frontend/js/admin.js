'use strict';

const USER = 'Agent2026';
const PASS = 'Agent@2627';

const user = document.getElementById('user');
const pass = document.getElementById('pass');
const nameInput = document.getElementById('name');
const ref = document.getElementById('ref');
const ticket = document.getElementById('ticket');
const fare = document.getElementById('fare');
const bag = document.getElementById('bag');
const f1from = document.getElementById('f1from');
const f1to = document.getElementById('f1to');
const f1date = document.getElementById('f1date');
const f1seat = document.getElementById('f1seat');
const f1class = document.getElementById('f1class');

function login(){
  if(user.value === USER && pass.value === PASS){
    document.getElementById('loginBox').classList.add('hidden');
    document.getElementById('adminBox').classList.remove('hidden');
  } else {
    alert('Invalid agent credentials');
  }
}

function saveTicket(){
  bookingData.name = nameInput.value || bookingData.name;
  bookingData.reference = ref.value || bookingData.reference;
  bookingData.ticket = ticket.value || bookingData.ticket;
  bookingData.fare = fare.value || bookingData.fare;
  bookingData.baggage = bag.value || bookingData.baggage;

  bookingData.flights[0] = {
    from: f1from.value,
    to: f1to.value,
    date: f1date.value,
    seat: f1seat.value,
    class: f1class.value
  };

  alert('Demo ticket updated. Refresh booking page to see changes.');
}
