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
            console.log(`Question value : ${scale}, rq value : ${rq} Overall value : ${overall} scale value : ${scale}  array value : ${arrLogit[i]}`);
        }
        sessionStorage.setItem("Rq", rq);
        sessionStorage.setItem("Overall", overall);
    } catch (error) {
        console.log(error);
    }
}

//21/5/2021
// 1.Make sure radio button is required and submit button redirects to the next page DONE
// 2. Bring data to the other page DONE
// 3. Research a simple and effective layout for the website DONE
// 4. Create simple layout DONE
// 5. build second page DONE
// 6. build third page DONE
// 7. refactor and clean up the codes DONE
// 8. Research for free webhost online DONE
// 9. Migrate database online 
// 10. Send to github and puan hana 
