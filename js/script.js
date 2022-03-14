// Instance Object
const textAnalyze = new TextClass(SCRIPTS);

// DOM
const input_form = document.querySelector("textarea.form-control");
const input_btn = document.querySelector("button.btn");

input_btn.addEventListener("click", () => {
    const input_string = input_form.value;
    if (input_string) {
        result = textAnalyze.textScript(input_string);
        console.info(result);
    }
})