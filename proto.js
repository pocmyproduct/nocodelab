const prompts = {
    confidentialityPreferences: "Page de configuration des préférences de confidentialité : Concevez une page permettant aux utilisateurs de définir leurs préférences de confidentialité, avec des options pour gérer le partage d'informations, les paramètres de visibilité du profil et les autorisations d'accès aux données personnelles. Développez une interface utilisateur rassurante, mettant en avant la transparence et la maîtrise totale des utilisateurs sur leurs données. Cette page garantit une gestion transparente et personnalisée de la confidentialité, renforçant ainsi la confiance des utilisateurs.",
    platformPerformanceTracking: "Tableau de bord de suivi des performances de la plateforme : Créez un tableau de bord interactif pour permettre aux administrateurs de suivre et d'analyser les performances globales de la plateforme. Incluez des graphiques et des indicateurs clés de performance (KPI) pour visualiser les tendances et identifier les domaines nécessitant des améliorations. Assurez-vous que l'interface est conviviale et offre une compréhension approfondie des performances de la plateforme.",
    productReturnsManagement: "Gestion des retours de produits : Développez un système de gestion des retours permettant aux clients de soumettre facilement des demandes de retour et aux équipes de support de traiter ces demandes de manière efficace. Intégrez des fonctionnalités telles que la génération d'étiquettes d'expédition de retour, le suivi en temps réel et les communications automatisées. Simplifiez le processus de retour pour améliorer la satisfaction client.",
    socialSharingPreferences: "Préférences de partage social : Créez une interface permettant aux utilisateurs de gérer leurs préférences de partage sur les réseaux sociaux. Incluez des options pour définir la visibilité des publications, gérer les autorisations d'accès aux informations du profil et personnaliser les messages partagés. Assurez-vous que l'interface offre un contrôle granulaire sur le partage social, tout en offrant une expérience fluide et intuitive.",
    supportRequestsTracking: "Tableau de suivi des demandes de support : Mettez en place un tableau de bord centralisé pour suivre les demandes de support client. Incluez des fonctionnalités telles que la création de tickets, la priorisation des demandes, le suivi des résolutions et la génération de rapports de performances de l'équipe de support. Optimisez l'efficacité opérationnelle en offrant une vue complète de l'activité de support, améliorant ainsi la satisfaction client.",
    languagePreferences: "Préférences de langue : Développez une fonctionnalité permettant aux utilisateurs de définir leurs préférences linguistiques. Incluez une liste complète de langues prises en charge, avec des options de paramétrage de la langue par défaut et des préférences de traduction. Assurez-vous que le changement de langue est intuitif et immédiat, offrant ainsi une expérience multilingue transparente.",
    newsletterSubscriptionsManagement: "Gestion des abonnements aux newsletters : Créez une page dédiée à la gestion des abonnements aux newsletters. Permettez aux utilisateurs de s'abonner ou de se désabonner facilement, avec des options pour personnaliser les préférences de contenu. Intégrez des fonctionnalités de suivi des taux d'ouverture, de gestion des listes d'envoi et de personnalisation avancée des newsletters.",
    interfaceCustomizationPreferences: "Préférences de personnalisation de l'interface : Offrez aux utilisateurs la possibilité de personnaliser l'interface utilisateur selon leurs préférences. Incluez des options de thème, de disposition et de disposition des éléments d'interface. Assurez-vous que les modifications sont immédiatement visibles, offrant ainsi une expérience utilisateur unique et personnalisée.",
    blogPostsAndInteractionsTracking: "Suivi des publications et des interactions sur le blog : Mettez en place un système de suivi des publications de blog et des interactions des utilisateurs. Incluez des fonctionnalités telles que les commentaires, les partages sociaux, les évaluations et les statistiques de visualisation. Optimisez l'engagement des utilisateurs en comprenant leurs interactions avec le contenu du blog.",
    pushNotificationPreferences: "Préférences de notification push : Concevez une page permettant aux utilisateurs de gérer leurs préférences de notification push. Incluez des options pour personnaliser les types de notifications, les heures d'envoi et les canaux de réception. Optimisez l'impact des notifications push en offrant un contrôle total aux utilisateurs sur leur expérience de notification.",
    savingsGoalsTracking: "Suivi des objectifs d'économies : Développez un système permettant aux utilisateurs de définir, suivre et atteindre leurs objectifs d'économies. Incluez des fonctionnalités telles que la visualisation des progrès, la création de catégories d'économies et des conseils personnalisés pour atteindre les objectifs plus rapidement. Offrez une expérience motivante et transparente pour aider les utilisateurs à réaliser leurs projets financiers.",
    streamingPreferencesManagement: "Gestion des préférences de streaming : Créez une interface intuitive pour permettre aux utilisateurs de définir leurs préférences de streaming. Incluez des options de qualité vidéo, de préférences de contenu et de gestion des listes de lecture. Optimisez l'expérience de streaming en offrant un contrôle précis aux utilisateurs.",
    securityAlertsConfiguration: "Configuration des alertes de sécurité : Concevez une page permettant aux utilisateurs de configurer leurs alertes de sécurité. Incluez des options pour les alertes par e-mail, les notifications push et les alertes SMS en cas d'activité suspecte sur leur compte. Renforcez la sécurité en permettant aux utilisateurs de rester informés et réactifs aux menaces potentielles.",
    marketTrendsTracking: "Suivi des tendances du marché : Mettez en place un système de suivi des tendances du marché pour aider les utilisateurs à rester informés des évolutions pertinentes de leur secteur. Incluez des graphiques, des analyses de marché et des notifications personnalisées. Offrez une expérience centrée sur l'information, permettant aux utilisateurs de prendre des décisions éclairées.",
    healthAndWellnessPreferences: "Préférences de santé et bien-être : Créez une page dédiée à la gestion des préférences de santé et de bien-être. Incluez des options pour définir des objectifs de fitness, des rappels d'activité physique et des préférences nutritionnelles. Offrez une expérience holistique axée sur le bien-être des utilisateurs.",
    travelReservationsManagement: "Gestion des réservations de voyages : Développez un système complet pour gérer les réservations de voyages, du choix des destinations à la confirmation des itinéraires. Intégrez des fonctionnalités telles que la recherche de vols, la réservation d'hébergements, et la visualisation des détails du voyage. Assurez-vous que l'interface est conviviale et offre une expérience de réservation transparente, facilitant ainsi la planification des voyages pour les utilisateurs."
};
  

