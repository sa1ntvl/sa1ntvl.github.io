const button = document.getElementById("change");
const fam = document.querySelector(".fam");
const imya = document.querySelector(".imya");
const otc = document.querySelector(".otc");
const sex = document.querySelector(".sex");
const place = document.querySelector(".place");
const vid = document.querySelector(".vid");

// Повторное нажатие возвращает русский текст.
button.onclick = function () {
    if (fam.textContent === "Федорова") {
        fam.textContent = "Fedorova";
        imya.textContent = "Diana";
        otc.textContent = "Alekseevna";
        sex.textContent = "Female";
        place.textContent = "G. Saint-Petersburg";
        vid.textContent = "GU MVD PO G. Saint-Petersburg";
        button.textContent = "Вернуть русский текст";
    } else {
        fam.textContent = "Федорова";
        imya.textContent = "Диана";
        otc.textContent = "Алексеевна";
        sex.textContent = "Жен";
        place.textContent = "Г. Санкт-Петербург";
        vid.textContent = "ГУ МВД ПО Г. Санкт-Петербург";
        button.textContent = "Заменить на латиницу";
    }
};
