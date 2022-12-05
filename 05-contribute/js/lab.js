document.getElementById("my-button").addEventListener("click", function() {
    var max = document.getElementById("user-input").value;
      $("#output").append("<p>" + max + "</p>");


  });
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  function search(){
      let textToSearch = document.getElementById("search").value;
      let paragraph = document.getElementById("paragraph");


      textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

      let pattern = new RegExp(`${textToSearch}`,"gi");

      paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
  }