// ###############################################
// ################ Move from steps ⏩
// ###############################################
var steps=0
$('.inputField').on( "keypress change", function(event) {
    if (event.key == "Enter") {
        nextStep();
    }
});

function nextStep(){
    // display none every inputs
    $('.inputField').addClass("d-none");
    steps++;

    // Change the label between each steps
    var label = $('.inputField')[steps].getAttribute('l');
    $('#steps-label').text(label);

    // => if it's not the last input with the class "inputField"
    if(steps < $('.inputField').length-1){
        // display the next step
        $('.inputField')[steps].classList.remove('d-none');
        progressbargreen();
    } else {
        // display the perfect prompt
        $('#previewPrompt').removeClass('d-none');
        generatePrompt();
        $('.progress-stacked').addClass('d-none');
    }
}

// ###############################################
// ################ Steps bar
// ###############################################

function progressbargreen(){
    $('.progress-stacked')[steps].querySelector('.progress-bar').classList.add("progress-checked");
}


// ###############################################
// ################ Generate the perfect prompt ✨
// ###############################################
function generatePrompt() {
    const values = {};
    document.querySelectorAll('.inputField').forEach(input => {
      values[input.id] = input.type === 'radio' ? document.querySelector(`input[name="${input.name}"]:checked`).value : input.value;
    });
  
    const generatedPrompt = Object.keys(values).map(key => `${capitalize(key)} : ${values[key]} `).join('\n');
    const selectedDomainPrompt = prompts[values.domain];
  
    document.getElementById('previewPrompt').innerHTML = generatedPrompt + `\n\nPrompt Spécifique au Domaine :\n${selectedDomainPrompt}`;
}
  
// Get the right name
function capitalize(str) {
    console.log(document.getElementById(str).getAttribute("l"));
    return document.getElementById(str).getAttribute("l");
    //return str.charAt(0).toUpperCase() + str.slice(1);
}

  