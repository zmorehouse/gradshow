window.addEventListener('load', insertHeader);
window.addEventListener('load', insertFooter);

function insertHeader() {
    var content = `  
       <h1> Gradshow 2023 </h1> 
       `;
    document.querySelector('.globalheader').innerHTML = content;
  }
  
  function insertFooter() {
    var content = `  
       <h2> Gradshow Footer </h2> 
       `;
    // Find the relevant div 
    document.querySelector('.globalfooter').innerHTML = content;
  }