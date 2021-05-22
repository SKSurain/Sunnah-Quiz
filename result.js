let overall = 0;
let ct = 0;
let sf = 0;
let rq = 0;

overall = parseFloat(sessionStorage.getItem("Overall3"));
rq = parseFloat(sessionStorage.getItem("Rq"));
sf = parseFloat(sessionStorage.getItem("Sf"));
ct = parseFloat(sessionStorage.getItem("Ct"));
sessionStorage.clear();

let headerOverall = document.querySelector("#score");
let qrParagraph = document.querySelector("#qrParagraph");
let fcParagraph = document.querySelector("#fcParagraph");

headerOverall.textContent = overall;
if (overall > 1.5) {
    qrParagraph.textContent = "Mantaining frequent recitation with tadabbur. Memorizing verses is advisable.";
    fcParagraph.textContent = "Mantaining consuming sunnah food (raisins, dates, nuts & seeds, honey and 8 glasses of plain clean water";
}
else if (overall > 0.5 && overall <= 1.5) {
    qrParagraph.textContent = "On top of reciting Quran daily, need to tadabbur.";
    fcParagraph.textContent = "Taking honey, raisins, dates and nuts daily and must drink 8 glasses of clean plain water.";
}
else if (overall > 0 && overall <= 0.5) {
    qrParagraph.textContent = "Recite Quran daily with translation and tadabbur";
    fcParagraph.textContent = "Must frequently take dates, raisins, nuts & seeds, honey and drink 8 glasses of clean plain water. Be dicipline to consume other sunnah and healthy food.";
}

else if (overall <= 0) {
    qrParagraph.textContent = "Have dicipline yourself to recite Quran daily, with tadabbur and must refer to Ustaz for proper pronounciation. If found hard to understand certain subject learn, add more recitation of verses.";
    fcParagraph.textContent = "Must not skip breakfast. Must consume sunnah food (raisins, dates, nuts & seeds, honey and sufficient of 8 glasses of clean plain water). Must avoid taking food with high cholestrol and fat."
}