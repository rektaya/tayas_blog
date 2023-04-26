document.addEventListener("DOMContentLoaded", function(event) {
    const readMe = document.getElementById("target");
    const hiddenP = document.querySelector(".hidden");
    console.log(readMe);
    console.log(hiddenP);

    readMe.addEventListener("click", function(event) {
        console.log('clicked');
        hiddenP.classList.remove("hidden");
        readMe.classList.add("hidden");
        event.preventDefault();
    });
});