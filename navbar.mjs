document.getElementById('hamburger-menu').addEventListener('click', function() {
  const menu = document.getElementById('navlinks');
  menu.classList.toggle('show-menu');
  
  console.log('Current class list:', menu.classList); // For å sjekke klasser
});