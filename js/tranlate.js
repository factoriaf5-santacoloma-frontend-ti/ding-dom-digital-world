// Translation data (from JSON file)
const translations = {
    "en": {
      "changeToEnglish": "Change to English",
      "changeToSpanish": "Change to Spanish",
      "heroText": "Music is what moves us",
      "instrumentDesc": {
        "piano": "The piano is a percussive stringed instrument with 24 keys that produces sound by striking strings with hammers. It is versatile and is used in various musical genres, allowing melodies and harmonies to be played at the same time, making it essential for performance and composition.",
        "drums": "The drum set is a percussion instrument consisting of a set of drums and cymbals. It is played by striking the surfaces with drumsticks and is instrumental in setting the beat in various genres of music. The drum kit brings energy and structure to songs, and its versatility makes it essential in rock bands, jazz bands, pop bands, and more.",
        "guitar": "The guitar is a stringed instrument, usually with six strings, played by plucking or strumming. There are acoustic guitars, which produce sound naturally, and electric guitars, which amplify it. It is versatile and is used in various musical genres, allowing melodies and chords to be played both solo and in ensemble."
      }
    },
    "es": {
      "changeToEnglish": "Cambiar a Inglés",
      "changeToSpanish": "Cambiar a Español",
      "heroText": "La música es lo que nos mueve",
      "instrumentDesc": {
        "piano": "El piano es un instrumento de cuerda percutida con 24 teclas que produce sonido al golpear las cuerdas con martillos. Es versátil y se utiliza en varios géneros musicales, permitiendo que se toquen melodías y armonías al mismo tiempo, lo que lo hace esencial para la interpretación y composición.",
        "drums": "La batería es un instrumento de percusión que consta de un conjunto de tambores y platillos. Se toca golpeando las superficies con baquetas y es fundamental para marcar el ritmo en varios géneros musicales. La batería aporta energía y estructura a las canciones, y su versatilidad la convierte en un elemento esencial en bandas de rock, jazz, pop, entre otras.",
        "guitar": "La guitarra es un instrumento de cuerdas, generalmente con seis cuerdas, que se toca pulsando o rasgueando. Existen guitarras acústicas, que producen sonido de manera natural, y guitarras eléctricas, que lo amplifican. Es un instrumento versátil utilizado en varios géneros musicales, permitiendo tocar melodías y acordes tanto en solitario como en conjunto."
      }
    }
  };
  
  // Function to change language
  function changeLanguage(language) {
    // Set the language in localStorage to preserve language choice
    localStorage.setItem('language', language);
  
    // Get the translation data for the selected language
    const langData = translations[language];
  
    // Update the page text with the selected language
    document.querySelector(".heroimage p").textContent = langData.heroText;
    document.querySelector(".descripcion").textContent = langData.instrumentDesc.piano; // Example for the "piano" description, you'll loop for each
    document.querySelector("#openModal").textContent = language === 'en' ? "Open Modal" : "Abrir Modal";
    
    // Additional translations can be added here for buttons, text, etc.
    document.querySelectorAll('.nav-list li a')[0].textContent = language === 'en' ? "HOME" : "INICIO";
    document.querySelectorAll('.nav-list li a')[1].textContent = language === 'en' ? "INSTRUMENTS" : "INSTRUMENTOS";
    document.querySelectorAll('.nav-list li a')[2].textContent = language === 'en' ? "ABOUT US" : "SOBRE NOSOTROS";
    document.querySelector('.parrafo-footer').textContent = language === 'en' ? "© 2024 Ding Dom. All rights reserved." : "© 2024 Ding Dom. Todos los derechos reservados.";
  
    // Update all the instrument descriptions
    const instrumentDescElements = document.querySelectorAll('.descripcion');
    instrumentDescElements.forEach((element, index) => {
      switch (index) {
        case 0: 
          element.textContent = langData.instrumentDesc.piano;
          break;
        case 1: 
          element.textContent = langData.instrumentDesc.drums;
          break;
        case 2: 
          element.textContent = langData.instrumentDesc.guitar;
          break;
      }
    });
  }
  
  // Initial language setting based on localStorage
  const currentLanguage = localStorage.getItem('language') || 'en';
  changeLanguage(currentLanguage);
  
  // Event listeners for language buttons
  document.querySelectorAll('.language-buttons button')[0].addEventListener('click', () => changeLanguage('en'));
  document.querySelectorAll('.language-buttons button')[1].addEventListener('click', () => changeLanguage('es'));
  