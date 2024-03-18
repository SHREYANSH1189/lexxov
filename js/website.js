const portfolioMenu = document.querySelectorAll('.portfolioSection .portfolioMenu li');
let testItem = '';
let loadingtime = 1500;
// Function to handle menu item selection

let flag =  0
function handleMenuItemSelection(item) {
  if (item.id !== testItem) {
    // Show loading screen
    const loadingStartTime = performance.now(); // Start time for loading

    // Remove the 'activePortfolio' class from all menu items
    portfolioMenu.forEach(menuItem => menuItem.classList.remove('activePortfolio'));
    // Add the 'activePortfolio' class to the clicked menu item
    item.classList.add('activePortfolio');
    document.body.style.overflow = 'hidden';

    // Update portfolio content based on the clicked menu item
    updatePortfolioWithLoading(item.id, loadingStartTime);
  }

  testItem = item.id;
}

// Add event listeners to each menu item
portfolioMenu.forEach(portfolioItem => {
  // Click event listener
  portfolioItem.addEventListener('click', () => {
    // Handle menu item selection immediately
    handleMenuItemSelection(portfolioItem);
  });
});
const btn = document.getElementById("uiPortfolio");

handleMenuItemSelection(btn)
// Function to update portfolio content with loading screen
function updatePortfolioWithLoading(menuItemId, loadingStartTime) {
  const appSection = document.querySelector('.servicePortfolio .app');
  const websiteSection = document.querySelector('.servicePortfolio .website');
  // Display loading screen
  showLoadingScreen();

  // Update portfolio content based on the clicked menu item after a delay
  setTimeout(() => {
    // Calculate loading time

    const loadingEndTime = performance.now();
    loadingtime = loadingStartTime;
    const loadingTime = loadingEndTime - loadingStartTime;
    console.log(loadingtime)
    // Update portfolio content
    updatePortfolio(menuItemId);

    // Hide loading screen after content is loaded
    hideLoadingScreen(loadingTime);
  }, loadingtime/10); // Set a delay to simulate loading time

}


// Function to update portfolio content
function updatePortfolio(menuItemId) {
  const appSection = document.querySelector('.servicePortfolio .app');
  const websiteSection = document.querySelector('.servicePortfolio .website');

  if (menuItemId === 'uiPortfolio') {
    // Display app content
    appSection.style.display = 'block';
    websiteSection.style.display = 'none';
  } else if (menuItemId === 'websitePortfolio') {
    // Display website content
    appSection.style.display = 'none';
    websiteSection.style.display = 'block';
  }
}
// Function to show loading screen
function showLoadingScreen() {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'flex';
  document.getElementsByTagName("body")[0].style.blur = "20px"
}

// Function to hide loading screen
function hideLoadingScreen(loadingTime) {
  const loadingOverlay = document.getElementById('loading-overlay');
  document.getElementsByTagName("body")[0].style.blur = "0px"

  // Calculate remaining loading time to ensure the loading screen is displayed for the appropriate duration
  const remainingTime = Math.max(0, 2000 - loadingTime);
   loadingtime = remainingTime
  // Hide loading screen after the remaining time
  setTimeout(() => {
    loadingOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';

  }, remainingTime);
}
