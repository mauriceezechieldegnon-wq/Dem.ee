document.getElementById("devisForm").addEventListener("submit", 
function(e) {    
e.preventDefault();   
 const nom = document.getElementById("nom").value.trim();    
const email = document.getElementById("email").value.trim();    
const message = document.getElementById("message").value.trim();    
// Validation des champs    
if (!nom ||!email ||!message) {       
 alert("Veuillez remplir tous les champs.");        return;}   
 // Validation du format de l'email    
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
if (!emailRegex.test(email)) {  alert("Veuillez entrer une adresse email valide.");        
return;}    
const whatsappNumber = "22958666666";    
const texte = `Bonjour, je m'appelle ${nom}. Je souhaite un devis pour: ${message}.Email: ${email}, WhatsApp: ${whatsappNumber}`;    
const lien = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texte)}`;    window.open(lien, "_blank");});

