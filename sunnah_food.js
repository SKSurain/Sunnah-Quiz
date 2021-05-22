let overall = 0;

window.addEventListener('load', () => {
    overall = parseFloat(sessionStorage.getItem("Overall"));
    sessionStorage.removeItem("Overall");
})


function handleSubmitSF() {
    let arrLogit = [1.2, 1.1, 0.7, 0.6, 0.6, 0.5, 0.4, 0.4, 0.2];
    let scale = 0;
    let sf = 0;
    try {
        for (let i = 0; i < 9; i++) {
            scale = document.querySelector("input[name = 'question" + i + "']:checked").value;
            sf += (((scale * arrLogit[i]) / 11.4) * 2);
            overall += (((scale * arrLogit[i]) / 18) * 2);
        }
        sessionStorage.setItem("Overall2", overall);
        sessionStorage.setItem("Sf", sf);
    } catch (error) {
        console.log(error);
    }
}