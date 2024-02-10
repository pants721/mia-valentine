var no_count = 0;
var yes_button = document.getElementById("yes-button");
var no_button = document.getElementById("no-button");

no_button.addEventListener('click', function() {
    no_count += 1;

    yes_button.style.fontSize = no_count * 2 + "em";

    no_button.style.fontSize = 1 / (no_count * no_count) - 0.1 + "em";

    if (no_count == 4) {
        yes_button.textContent = "click THIS button";
    }
    if (no_count == 5) {
        document.getElementById("dox-text").textContent = "14103 honey hill court btw";
    } 
    if (no_count == 6) {
        no_button.remove();
    }
})