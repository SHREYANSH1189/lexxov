

document.addEventListener("DOMContentLoaded", function (){
  //Animation of writing and deleting text javascript code
//Add more strings here
  const textArray = [
    "Website Development.",
    "Android Development.",
    "UI/UX Designing.",
    "Branding.",
    "Logo Designing."
  ];
  let textIndex = 0;
  const typedTextElement = document.getElementById("typed-text");
  let charIndex = 0;

  function typeAndDeleteText(elementId, textToType, typingSpeed = 200, delay = 1200) {
    const typedTextElement = document.getElementById(elementId);
    let charIndex = 0;

    function typeText() {
      const typingInterval = setInterval(() => {
        if (charIndex <= textToType.length) {
          typedTextElement.textContent = textToType.substring(0, charIndex);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(deleteText, delay);
        }
      }, typingSpeed);
    }
    typeText(); // Initial call to start the typing animation
    function deleteText() {
      charIndex = textToType.length;
      const deletingInterval = setInterval(() => {
        if (charIndex >= 0) {
          typedTextElement.textContent = textToType.substring(0, charIndex);
          charIndex--;
        } else {
          clearInterval(deletingInterval);
          textIndex = (textIndex + 1) % textArray.length;
          textToType = textArray[textIndex]; // Update textToType with the next text
          typeText(); // Start typing the next text
        }
      }, typingSpeed);
    }

  }

  typeAndDeleteText('typed-text', textArray[textIndex], 100, 1000);

})

