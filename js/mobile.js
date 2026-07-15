document.addEventListener("DOMContentLoaded", () => {

    function iniciarMenu() {

        const boton = document.getElementById("menuToggle");
        const sidebar = document.querySelector(".sidebar");

        if (!boton || !sidebar) return;

        boton.addEventListener("click", () => {

            sidebar.classList.toggle("show");

        });

    }

    iniciarMenu();

});
