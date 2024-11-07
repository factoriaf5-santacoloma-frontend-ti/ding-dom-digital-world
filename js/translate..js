function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es',  
        autoDisplay: false, 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Google Translate element
    const translateButton = document.getElementById('translateButton');
    if (translateButton) {
        translateButton.addEventListener('click', function() {
            // Ensure Google Translate element is initialized
            var googleTranslateElement = document.getElementById('google_translate_element');
            if (!googleTranslateElement) {
                googleTranslateElementInit();
            } else {
                var googleTranslateIframe = googleTranslateElement.querySelector('iframe');
                if (googleTranslateIframe) {
                    var iframeDoc = googleTranslateIframe.contentDocument || googleTranslateIframe.contentWindow.document;
                    var langSelect = iframeDoc.querySelector('select');
                    if (langSelect) {
                        langSelect.value = 'es';  // Set to Spanish
                        langSelect.dispatchEvent(new Event('change'));  // Trigger translation
                    }
                }
            }
        });
    }
});
