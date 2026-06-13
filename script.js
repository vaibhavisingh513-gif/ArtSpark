let selectedCategory = "";

function selectOption(category, element) {

    document.querySelectorAll(".option").forEach(option => {
        option.classList.remove("selected");
    });

    element.classList.add("selected");

    selectedCategory = category;

    document.getElementById("continueBtn").disabled = false;
}

function goNext() {

    if (selectedCategory === "visual") {
        window.location.href = "visual.html";
    }

    else if (selectedCategory === "literary") {
        window.location.href = "literary.html";
    }
}