document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");

    if(toggle && sidebar){

        toggle.addEventListener("click", () => {

            sidebar.classList.toggle("show");

        });

    }

});
