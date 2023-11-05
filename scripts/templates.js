// This script is used to inject the Footer, Header and CTA into each page. This ensures that changes only need to be made in the one spot.
// I've emailed Pia about this and she said it was ok provided the HTML is clear - please view the content = '...' sections for the relevant HTML.

window.addEventListener('load', function() { // Ensure the page content is loaded before running the functions.
    insertHeader();
    insertFooter();
    insertCallToAction();
});

// Function to insert the header 
function insertHeader() {
    var globalHeader = document.querySelector('.globalheader'); // Find the relevant section to add the HTML
    if (!globalHeader) {
        return; 
    }

    // Relevant HTML being injected
    var content = `
    <section class="eventdetails">
    <div>
        <i class="fa-solid fa-clock" style="color: #ffffff"></i>
        <p>ANU, BUILDING 105, CHILDERS STREET</p>
    </div>
    <div>
        <i class="fa-solid fa-location-dot" style="color: #ffffff"></i>
        <p>OPEN 10AM TO 4PM FROM 25/11 TO 4/12</p>
    </div>
</section>

<section class="mainnav">
    <a href="index.html" class="menulogo">
        <img src="images/logos/gradshowlogo.png" alt="Gradshow 2023 Logo" />
    </a>

    <div class="desktopnav"> <!-- The full width navigation being used on the desktop -->
        <nav>
            <ul>
                <li><a href="index.html"> Home </a></li>
                <li><a href="about.html"> About </a></li>
                <li><a href="acknowledgements.html"> Acknowledgements </a></li>
                <li><a href="support.html"> Support </a></li>
                <li><a href="contact.html"> Contact </a></li>
                <li>
                    <a href="graduates.html" class="graduatesbutton">
                        Meet Our Graduates</a>
                </li>
            </ul>
        </nav>
    </div>

    <div class="mobilenav">
        <!-- The mobile navigation on the tablet and mobile. This consists of a hamburger toggle and popout -->

        <!-- A checkbox that provides the hamburger functionality for accessibility purposes -->
        <input class="checkbox" type="checkbox" id="hamburger-toggle" aria-label="Toggle Navigation" />

        <label class="hamburger" for="hamburger-toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </label>

        <!-- The popout menu that appears when the hamburger is clicked -->
        <div class="pulloutmenu">
            <img src="images/logos/anu-icon.png" alt="ANU Logo" class="logo" />
            <nav>
                <ul>
                    <li><a href="index.html"> Home </a></li>
                    <li><a href="about.html"> About </a></li>
                    <li><a href="acknowledgements.html"> Acknowledgements </a></li>
                    <li><a href="support.html"> Support </a></li>
                    <li><a href="contact.html"> Contact </a></li>
                    <li><a href="graduates.html"> Meet Our Graduates</a></li>
                </ul>
            </nav>
            <hr />
            <div class="pullouteventdetails">
                <p>25 NOVEMBER 2023 - 4 DECEMBER 2023</p>
                <p>OPEN DAILY 10AM - 4PM</p>
                <p>
                    AUSTRALIAN NATIONAL UNIVERSITY <br />BUILDING 105, CHILDERS STREET, ACTON
                </p>
            </div>
        </div>
    </div>
</section>

    `;
    globalHeader.innerHTML = content;
}

// Function to insert the footer 
function insertFooter() {
    var globalFooter = document.querySelector('.globalfooter'); // Find the relevant section to add the HTML
    if (!globalFooter) {
        return; 
    }

    // Relevant HTML being injected
    var content = ` 
    <div>
    <div class="footerlogos">
        <img src="images/logos/anu-icon.png" alt="ANU Logo" id="anulogo" />
        <a href="index.html">
            <img src="images/logos/gradshowlogo.png" alt="Gradshow 2023 Logo" id="gradshowlogo" />
        </a>
    </div>
    <p>
        The Australian National University acknowledges, celebrates and pays our
        respects to the Ngunnawal and Ngambri people of the Canberra region and to
        all First Nations Australians on whose traditional lands we meet and work,
        and whose cultures are among the oldest continuing cultures in human
        history.
    </p>
    <p id="tagline">ANU, 2023 All Rights Reserved | Website by Zac Morehouse</p>
</div>
<div>
    <h3>Exhibition Info</h3>
    <p>
        ANU Graduating Exhibition 2023 <br />
        <br />
        Open 10am to 4pm, seven days a week. 25th of November - 12th of December,
        2022 <br />
        <br />
        Located at the Australian National University, Building 105, Childers St,
        Acton ACT
    </p>
</div>
<div>
    <h3>Quick Links</h3>
    <nav>
        <ul>
            <li>
                <a href="https://soad.cass.anu.edu.au/" target="_blank">
                    ANU School of Art & Design
                </a>
            </li>
            <li>
                <a href="https://cass.anu.edu.au/" target="_blank">
                    ANU College of Arts
                </a>
            </li>
            <li><a href="about.html"> About Gradshow 2023 </a></li>
            <li><a href="contact.html"> Events </a></li>
            <li><a href="contact.html"> Contact </a></li>
            <li><a href="acknowledgements.html"> Acknowledgements </a></li>
        </ul>
    </nav>
</div>
<div>
    <h3>Contact</h3>
    <div>
        <h4>Exhibition</h4>
        <ul>
            <li>
                <a href="tel:+61 2 6125 5841">
                    <i class="fa-solid fa-phone"></i> +61 2 6125 5841
                </a>
            </li>
            <li>
                <a href="mailto:soad.gallery@anu.edu.au"><i class="fa-solid fa-envelope"></i>
                    soad.gallery@anu.edu.au</a>
            </li>
        </ul>
    </div>
    <div>
        <h4>Future Students</h4>
        <ul>
            <li>
                <a href="tel:+61 2 6125 5810"><i class="fa-solid fa-phone"></i> +61 2 6125 5810</a>
            </li>
            <li>
                <a href="mailto:admin.somad@anu.edu.au">
                    <i class="fa-solid fa-envelope"></i>admin.somad@anu.edu.au</a>
            </li>
        </ul>
    </div>
</div>
    `;
    globalFooter.innerHTML = content;
}

// Function to insert the CTA 
function insertCallToAction() {
    var callToAction = document.querySelector('.calltoaction'); // Find the relevant section to add the HTML
    if (!callToAction) {
        return; 
    }

    // Relevant HTML being injected
    var content = `
    <div class="large">
    <div id="ctaright">
        <h2> Browse Our List Of <span id="highlighttext">2023 Graduates </span></h2>
    </div>
    <div id="ctaleft">
        <h2> Or, See Their Work In Person! </h2>
    </div>
</div>
<div class="responsive"> <!-- The CTA text as a full H2 rather than two columns to be used on smaller viewports -->
    <h2> Browse Our List Of <span id="highlighttext">2023 Graduates </span> Or, See Their Work In Person! </h2>
</div>

<div>
    <a href="graduates.html">
        See Our List of Graduates
        <i class="fa-solid fa-arrow-right-long"></i>
    </a>
    <a href="contact.html">
        Exhibition Information
        <i class="fa-solid fa-arrow-right-long"></i>
    </a>
</div>`;
    callToAction.innerHTML = content;
}


