//------------------------------- meta description et meta title dynamiques selon les sections

const metaConfig = {
    accueil: {
        title: "Portfolio et CV - Noa Sillard",
        description: "Bienvenue sur le portfolio et CV de Noa Sillard. Découvrez mes compétences et mes projets."
    },
    presentation: {
        title: "À mon propos - Noa Sillard",
        description: "En savoir plus sur Noa Sillard : étudiant en informatique, passionné par la programmation et les nouvelles technologies."
    },
    formations: {
        title: "Formations - Noa Sillard",
        description: "Découvrez le parcours académique de Noa Sillard, étudiant en BUT Informatique à Clermont-Ferrand."
    },
    experience: {
        title: "Mes expériences professionelles - Noa Sillard",
        description: "Explorez les expériences professionnelles et les projets réalisés par Noa Sillard."
    },
    connaissances: {
        title: "Liste de mes compétences - Noa Sillard",
        description: "Liste des compétences techniques et transversales acquises par Noa Sillard en informatique."
    },
    avis: {
        title: "Avis de certains collaborateurs - Noa Sillard",
        description: "Découvrez les retours et avis concernant les projets et travaux réalisés par Noa Sillard."
    },
    contact: {
        title: "Contact - Noa Sillard",
        description: "Envoyez un message à Noa Sillard pour toute question ou opportunité professionnelle."
    }
};

function updateMeta(sectionId) {
    if (metaConfig[sectionId]) {
        document.title = metaConfig[sectionId].title;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', metaConfig[sectionId].description);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateMeta(entry.target.id);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });
});



//------------------------------- JSON-LD

function addJsonLdSchema() {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
        existingScript.remove(); 
    }

    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Noa Sillard",
        "url": "https://noaslld.github.io/cv/",
        "description": "Portfolio et CV de Noa Sillard, étudiant en informatique.",
        "sameAs": [
            "https://github.com/NoaSlld",
            "https://www.linkedin.com/in/noa-sillard-0a3717216"
        ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLdData);

    document.head.appendChild(script);
}

addJsonLdSchema();