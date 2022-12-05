
//Nav bar code
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

//searchbar
  function search(){
      let textToSearch = document.getElementById("search").value;
      let paragraph = document.getElementById("paragraph");
      let paragraph1 = document.getElementById("paragraph1");
      //let paragraph3 = document.getElementById("ul");



      textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

      let pattern = new RegExp(`${textToSearch}`,"gi");

      paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
      paragraph1.innerHTML = paragraph1.textContent.replace(pattern, match => `<mark>${match}</mark>`);
    //  paragraph3.innerHTML = paragraph3.textContent.replace(pattern, match => `<mark>${match}</mark>`);


  }

  //setting up for localStorage
  const form = document.querySelector('form');
  const ul = document.querySelector('ul');
  //const button = document.querySelector('button');
  const input = document.getElementById('user-input');
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

  localStorage.setItem('items', JSON.stringify(itemsArray));
  const data = JSON.parse(localStorage.getItem('items'));

  const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }

  document.getElementById("my-button").addEventListener("click", function () {
    //e.preventDefault();

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
  });

  data.forEach(item => {
    liMaker(item);
  });
  document.addEventListener("mousemove", parallax);
        function parallax(event) {
          this.querySelectorAll(".grid-child-element").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;

            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
        }
