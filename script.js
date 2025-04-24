let branchPageContent = '';
let registerPageContent = '';

  function loginUser(event) {
    event.preventDefault(); // Prevents form from submitting normally
    // Optionally, validate email/password here
    window.location.href = "file:///C:/Users/itsme/OneDrive/Desktop/project/tige1r_files/polytechniclogin/project/ex/branch.html"; // Replace with your actual branch page name
  }



function loginUser(event) {
  event.preventDefault();
  document.querySelector('.form-container').style.display = 'none';
  document.querySelector('.branches-container').style.display = 'block';

  // Save the branch page content for navigation later
  branchPageContent = document.querySelector('.branches-container').outerHTML;
}

// Get the buttons and the body element
const computerScienceBtn = document.getElementById('computerScienceBtn');
const civilEngineeringBtn = document.getElementById('civilEngineeringBtn');
const automobileEngineeringBtn = document.getElementById('AutomobilEngineering');
const electronicAndCommunicationBtn = document.getElementById('ElectricalandElectronicsEngineering');
const electronicscommunicationBtn = document.getElementById('Electronicscommunication');
const informationScienceBtn = document.getElementById('Informationscience');
const body = document.body;





  function goBack() {
    // Use JavaScript to go back to previous page
    window.history.back();
  }



function showBranchContent(branch) {
    // Store the selected branch in localStorage
    localStorage.setItem('selectedBranch', branch);
  
    // Redirect using a relative path (don't use Windows-style file paths)
    window.location.href ='file:///C:/Users/itsme/OneDrive/Desktop/project/tige1r_files/polytechniclogin/project/ex/branch.html';
  }
  
 
  