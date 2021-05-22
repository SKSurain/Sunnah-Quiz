let overall = 0;


window.addEventListener('load', () => {
    overall = parseFloat(sessionStorage.getItem("Overall2"));
    sessionStorage.removeItem("Overall2");
})


function handleSubmitCT() {
    let arrLogit = [0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.1, -0.1, -0.2, -0.4, -0.5];
    let scale = 0;
    let ct = 0;
    try {
        for (let i = 0; i < 11; i++) {
            scale = document.querySelector("input[name = 'question" + i + "']:checked").value;
            ct += (((scale * arrLogit[i]) / 2) * 2);
            overall += (((scale * arrLogit[i]) / 18) * 2);
        }
        ct = parseFloat(ct).toFixed(2);
        overall = parseFloat(overall).toFixed(2);

        sessionStorage.setItem("Ct", ct);
        sessionStorage.setItem("Overall3", overall);
    } catch (error) {
        console.log(error);
    }
}