window.addEventListener("DOMContentLoaded", function() {
    

// Sélection des liens du div1
let links = document.querySelectorAll(".div1 a");

// boucle pour ajout d'évenement aux click de chaque lien
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();
        
        let article = this.closest(".div1");
        let description = article.querySelector(".description");
        
        if (description.style.display === "none") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
})
}

})
