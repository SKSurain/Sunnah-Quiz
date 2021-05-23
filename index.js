sessionStorage.clear();

function handleSubmit() {
    let arrLogit = [1, 1, 0.6, 0.5, 0.4, 0.1, -0.1, -0.2, -1];
    let overall = 0;
    let scale = 0;
    let rq = 0;
    try {
        for (let i = 0; i < 9; i++) {
            scale = document.querySelector("input[name = 'question" + i + "']:checked").value;
            rq += (((scale * arrLogit[i]) / 4.6) * 2);
            overall += (((scale * arrLogit[i]) / 18) * 2);
        }
        sessionStorage.setItem("Overall", overall);
        sessionStorage.setItem("Rq", rq);
    } catch (error) {
        console.log(error);
    }
}