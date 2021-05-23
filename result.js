let overall = 0;
let ct = 0;
let sf = 0;
let rq = 0;

overall = parseFloat(sessionStorage.getItem("Overall3"));
rq = parseFloat(sessionStorage.getItem("Rq")).toFixed(2);
sf = parseFloat(sessionStorage.getItem("Sf")).toFixed(2);
ct = parseFloat(sessionStorage.getItem("Ct"));

let headerOverall = document.querySelector("#overallScore");
let rqText = document.querySelector("#rq");
let sfText = document.querySelector("#sf");
let CtText = document.querySelector("#ct");
let highestCatText = document.querySelector("#highestCategoryText");
let qrParagraph = document.querySelector("#qrParagraph");
let fcParagraph = document.querySelector("#fcParagraph");

if (highestCatText.style.display === "none") highestCatText.style.display = "block";

headerOverall.textContent = overall;
rqText.textContent = rq;
sfText.textContent = sf;
CtText.textContent = ct;

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

if (rq > sf && rq > ct) {
    highestCatText.textContent = "You have highest Recitation of Quran";
}

else if (sf > rq && sf > ct) {
    highestCatText.textContent = "You have highest Sunnah Food";
}

else if (ct > rq && ct > sf) {
    highestCatText.textContent = "You have highest Critical Thinking";
}

else if (rq === sf && rq !== ct) {
    highestCatText.textContent = "You have highest Recitation of Quran & Sunnah Food";
}

else if (sf === ct && sf !== rq) {
    highestCatText.textContent = "You have highest Sunnah Food & Critical Thinking";
}

else if (rq === ct && rq !== sf) {
    highestCatText.textContent = "You have highest Recitation of Quran & Critical Thinking";
}
else {
    highestCatText.style.display = "none";
}


function handleSubmitResult() {
    window.location.replace("index.html");
}