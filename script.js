// Script for navigation bar
document.querySelector(".icon").addEventListener("click", () => {
    document.querySelector(".navbar").classList.add("change");
});
document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".navbar").classList.remove("change");
});