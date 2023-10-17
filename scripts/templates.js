window.addEventListener('load', insertHeader);
window.addEventListener('load', insertFooter);
window.addEventListener('load', insertCallToAction);


function insertHeader() {
    var content = `  
    <section class="eventdetails">
    <div>
    <i class="fa-solid fa-clock" style="color: #ffffff;"></i> <p> ANU, BUILDING 105, CHILDERS STREET </p>
    </div> 
    <div>
    <i class="fa-solid fa-location-dot" style="color: #ffffff;"></i> <p> OPEN 10AM TO 4PM FROM 25/11 TO 4/12 </p>
    </div> 
    </section>
    <section class="mainnav">

    <svg id="Group_81" data-name="Group 81" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="686.284" height="146.697" viewBox="0 0 686.284 146.697">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_50" data-name="Rectangle 50" width="686.284" height="146.697" fill="none"/>
    </clipPath>
  </defs>
  <g id="Group_80" data-name="Group 80" clip-path="url(#clip-path)">
    <path id="Path_67" data-name="Path 67" d="M7.266,177.125Q0,169.255,0,154.548V90.884q0-14.7,7.266-22.577t21.106-7.871q13.839,0,21.106,7.871t7.266,22.577v10.38H38.752V89.673q0-11.937-9.861-11.937T19.03,89.673v66.259q0,11.766,9.861,11.764t9.861-11.764v-23.7H29.237v-17.3H56.744v39.617q0,14.707-7.266,22.577T28.372,185q-13.843,0-21.106-7.871" transform="translate(0 -38.299)" fill="#fff"/>
    <path id="Path_68" data-name="Path 68" d="M188.448,65.159h28.2q14.7,0,21.452,6.833t6.747,21.02v7.439q0,18.859-12.456,23.874v.346a14.861,14.861,0,0,1,9.774,8.477q2.854,6.4,2.854,17.127v21.279a80.805,80.805,0,0,0,.346,8.391,20.957,20.957,0,0,0,1.73,6.314H227.719a27.661,27.661,0,0,1-1.384-5.536,82.788,82.788,0,0,1-.346-9.342V149.237q0-8.3-2.682-11.591t-9.255-3.287h-6.574v51.9h-19.03Zm25.95,51.9q5.709,0,8.563-2.941t2.855-9.861V94.915q0-6.572-2.336-9.515t-7.352-2.941h-8.65v34.6Z" transform="translate(-119.422 -41.292)" fill="#fff"/>
    <path id="Path_69" data-name="Path 69" d="M384.815,65.159h25.777l19.722,121.1h-19.03l-3.46-24.047v.346H386.2l-3.46,23.7H365.093Zm20.76,80.964L397.1,86.265h-.346l-8.3,59.858Z" transform="translate(-231.365 -41.292)" fill="#fff"/>
    <path id="Path_70" data-name="Path 70" d="M568.18,65.159h29.064q14.183,0,21.279,7.612t7.093,22.317V156.33q0,14.707-7.093,22.317t-21.279,7.612H568.18Zm28.718,103.8q4.671,0,7.18-2.768t2.509-9V94.223q0-6.228-2.509-9t-7.18-2.768H587.21v86.5Z" transform="translate(-360.065 -41.292)" fill="#fff"/>
    <path id="Path_71" data-name="Path 71" d="M758.054,177.125q-7.1-7.87-7.093-22.577v-6.92h17.992v8.3q0,11.766,9.861,11.764,4.841,0,7.352-2.854t2.509-9.256a25.662,25.662,0,0,0-3.46-13.407q-3.462-5.794-12.8-13.926-11.767-10.38-16.435-18.771a38.27,38.27,0,0,1-4.671-18.943q0-14.358,7.266-22.231t21.106-7.871q13.664,0,20.673,7.871t7.006,22.577V95.9H789.367V89.673q0-6.228-2.422-9.082t-7.093-2.854q-9.517,0-9.515,11.591a22.848,22.848,0,0,0,3.547,12.283q3.543,5.709,12.888,13.84,11.937,10.38,16.435,18.857a41.867,41.867,0,0,1,4.5,19.895q0,14.881-7.353,22.836T778.987,185q-13.842,0-20.933-7.871" transform="translate(-475.896 -38.299)" fill="#fff"/>
    <path id="Path_72" data-name="Path 72" d="M935.632,65.159h19.03v49.305h20.414V65.159h19.03v121.1h-19.03v-54.5H954.662v54.5h-19.03Z" transform="translate(-592.925 -41.292)" fill="#fff"/>
    <path id="Path_73" data-name="Path 73" d="M1137.662,177.037q-7.44-7.955-7.439-22.49V90.883q0-14.532,7.439-22.49t21.452-7.958q14.013,0,21.453,7.958t7.439,22.49v63.664q0,14.532-7.439,22.49T1159.114,185q-14.013,0-21.452-7.958m31.313-21.279V89.672q0-11.937-9.861-11.937t-9.861,11.937v66.086q0,11.937,9.861,11.937t9.861-11.937" transform="translate(-716.24 -38.299)" fill="#fff"/>
    <path id="Path_74" data-name="Path 74" d="M1310.644,65.159h18.338l8.477,93.074h.346l9-93.074h20.76l9,93.074h.346l8.477-93.074h16.435l-12.283,121.1h-23.7l-8.65-81.656h-.346l-8.65,81.656h-25.258Z" transform="translate(-830.576 -41.292)" fill="#fff"/>
    <path id="Path_75" data-name="Path 75" d="M1589.893,207.126q0-10.8,3.455-18.5t12.379-17.058q8.779-9.356,12.164-15.979a30,30,0,0,0,3.383-13.82q0-6.478-2.087-9a7.5,7.5,0,0,0-6.118-2.519q-8.2,0-8.205,9.933v10.8h-14.971V141.2q0-12.234,6.046-18.786t17.562-6.55q11.514,0,17.562,6.55t6.046,18.786a39.813,39.813,0,0,1-4.391,17.994q-4.393,8.782-15.187,20.153-7.054,7.486-9.5,12.164a21.262,21.262,0,0,0-2.447,10.005v2.159h30.086v14.4h-45.777Z" transform="translate(-1007.54 -73.422)" fill="#b16f1c"/>
    <path id="Path_76" data-name="Path 76" d="M1750.707,213.028q-5.975-6.478-5.974-18.57v-8.205H1759.7v8.925q0,9.933,8.205,9.933a7.491,7.491,0,0,0,6.118-2.519q2.085-2.517,2.087-8.853v-8.205q0-6.91-2.447-9.861t-7.918-2.951h-5.326v-14.4h5.758q4.75,0,7.125-2.447t2.376-8.206v-7.342q0-5.182-2.16-7.629a7.3,7.3,0,0,0-5.758-2.447q-7.631,0-7.63,9.357v6.622h-14.971v-5.326q0-12.092,5.974-18.57t17.2-6.478q11.37,0,17.274,6.406t5.9,18.5v3.6q0,8.205-2.735,13.172a15.522,15.522,0,0,1-8.493,7.125v.288a15.88,15.88,0,0,1,8.925,7.486q2.733,5.182,2.735,13.243V194.6q0,12.092-5.974,18.5t-17.634,6.406q-11.66,0-17.634-6.478" transform="translate(-1105.665 -73.423)" fill="#b16f1c"/>
    <path id="Path_77" data-name="Path 77" d="M394.472,31.447h-2.255c.019-.126-.083-.147-.162-.193a2.028,2.028,0,0,1-1.04-2.416c.267-1.252.519-2.506.791-3.756a.528.528,0,0,0-.145-.536,2.458,2.458,0,0,1,.166-3.624.632.632,0,0,0,.212-.527c0-2.549-.01-5.1.006-7.647a.488.488,0,0,0-.383-.534c-.789-.3-1.565-.629-2.357-.921A1.334,1.334,0,0,1,388.272,10c-.01-.638.31-1.045,1.044-1.335.93-.367,1.863-.727,2.793-1.094Q401.151,4,410.192.421a5.612,5.612,0,0,1,4.253,0q1.57.616,3.139,1.237,8.758,3.465,17.519,6.924a2.18,2.18,0,0,1,1.278,1v.751a1.765,1.765,0,0,1-1.106,1c-1.591.606-3.169,1.245-4.752,1.872q-7.949,3.149-15.9,6.3a5.982,5.982,0,0,1-4.57.012q-6.184-2.453-12.368-4.9c-.926-.367-1.853-.729-2.794-1.1a.9.9,0,0,0-.038.163q0,3.4-.006,6.8a.481.481,0,0,0,.183.4,2.45,2.45,0,0,1,.2,3.685.537.537,0,0,0-.116.546c.276,1.3.541,2.6.812,3.9a2.042,2.042,0,0,1-.427,1.757,3.075,3.075,0,0,1-1.026.689" transform="translate(-246.054 0)" fill="#fff"/>
    <path id="Path_78" data-name="Path 78" d="M413.054,49.522c0-1.235.015-2.471-.008-3.706-.008-.426.1-.448.466-.3,3.932,1.566,7.863,3.133,11.809,4.664a8.225,8.225,0,0,0,6.295-.314c3.659-1.491,7.344-2.917,11.013-4.381.29-.115.375-.09.373.24-.01,2.439,0,4.879-.009,7.318a4.319,4.319,0,0,1-1.983,3.4,13.453,13.453,0,0,1-4.925,2.334,30.037,30.037,0,0,1-16.659-.164,11.361,11.361,0,0,1-5.247-2.964,3.866,3.866,0,0,1-1.13-2.838c.029-1.094.006-2.189.006-3.284" transform="translate(-261.753 -28.784)" fill="#fff"/>
  </g>
</svg>



    <nav>

      <ul>
         <li> <a href="/"> Home </a> </li>
         <li> <a href="/graduates.html"> Graduates </a> </li>
         <li> <a href="/about.html"> About </a> </li>
         <li> <a href="/acknowledgements.html"> Acknowledgements </a> </li>
         <li> <a href="/support.html"> Support </a> </li>
         <li> <a href="/contact.html"> Contact </a> </li>
      </ul>

    </nav>
    </section>
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
   <div class="desktop">
   <div id="ctaright">
   <h2> Browse Our List Of <span id="highlighttext">2023 Graduates </span></h2>
   </div>
   <div id="ctaleft">
       <h2> Or, See Their Work In Person! </h2>
   </div>
    </div>
    <div class="mobile">
    <h2> Browse Our List Of <span id="highlighttext">2023 Graduates </span> Or, See Their Work In Person! </h2>

    </div>

<div>
   <button> 
       See Our List of Graduates
       <i class="fa-solid fa-arrow-right-long"></i>
   </button>
   <button> 
       Exhibition Information
       <i class="fa-solid fa-arrow-right-long"></i>
   </button>
</div>`
    document.querySelector('.calltoaction').innerHTML = content;

}