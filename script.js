document.addEventListener("DOMContentLoaded", () => {
    const menuToggles = document.querySelectorAll(".menu-toggle")
    const sidebar = document.querySelector(".aside1")
    const navStrip = document.querySelector(".aside1 nav")
    const navContent = document.querySelector(".nav-content")

    const toggleSidebar = () => {
        sidebar.classList.toggle("nav-expanded")
        navStrip.classList.toggle("ghost")
        navContent.classList.toggle("ghost")
    }

    menuToggles.forEach((elem) =>
        elem.addEventListener("click", toggleSidebar)
    )

    document.addEventListener("click", (event) => {
        if (!sidebar.contains(event.target)) {
            sidebar.classList.remove("expanded")
        }
    })
})
