// =========================
// BOTÃO DARK MODE
// =========================

// Pegando o botão
const themeButton = document.getElementById("themeButton");

// Pegando o ícone
const icon = themeButton.querySelector("i");

// =========================
// VERIFICAR TEMA SALVO
// =========================

// Pega o tema salvo no navegador
const savedTheme = localStorage.getItem("theme");

// Se o tema salvo for dark
if(savedTheme === "dark"){

    // Adiciona dark mode
    document.body.classList.add("dark-mode");

    // Troca ícone
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}

// =========================
// EVENTO DE CLICK
// =========================

// Quando clicar no botão
themeButton.addEventListener("click", () => {

    // Alterna dark mode
    document.body.classList.toggle("dark-mode");

    // =========================
    // VERIFICA SE ESTÁ NO DARK
    // =========================

    if(document.body.classList.contains("dark-mode")){

        // Troca ícone
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        // Salva tema dark
        localStorage.setItem("theme", "dark");

    } else {

        // Troca ícone
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        // Salva tema light
        localStorage.setItem("theme", "light");

    }

});