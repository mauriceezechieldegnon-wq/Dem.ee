document.getElementById("devisForm").addEventListener("submit", 
    function (e) {  
        e.preventDefault();  
        const nom = document.getElementById("nom").value.trim();  
        const email = document.getElementById("email").value.trim();  
        const tel = document.getElementById("tel").value.trim();  
        const service = document.getElementById("service").value.trim();  
        const message = document.getElementById("message").value.trim();  
        if (!nom || !email || !tel || !service || !message) 
            {  alert("Veuillez remplir tous les champs.");    
                return;  }  const whatsappNumber = "22958660666";  
        const texte = `Bonjour, je m'appelle nom. Je souhaite un devis pour :{service}.Détails : message. Email :{email}, WhatsApp : tel`;  
        const lien = `https://wa.me/{whatsappNumber}?text=${encodeURIComponent(texte)}`;  window.open(lien, "_blank");});```

