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

const searchInput = document.querySelector('.input')

searchInput.addEventListener("input", (e) => {
      // inside, we will need to achieve a few things:
      // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
      let search = e.target.value

      // 2. check: if input exists and if input is larger than 0
      if (value && value.trim().length > 0) {
        // 3. redefine 'value' to exclude white space and change input to all lowercase
        value = value.toLowerCase()
        // 4. return the results only if the value of the search is included in the person's name
        // we need to write code (a function for filtering through our data to include the search input value)
      } else {
        console.log("Error:", textStatus, errorThrown);
        // 5. return nothing
        // input is invalid -- show an error message or show no results

      }

      // Using the core $.ajax() method
      $.ajax({
        // The URL for the request (from the api docs)
        url: "https://recipesapi2.p.rapidapi.com/recipes/" + encodeURIComponent(value),
        // The data to send (will be converted to a query string)
        data: {
          // here is where any data required by the api
          //   goes (check the api docs)
          X - RapidAPI - Key: '0ab5cd73damsha9977e2dd4af9fap1b12d6jsn551315d06ffc',
          X - RapidAPI - Host: 'recipesapi2.p.rapidapi.com'
        },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
          // do stuff
          console.log(data);
          var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
          $("#output").append("<h2>" + data.name)
          $("#output").append("<img src=" + data.image + ">");
          $("#output").append("<p>" + data.ingredients);
          $("#output").append("<p>" + data.instructions);

        },
        // What we do if the api call fails
        error: function(jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
        }
      })
    }

    function noResults() {
      // create an element for the error; a list item ("li")
      const error = document.createElement('li')
      // adding a class name of "error-message" to our error element
      error.classList.add('error-message')

      // creating text for our element
      const text = document.createTextNode('No results found. Sorry!')
      // appending the text to our element
      error.appendChild(text)
      // appending the error to our list element
      list.appendChild(error)
    }

    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://random-recipes.p.rapidapi.com/ai-quotes/%7Bid%7D",
      "method": "GET",
      "headers": {
        "X-RapidAPI-Key": "0ab5cd73damsha9977e2dd4af9fap1b12d6jsn551315d06ffc",
        "X-RapidAPI-Host": "random-recipes.p.rapidapi.com"
      }
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
      var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
      $("#damn").append("<h2>" + data.title)
      $("#damn").append("<img src=" + data.image + ">");
      $("#damn").append("<a href=" + data.ingredients + ">");
    });
