const prixPanier = document.querySelector("#prix-panier");
const prixTva = document.querySelector("#prix-tva");
const prixTotal = document.querySelector("#prix-total");


const articles = document.querySelectorAll("#list-articles > li");

articles.forEach((article) => {
    const quantity = article.querySelector(".article-quantity").innerText;
    const price = article.querySelector(".article-price").innerText;
   
    prixPanier.innerText = parseFloat(prixPanier.innerText) + parseFloat(quantity) * parseFloat(price);
})

prixTva.innerText = parseFloat(prixPanier.innerText) * 0.15;

prixTotal.innerText = parseFloat(prixPanier.innerText) + parseFloat(prixTva.innerText);