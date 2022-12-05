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

// Initialize and add the map
// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.031 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// window.initMap = initMap;
$('#mapscript').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.162207841482!2d-122.0614438837959!3d36.98206116513918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e41a2ff8cbf4f%3A0x3a8e3b7c928320d5!2sUniversity%20of%20California%20Santa%20Cruz!5e0!3m2!1sen!2sus!4v1670204396578!5m2!1sen!2sus" width= 100% height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');

$('#path1').click(function() {
  $('#mapscript').html('<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d11958.207774915825!2d-122.06546447007096!3d36.9944667386987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d36.998351199999995!2d-122.06144479999999!4m3!3m2!1d36.9907301!2d-122.0634329!5e1!3m2!1sen!2sus!4v1670205265874!5m2!1sen!2sus" width=100% height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
});
$('#path2').click(function() {
  $('#mapscript').html('<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d5979.036455149824!2d-122.06218918379582!3d36.99532441438933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d36.992908799999995!2d-122.064388!4m3!3m2!1d36.9972393!2d-122.0556307!5e1!3m2!1sen!2sus!4v1670205646452!5m2!1sen!2sus" width=100% height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
});
$('#path3').click(function() {
  $('#mapscript').html('<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d5978.818796319191!2d-122.06188233379581!3d36.99809271423292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d36.999837!2d-122.0585524!4m3!3m2!1d36.9963306!2d-122.0588532!5e1!3m2!1sen!2sus!4v1670206552510!5m2!1sen!2sus" width=100% height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
});
