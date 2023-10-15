window.addEventListener('load', insertHeader);
window.addEventListener('load', insertFooter);
window.addEventListener('load', insertCallToAction);


function insertHeader() {
    var content = `  
    <h1> Gradshow 2023 </h1> 
    <nav>
    <i class="fa-solid fa-bars"></i>
    <div class="navmenupopup">
      <ul>
         <li> <a href="/"> Home </a> </li>
         <li> <a href="/"> Graduates </a> </li>
         <li> <a href="/"> About </a> </li>
         <li> <a href="/"> Acknowledgements </a> </li>
         <li> <a href="/"> Support </a> </li>
         <li> <a href="/"> Contact </a> </li>
      </ul>
    </div>
    </nav>
       `;
    document.querySelector('.globalheader').innerHTML = content;
  }
  
  function insertFooter() {
    var content = `  


    <div> 
        <h2> Gradshow Footer </h2> 
        <p> The Australian National University acknowledges, celebrates and pays our respects to the Ngunnawal and Ngambri people of the Canberra region and to all First Nations Australians on whose traditional lands we meet and work, and whose cultures are among the oldest continuing cultures in human history.
        </p>
        <p id="tagline"> ANU, 2023 All Rights Reserved | Website by Zac Morehouse </p>
    </div>
    <div> 
        <h3> Exhibition Info </h3> 
        <p> ANU Graduating Exhibition 2023 <br> <br>
        Open 10am to 4pm, seven days a week. 25th of November - 12th of December, 2022  <br> <br>
        Located at the Australian National University, Building 105, Childers St, Acton ACT
    </p>
    </div>
    <div> 
        <h3> Quick Links </h3> 
        <nav>
            <ul>
                <li> <a href="/" target="_blank"> ANU SCHOOL OF ART & DESIGN </a> </li>
                <li> <a href="/" target="_blank"> ANU COLLEGE OF ARTS & SOCIAL SCIENCES </a> </li>
                <li> <a href="/"> About Gradshow 2023 </a> </li>
                <li> <a href="/"> Contact </a> </li>
                <li> <a href="/"> Acknowledgements </a> </li>
                <li> <a href="/"> Sitemap </a> </li>
            </ul>
        </nav>
    </div>
    <div>
        <h3> Contact </h3>
        <div>
            <h4> Exhibition </h4>
            <ul> 
                <li> <i class="fa-solid fa-phone"></i> <a href="tel:+61 2 6125 5841"> +61 2 6125 5841 </a> </li>
                <li><i class="fa-solid fa-envelope"></i> <a href="mailto:soad.gallery@anu.edu.au"> soad.gallery@anu.edu.au</a> </li>
            </ul>
        </div>
        <div>
            <h4> Future Students </h4>
            <ul> 
                <li><i class="fa-solid fa-phone"></i> <a href="tel:+61 2 6125 5810"> +61 2 6125 5810</a> </li>
                <li> <i class="fa-solid fa-envelope"></i><a href="mailto:admin.somad@anu.edu.au"> admin.somad@anu.edu.au</a> </li>
            </ul>
        </div>
    </div>

       `;
    document.querySelector('.globalfooter').innerHTML = content;
  }

function insertCallToAction() {
   var content = `
   <div>
   <h2> Browse Our List Of <span id="highlighttext">2023 Graduates </span></h2>
   <div id="ctaleft">
       <h2> Or, See Their Work In Person! </h2>
   </div>

</div>
<div>
   <button> 
       See Our Full List of Graduates
       <i class="fa-solid fa-arrow-right-long"></i>
   </button>
   <button> 
       Exhibition Information
       <i class="fa-solid fa-arrow-right-long"></i>
   </button>
</div>`
   document.querySelector('.calltoaction').innerHTML = content;
}