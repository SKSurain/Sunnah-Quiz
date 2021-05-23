let overall = 0;
let ct = 0;
let sf = 0;
let rq = 0;

overall = parseFloat(sessionStorage.getItem("Overall3"));
rq = parseFloat(sessionStorage.getItem("Rq")).toFixed(2);
sf = parseFloat(sessionStorage.getItem("Sf")).toFixed(2);
ct = parseFloat(sessionStorage.getItem("Ct")).toFixed(2);

let headerOverall = document.querySelector("#overallScore");
let rqText = document.querySelector("#rq");
let sfText = document.querySelector("#sf");
let CtText = document.querySelector("#ct");
let highestCatText = document.querySelector("#highestCategoryText");
let motivationText = document.querySelector("#motivationText");
let qrParagraph = document.querySelector("#qrParagraph");
let fcParagraph = document.querySelector("#fcParagraph");

headerOverall.textContent = overall;
rqText.textContent = rq;
sfText.textContent = sf;
CtText.textContent = ct;

if (overall > 2) {
    qrParagraph.textContent = "Mantaining frequent recitation with tadabbur. Memorizing verses is advisable.";
    fcParagraph.textContent = "Mantaining consuming sunnah food (raisins, dates, nuts & seeds, honey and 8 glasses of plain clean water";
    highestCatText.textContent = "VERY HIGH CRITICAL THINKING.";
    motivationText.textContent = " Congratulation! Alhamdulillah, Keep it up!";
}
else if (overall > 1 && overall <= 2) {
    qrParagraph.textContent = "On top of reciting Quran daily, need to tadabbur.";
    fcParagraph.textContent = "Taking honey, raisins, dates and nuts daily and must drink 8 glasses of clean plain water.";
    highestCatText.textContent = "HIGH CRITICAL THINKING.";
    motivationText.textContent = " Congratulation! Alhamdulillah, Keep it up!";
}
else if (overall > 0 && overall <= 1) {
    qrParagraph.textContent = "Recite Quran daily with translation and tadabbur";
    fcParagraph.textContent = "Must frequently take dates, raisins, nuts & seeds, honey and drink 8 glasses of clean plain water. Be dicipline to consume other sunnah and healthy food.";
    highestCatText.textContent = "MODERATE CRITICAL THINKING.";
    motivationText.textContent = " You are doing well! Keep reciting Al-Quran, you'll be doing great.";
}

else if (overall > -0.1 && overall <= 0) {
    qrParagraph.textContent = "Have dicipline yourself to recite Quran daily, with tadabbur and must refer to Ustaz for proper pronounciation. If found hard to understand certain subject learn, add more recitation of verses.";
    fcParagraph.textContent = "Must not skip breakfast. Must consume sunnah food (raisins, dates, nuts & seeds, honey and sufficient of 8 glasses of clean plain water). Must avoid taking food with high cholestrol and fat.";
    highestCatText.textContent = "LOW CRITICAL THINKING.";
    motivationText.textContent = " Don't be upset, you can improve your scale by improving your recitation with tadabbur.";
}

else if (overall <= -0.1) {
    qrParagraph.textContent = "Have dicipline yourself to recite Quran daily, with tadabbur and must refer to Ustaz for proper pronounciation. If found hard to understand certain subject learn, add more recitation of verses.";
    fcParagraph.textContent = "Must not skip breakfast. Must consume sunnah food (raisins, dates, nuts & seeds, honey and sufficient of 8 glasses of clean plain water). Must avoid taking food with high cholestrol and fat.";
    highestCatText.textContent = "VERY LOW CRITICAL THINKING.";
    motivationText.textContent = " Don't be upset, you can improve your scale by improving your recitation with tadabbur.";
}

function handleSubmitResult() {
    window.location.replace("index.html");
}