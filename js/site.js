/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
//Parrallax mouse movement Listener
document.addEventListener("mousemove", parallax);
      function parallax(event) {
        this.querySelectorAll(".grid-item").forEach((shift) => {
          const position = shift.getAttribute("value");
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerHeight - event.pageY * position) / 90;

          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }
//Default preview display of a map of UCSC
$('#mapdisplay').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.162207841482!2d-122.0614438837959!3d36.98206116513918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e41a2ff8cbf4f%3A0x3a8e3b7c928320d5!2sUniversity%20of%20California%20Santa%20Cruz!5e0!3m2!1sen!2sus!4v1670204396578!5m2!1sen!2sus" width= "100%" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
