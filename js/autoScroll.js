document.addEventListener('DOMContentLoaded', function () {
  const sectionIds = {
    'services': document.querySelector('.serviceSection'),
    'pricing': document.querySelector('.pricingSection'),
    'portfolio': document.querySelector('.portfolioSection'),
    'contactus': document.querySelector('.info')
    // Add more sections as needed
  };

  const links = document.querySelectorAll('.navBar .menuList .menu a');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('id').substring(0);
      console.log(targetId)

      const targetSection = sectionIds[targetId];
      console.log(targetSection)
      console.log(targetSection.offsetTop)
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
    const rows = document.querySelectorAll('.row');
    let currentPosition = 0;

    function moveItems() {
      currentPosition -= 0.2;
      rows.forEach(row => {
        row.style.transform = `translateX(${currentPosition}px)`;
      });

      if (currentPosition <= -400) {
        rows.forEach(row => {
          const firstItem = row.querySelector('.item');
          const newItem = firstItem.cloneNode(true);
          row.appendChild(newItem);
          firstItem.remove();
          console.log("Its getting appended");
        });
        currentPosition += 400;
      }

      requestAnimationFrame(moveItems);
    }

    requestAnimationFrame(moveItems);
  });
});
