<script src="https://code.jquery.com/jquery-3.6.1.slim.js" integrity="sha256-tXm+sa1uzsbFnbXt8GJqsgi2Tw+m4BLGDof6eUPjbtk=" crossorigin="anonymous"></script>
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

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://recipesapi2.p.rapidapi.com/recipes/ramen?maxRecipes=10",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "0ab5cd73damsha9977e2dd4af9fap1b12d6jsn551315d06ffc",
		"X-RapidAPI-Host": "recipesapi2.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
