// Define translations for English and Spanish
const translations = {
    eng: {
        homeNav: "HOME",
        instrumentsNav: "INSTRUMENTS",
        aboutUsNav: "ABOUT US",
        jorgeName: "Jorge Bastori",
        jorgePosition: "Frontend Developer",
        jorgeDescription: "He always brightens everyone's day, he's a partner you wish you had. Passionate about video game programming and music. A great workmate!",
        luisaName: "Luisa Moreno",
        luisaPosition: "Frontend Developer",
        luisaDescription: "She is a very kind person, always giving a hand to those who need it most. A very intelligent person capable of everything. A great work partner!",
        lolaName: "Lola Borges",
        lolaPosition: "Frontend Developer",
        lolaDescription: "A friend, a great companion, always making friends wherever she goes with a cheerful smile. A great follower of the kitchen. A great work partner!",
        jialeName: "Jiale Chen",
        jialePosition: "Frontend Developer",
        jialeDescription: "A friend who always makes an effort. A friend who loves video games, always teaching others, and likes programming very much. A great work partner!",
        hassanName: "Hassan Isse",
        hassanPosition: "Frontend Developer",
        hassanDescription: "A traveler, a good companion always trying to move forward. An example to be followed, always kind to people, proud of the place where he was born. A great work partner!",
        harshdeepName: "Harshdeep Singh",
        harshdeepPosition: "Frontend Developer",
        harshdeepDescription: "A friend and colleague who always strives to move forward, always attentive to others, and with a cheerful smile. A great work partner!",
        juanName: "Juan Gonzales",
        juanPosition: "Frontend Developer",
        juanDescription: "A person who tries hard even though he is not very intelligent, always practices and tries hard. A great partner who will have your back. A great work partner!",
        faryalName: "Faryal Chaudhry",
        faryalPosition: "Frontend Developer",
        faryalDescription: "She is a very disciplined colleague, always attentive to listen to others, a reliable co-worker. A great work partner!",
        footerText: "© 2024 Ding Dom. All rights reserved."
    },
    es: {
        homeNav: "INICIO",
        instrumentsNav: "INSTRUMENTOS",
        aboutUsNav: "SOBRE NOSOTROS",
        jorgeName: "Jorge Bastori",
        jorgePosition: "Desarrollador Frontend",
        jorgeDescription: "Siempre ilumina el día de todos, es un compañero que desearías tener. Apasionado por la programación de videojuegos y la música. ¡Un gran compañero de trabajo!",
        luisaName: "Luisa Moreno",
        luisaPosition: "Desarrolladora Frontend",
        luisaDescription: "Es una persona muy amable, siempre ayudando a quienes más lo necesitan. Muy inteligente, capaz de todo. ¡Una gran compañera de trabajo!",
        lolaName: "Lola Borges",
        lolaPosition: "Desarrolladora Frontend",
        lolaDescription: "Una amiga, una gran compañera, siempre haciendo amigos dondequiera que va con una sonrisa alegre. Gran seguidora de la cocina. ¡Una gran compañera de trabajo!",
        jialeName: "Jiale Chen",
        jialePosition: "Desarrollador Frontend",
        jialeDescription: "Un amigo que siempre se esfuerza. Un amigo que ama los videojuegos, siempre enseñando a otros, le gusta mucho la programación. ¡Un gran compañero de trabajo!",
        hassanName: "Hassan Isse",
        hassanPosition: "Desarrollador Frontend",
        hassanDescription: "Un viajero, un buen compañero que siempre intenta avanzar. Un ejemplo a seguir, siempre amable con las personas, orgulloso del lugar donde nació. ¡Un gran compañero de trabajo!",
        harshdeepName: "Harshdeep Singh",
        harshdeepPosition: "Desarrollador Frontend",
        harshdeepDescription: "Un amigo y colega que siempre se esfuerza por avanzar, siempre atento a los demás, y con una sonrisa alegre. ¡Un gran compañero de trabajo!",
        juanName: "Juan Gonzales",
        juanPosition: "Desarrollador Frontend",
        juanDescription: "Una persona que se esfuerza mucho aunque no sea muy inteligente, siempre practica y se esfuerza. Un gran compañero que te respaldará. ¡Un gran compañero de trabajo!",
        faryalName: "Faryal Chaudhry",
        faryalPosition: "Desarrolladora Frontend",
        faryalDescription: "Es una colega muy disciplinada, siempre atenta a escuchar a los demás, una compañera confiable. ¡Una gran compañera de trabajo!",
        footerText: "© 2024 Ding Dom. Todos los derechos reservados."
    }
};

