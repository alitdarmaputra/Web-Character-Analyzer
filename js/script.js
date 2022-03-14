// Instance Object
const textAnalyze = new TextClass(SCRIPTS);

// DOM
const input_form = document.querySelector("textarea.form-control");
const input_btn = document.querySelector("button.btn");
const result_place = document.querySelector(".result");

input_btn.addEventListener("click", () => {
    const input_string = input_form.value;
    if (input_string) {
        result = textAnalyze.textScript(input_string);
        if(!result)
            resetResult()
        else
            updateUI(result)
    }

    if(result_place.innerHTML != "" && input_string == "")
       resetResult();
})

function makeCards(e) {
    return `
    <div class="item">
        <p>${e.name}</p>
        <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: ${e.resultInPercent}%;" aria-valuenow="${e.resultInPercent}" aria-valuemin="0" aria-valuemax="100">${e.resultInPercent}%</div>
        </div>
    </div>`
}

function updateUI (result) {
    let cards = [];
    for (const iterator of result) {
        cards += makeCards(iterator);
    }

    result_place.innerHTML = cards;
}

function resetResult() {
    result_place.innerHTML = ""; 
}