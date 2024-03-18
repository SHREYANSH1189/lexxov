document.addEventListener("DOMContentLoaded", function() {
  let text1 = document.getElementById("first");
  let text2 = document.getElementsByClassName("landingPage")[0].getElementsByClassName("txtContainer")[0].getElementsByClassName("second")[0];
  let text3 = document.getElementsByClassName("landingPage")[0].getElementsByClassName("txtContainer")[0].getElementsByClassName("third")[0];
  let btnContainer = document.getElementsByClassName("landingPage")[0].getElementsByClassName("btnContainer")[0]

  let triangle = document.getElementsByClassName("landingPage")[0].getElementsByClassName("trianle")[0];
  let rect = document.getElementsByClassName("landingPage")[0].getElementsByClassName("rect")[0];
  let circleOne = document.getElementsByClassName("landingPage")[0].getElementsByClassName("circleOne")[0];
  let circleSecond = document.getElementsByClassName("landingPage")[0].getElementsByClassName("circleSecond")[0];

  const menuItems = document.querySelectorAll('.pricemenu li');
  const pricingCards = document.querySelector('.pricing-cards');
  const cardTemplate = document.querySelector('.pricing-card-template');
  let test = 'webstieBtn';


// Function to handle menu item selection
  function handleMenuItemSelection(item) {
    if(item.id !== test.id){
      // Remove the 'activeElement' class from all menu items
      menuItems.forEach(menuItem => menuItem.classList.remove('activeElement'));
      // Add the 'activeElement' class to the clicked menu item
      item.classList.add('activeElement');

      menuItems.forEach(menuItem => menuItem.classList.remove('selected'));
      // Add the 'activeElement' class to the clicked menu item
      item.classList.add('selected');
      // Update pricing card content based on the clicked menu item
      updatePricingCards(item.id);
      console.log("This is the ID" , item.id)

      addPremium();
    }

     test = item
  }

// Add event listeners to each menu item
  menuItems.forEach(item => {
    let hoverTimer;

    // Mouse enter event listener
    item.addEventListener('mouseenter', () => {
      hoverTimer = setTimeout(() => {
        handleMenuItemSelection(item);
      }, 400);
    });

    // Mouse leave event listener
    item.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
    });

    // Click event listener
    item.addEventListener('click', () => {
      // Clear the hover timer if it's running
      clearTimeout(hoverTimer);
      // Handle menu item selection immediately
      handleMenuItemSelection(item);
    });
  });

  const websiteBtn = document.getElementById('websiteBtn');
  handleMenuItemSelection(websiteBtn);
  // Function to update pricing cards content
  function updatePricingCards(menuItemId) {
    let cardsHTML = '';
    if (menuItemId === 'websiteBtn') {
      cardsHTML += createPricingCard('Basic', 'FRONT-END WEBSITE SERVICES', '45,999Rs+', ['Maximum 3 pages', 'Front-end design' , 'Delivery within 3 weeks' , 'No SEO Integration']);
      cardsHTML += createPricingCard('Premium', 'FULL STACK WEBSITE DEVELOPMENT SERVICES','85,000Rs+', ['Maximum 10 pages', 'full stack development' , 'Delivery within 3 weeks' , 'Basic SEO Integration', '1 Month Free Maintenance']);
      cardsHTML += createPricingCard('Custom', 'CUSTOM WEBISTE SERVICES', '9,900Rs+', ['Maximum 4 pages', 'Involves only front-end design' , 'Delivery within 3 weeks' , 'Basic SEO Integration', 'Personlized support' ]);
    }
    else if(menuItemId === 'uiBtn'){
      cardsHTML += createPricingCard('Website', 'WEBSITE UI/UX DESIGNING', '60,000Rs+', ['Maximum 3 pages', 'Front-end design' , 'Delivery within 3 weeks' , '2 Revision']);
      cardsHTML += createPricingCard('Applications', 'APPLICATION UI/UX DESIGNING','35,000Rs+', ['Maximum 4 Screen', 'full stack development' , 'Delivery within 3 weeks' , '2 Revisions']);
      cardsHTML += createPricingCard('Custom', 'CUSTOM UI/UX SERVICES', '9,900Rs+', ['< 3 Pages / 4 Screens', 'UI/UX design service' , 'Delivery within 3 weeks' ]);
    }

    else if(menuItemId === 'logoBtn'){
      cardsHTML += createPricingCard('Starter', "Ideal for individuals and bloggers" ,'10,000Rs+', ['1 Unique logo design concept',
        '1 rounds of revisions',
        'Delivery within 1 week',
        'High-resolution files (JPEG, PNG)',
        'Ownership rights']);
      cardsHTML += createPricingCard('Business', 'Suited for small to medium sized businesses', '25,000Rs+', ['2 Unique logo design concepts',
        '3 rounds of revisions',
        'Delivery within 1 week',
        'High-resolution files (JPEG, PNG, AI)',
        'Social media kit' ]);
      cardsHTML += createPricingCard('Enterprise', 'Tailored solutions for corporate clients', '50,000Rs+', [
        '3 Premium logo design concepts',
        'Unlimited rounds of revisions',
        'Delivery within 2 weeks',
        'Vector files (AI, EPS, SVG, PDF)',
        'Full brand identity package'
      ]);
      cardsHTML += createPricingCard('Custom', 'Personalized services for unique requirements', 'Custom Quote', [
        'Dedicated project manager',
        'Comprehensive brand analysis',
        'Bespoke design solutions',
        'Flexible timeline and deliverables',
        'Exclusive rights and ownership'
      ]);
    }
    else if(menuItemId === 'seoBtn'){
      cardsHTML += createPricingCard('Starter', "Ideal for individuals and bloggers" ,'10,000Rs+', [
        'Keyword research and analysis',
        'On-page SEO optimization for up to 5 pages',
        'Basic meta tags optimization',
        'XML sitemap creation and submission']);
      cardsHTML += createPricingCard('Advanced', "Advanced solutions for large scale websites and ecommerce platforms" ,'50,000Rs+', [
        'Extensive keyword research and analysis',
        'On-page and off-page SEO optimization for up to 20 pages',
        'Advanced meta tags optimization and schema markup implementation',
        'Content creation and optimization for SEO',
        'Local SEO optimization (if applicable)',
        'Monthly performance reports and analysis']);

      cardsHTML += createPricingCard('Standard', "Comprehensive package for medium-sized websites" ,'25,000Rs+', [
        'Detailed keyword research and analysis',
        'On-page SEO optimization for up to 10 pages',
        'Advanced meta tags optimization',
        'Content optimization for target keywords',
        'Google Analytics setup and configuration']);
    }

    else if(menuItemId === 'brandingBtn'){
      cardsHTML += createPricingCard('Basic Branding', 'BASIC BRANDING SERVICES', '30,000Rs+', ['Logo design', 'Basic brand identity development', 'Delivery within 2 weeks', '2 Revision rounds']);
      cardsHTML += createPricingCard('Premium Branding', 'PREMIUM BRANDING SERVICES', '70,000Rs+', ['Custom logo design', 'Comprehensive brand identity development', 'Brand strategy consultation', 'Delivery within 4 weeks', 'Unlimited Revision rounds']);

    }

    pricingCards.innerHTML = cardsHTML;
    let cards = document.querySelectorAll(".pricing-card-template")
    let card = cards[menuItemId]
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('translateCard');
      }, index * 500); // Adjust the delay time here (in milliseconds)
    });
  }

  // Function to create pricing card HTML
  function createPricingCard(type, title, price, bulletPoints) {
    const cardClone = cardTemplate.cloneNode(true);
    console.log(cardClone); // Check if cardClone is correctly selected
    cardClone.querySelector('.pricing-card-template .cardv').textContent = type;
    cardClone.querySelector('.pricing-card-template .title').textContent = title;

    cardClone.querySelector('.pricing-card-template .price').textContent = price;

    const ul = cardClone.querySelector('ul');
    bulletPoints.forEach(point => {
      const li = document.createElement('li');

      // Create the SVG element
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "16");
      svg.setAttribute("height", "16");
      svg.setAttribute("viewBox", "0 0 16 16");

      // Add your SVG content here, for example, a checkmark icon
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M4 8l3 3 7-7");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-width", "2");
      svg.appendChild(path);

      // Append the SVG before the text content of the list item
      li.appendChild(svg);

      // Append the text content of the list item
      li.appendChild(document.createTextNode(point));

      // Append the list item to the ul element
      ul.appendChild(li);
    });
    cardClone.style.display = ''; // Show the cloned template
    return cardClone.outerHTML;
  }


  // Set "Website Development" as the default selected item
  const defaultMenuItem = document.getElementById('websiteBtn');
  defaultMenuItem.classList.add('activeElement');
  // Update pricing cards content for default item
  updatePricingCards('websiteBtn');

  function addPremium(){
    const secondCard = document.querySelector('.pricing-cards > .pricing-card-template:nth-child(2)');
    secondCard.classList.add('premium');

  }
  addPremium();


  document.addEventListener("scroll", function() {
    let scrolled = window.scrollY;

    text1.style.transform = "translateY(" + (-scrolled * 0.8) + "px)";
    text1.style.opacity = 1 - scrolled * 1.5 / window.innerHeight;

    text2.style.transform = "translateY(" + (-scrolled * 0.7) + "px)";
    text2.style.opacity = 1 - scrolled * 1.2 / window.innerHeight;

    text3.style.transform = "translateY(" + (-scrolled * 0.6) + "px)";
    text3.style.opacity = 1 - scrolled * 1.1 / window.innerHeight;


    btnContainer.style.opacity = 1 - scrolled * 4 / window.innerHeight;
  });
});


const serviceItems = document.querySelectorAll('.service');
const pricingCards = document.querySelectorAll('.pricingCardList > div');


// Call the function initially


serviceItems.forEach(item => {
  item.addEventListener('hover', function () {
    // Remove the 'active' class from all service items
    serviceItems.forEach(service => service.classList.remove('active'));
    serviceItems.forEach(service => service.style.color="white");
    // Add 'active' class to the clicked service item
    this.classList.add('active');

    // Get the target ID from the data-target attribute
    const targetId = this.getAttribute('data-target');

    // Hide all pricing cards
    pricingCards.forEach(card => card.style.display = 'none');

    // Show the pricing card with the target ID
    document.getElementById(targetId).style.display = 'block';
  });
});
