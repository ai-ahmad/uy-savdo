let selects = document.querySelector('.LanguageSelect')


selects.addEventListener('change', function () {

    const selectedLanguage = this.value

    if (selectedLanguage === "RU") {
        window.location.href = "./LangRu.html";
    }
    if (selectedLanguage === "UZ") {
        window.location.href = "index.html";
    }
    if (selectedLanguage === "EN") {
        window.location.href = "./LangEng.html";
    }
    if (selectedLanguage === "TUR") {
        window.location.href = "./LangеTur.html";
    }

})