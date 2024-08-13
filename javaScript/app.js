document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");

    bar.addEventListener("click", function () {
        sidebar.classList.add("active");
    });

    close.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });
});