// Function to change language
function changeLanguage(language) {
    // Change the navigation items
    document.querySelector('a[href="/index.html"]').textContent = translations[language].homeNav;
    document.querySelector('a[href="/views/instrument.html"]').textContent = translations[language].instrumentsNav;
    document.querySelector('a[href="/views/about-us.html"]').textContent = translations[language].aboutUsNav;

    // Change each team member's info dynamically
    const teamMembers = [
        { nameSelector: '.contenedorfotos div:nth-child(1) h3', positionSelector: '.contenedorfotos div:nth-child(1) h5', descriptionSelector: '.contenedorfotos div:nth-child(1) p', nameKey: 'jorgeName', positionKey: 'jorgePosition', descriptionKey: 'jorgeDescription' },
        { nameSelector: '.contenedorfotos div:nth-child(2) h3', positionSelector: '.contenedorfotos div:nth-child(2) h5', descriptionSelector: '.contenedorfotos div:nth-child(2) p', nameKey: 'luisaName', positionKey: 'luisaPosition', descriptionKey: 'luisaDescription' },
        { nameSelector: '.contenedorfotos div:nth-child(3) h3', positionSelector: '.contenedorfotos div:nth-child(3) h5', descriptionSelector: '.contenedorfotos div:nth-child(3) p', nameKey: 'lolaName', positionKey: 'lolaPosition', descriptionKey: 'lolaDescription' },
        { nameSelector: '.contenedorfotos div:nth-child(4) h3', positionSelector: '.contenedorfotos div:nth-child(4) h5', descriptionSelector: '.contenedorfotos div:nth-child(4) p', nameKey: 'jialeName', positionKey: 'jialePosition', descriptionKey: 'jialeDescription' },
        { nameSelector: '.contenedorfotos div:nth-child(5) h3', positionSelector: '.contenedorfotos div:nth-child(5) h5', descriptionSelector: '.contenedorfotos div:nth-child(5) p', nameKey: 'hassanName', positionKey: 'hassanPosition', descriptionKey: 'hassanDescription' },
        { nameSelector: '.contenedorfotos div:nth-child(6) h3', positionSelector: '.contenedorfotos div:nth-child(6) h5', descriptionSelector: '.contenedorfotos div:nth-child(6) p', nameKey: 'harshdeepName', positionKey: 'harshdeepPosition', descriptionKey: 'harshdeepDescription' },
        { nameSelector: '.contenedorfotos div:nth-child(7) h3', positionSelector: '.contenedorfotos div:nth-child(7) h5', descriptionSelector: '.contenedorfotos div:nth-child(7) p', nameKey: 'juanName', positionKey: 'juanPosition', descriptionKey: 'juanDescription' },
        { nameSelector: '.contenedorfotos div:nth-child(8) h3', positionSelector: '.contenedorfotos div:nth-child(8) h5', descriptionSelector: '.contenedorfotos div:nth-child(8) p', nameKey: 'faryalName', positionKey: 'faryalPosition', descriptionKey: 'faryalDescription' }
    ];

    // Loop over each team member and update the text
    teamMembers.forEach(member => {
        document.querySelector(member.nameSelector).textContent = translations[language][member.nameKey];
        document.querySelector(member.positionSelector).textContent = translations[language][member.positionKey];
        document.querySelector(member.descriptionSelector).textContent = translations[language][member.descriptionKey];
    });

    // Change footer text
    document.querySelector('footer .parrafo-footer').textContent = translations[language].footerText;
}

// Example usage: Add event listeners to buttons or any other element where the language is selected
document.getElementById('languageSwitchButton').addEventListener('click', function() {
    // Get the current language from the button text or other UI
    let currentLanguage = document.getElementById('languageSwitchButton').textContent === 'English' ? 'es' : 'eng';
    changeLanguage(currentLanguage);

    // Change button text to reflect the selected language
    document.getElementById('languageSwitchButton').textContent = currentLanguage === 'eng' ? 'Español' : 'English';
});
