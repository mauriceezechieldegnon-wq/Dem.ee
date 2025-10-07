document.getElementById("devisForm").addEventListener("submit", 
function (e){
e.preventDefault(); 
const nom = document.getElementById("nom").value;  
const email = document.getElementById("email").value;  
const tel = document.getElementById("tel").value;  
const service = document.getElementById("service").value;  
const message = document.getElementById("message").value;  
const whatsappNumber = "22958660666";  
const texte = `Bonjour, je m'appelle :nom. 
Je souhaite un devis pour : service.
Détails :message. 
Email : email 
WhatsApp :tel`;  
const lien = `https://wa.me/whatsappNumber?text={encodeURIComponent(texte)}`;  window.open(lien, "_blank");
});

