const prompts = {
    confidentialityPreferences: "Privacy Preferences Settings Page: Design a page for users to set their privacy preferences, with options to manage information sharing, profile visibility settings, and personal data access permissions. Develop a reassuring user interface, highlighting transparency and users’ total control over their data. This page guarantees transparent and personalized privacy management, thus strengthening user trust.",
    platformPerformanceTracking: "Platform Performance Monitoring Dashboard: Create an interactive dashboard to allow administrators to track and analyze overall platform performance. Include charts and key performance indicators (KPIs) to visualize trends and identify areas needing improvement. Make sure the interface is user-friendly and provides a deep understanding of the platform's performance.",
    productReturnsManagement: "Product Return Management: Develop a returns management system that makes it easy for customers to submit return requests and for support teams to handle these requests efficiently. Integrate features like return shipping label generation, real-time tracking, and automated communications. Simplify the returns process to improve customer satisfaction.",
    socialSharingPreferences: "Social Sharing Preferences: Create an interface for users to manage their social sharing preferences. Include options to set post visibility, manage access permissions to profile information, and personalize shared messages. Make sure the interface provides granular control over social sharing, while still providing a smooth and intuitive experience.",
    supportRequestsTracking: "Support Request Tracking Dashboard: Set up a centralized dashboard to track customer support requests. Include features like ticket creation, request prioritization, resolution tracking, and support team performance reporting. Optimize operational efficiency by providing a complete view of support activity, improving customer satisfaction.",
    languagePreferences: "Language Preferences: Develop a feature that allows users to set their language preferences. Include a full list of supported languages, with options for setting the default language and translation preferences. Ensure language switching is intuitive and immediate, providing a seamless multilingual experience.",
    newsletterSubscriptionsManagement: "Newsletter subscription management: Create a page dedicated to managing newsletter subscriptions. Let users easily subscribe or unsubscribe, with options to personalize content preferences. Integrate open rate tracking, mailing list management, and advanced newsletter customization features.",
    interfaceCustomizationPreferences: "Interface Customization Preferences: Provide users with the ability to customize the user interface according to their preferences. Include theme, layout, and layout options for interface elements. Ensure changes are immediately visible, providing a unique and personalized user experience.",
    blogPostsAndInteractionsTracking: "Tracking blog posts and interactions: Set up a system for tracking blog posts and user interactions. Include features like comments, social shares, ratings, and viewing statistics. Optimize user engagement by understanding their interactions with blog content.",
    pushNotificationPreferences: "Push notification preferences: Design a page for users to manage their push notification preferences. Include options to customize notification types, sending times, and receiving channels. Maximize the impact of push notifications by giving users complete control over their notification experience.",
    savingsGoalsTracking: "Savings Goal Tracking: Develop a system for users to set, track, and achieve their savings goals. Include features like viewing progress, creating savings categories, and personalized tips to reach goals faster. Provide a motivating and transparent experience to help users realize their financial plans.",
    streamingPreferencesManagement: "Managing Streaming Preferences: Create an intuitive interface to allow users to set their streaming preferences. Include options for video quality, content preferences, and playlist management. Optimize the streaming experience by providing precise control to users.",
    securityAlertsConfiguration: "Configuring Security Alerts: Design a page for users to configure their security alerts. Include options for email alerts, push notifications, and SMS alerts for suspicious activity on their account. Strengthen security by keeping users informed and responsive to potential threats.",
    marketTrendsTracking: "Market Trend Tracking: Establish a market trend tracking system to help users stay informed of relevant developments in their industry. Include charts, market analysis and personalized notifications. Deliver an information-centric experience, empowering users to make informed decisions.",
    healthAndWellnessPreferences: "Health and Wellness Preferences: Create a page dedicated to managing health and wellness preferences. Include options to set fitness goals, physical activity reminders, and nutritional preferences. Deliver a holistic experience focused on user well-being.",
    travelReservationsManagement: "Travel Reservation Management: Develop a complete system to manage travel reservations, from choosing destinations to confirming itineraries. Integrate features such as searching for flights, booking accommodation, and viewing travel details. Make sure the interface is user-friendly and provides a seamless booking experience, making travel planning easier for users."
};
  

// ###############################################
// ################ Move to the next steps ⏩
// ###############################################
var steps=0
$('.inputField').on( "keypress change", function(event) {
    if (event.key == "Enter") {
        nextStep();
    }
});

$('.enter-icon-form').on('click', function(){
    nextStep();
})

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
        $('.copyPrompt').removeClass('d-none');
        $('.AITool').removeClass('d-none');
        generatePrompt();
        $('.progress-stacked').addClass('d-none');
        $('.enter-icon-form').addClass('d-none');
    }
}

// ###############################################
// ################ Steps bar
// ###############################################

function progressbargreen(){
    $('.progress-bar:not(:first)').removeClass("progress-checked");

    for (let step = 0; step <= steps; step++) {
        $('.progress-stacked')[step].querySelector('.progress-bar').classList.add("progress-checked");
    }
}

$('.progress-stacked').on('click', function(){
    // display none every inputs
    $('.inputField').addClass("d-none");
    
    steps =this.getAttribute('step');


    // Change the label between each steps
    var label = $('.inputField')[steps].getAttribute('l');
    $('#steps-label').text(label);

    // display the next step
    $('.inputField')[steps].classList.remove('d-none');
    progressbargreen();
})


// ###############################################
// ################ Generate the perfect prompt ✨
// ###############################################
function generatePrompt() {
    const values = {};
    document.querySelectorAll('.inputField').forEach(input => {
      values[input.id] = input.type === 'radio' ? document.querySelector(`input[name="${input.name}"]:checked`).value : input.value;
    });

    delete values['previewPrompt'];

    console.log(values['previewPrompt']);
  
    const generatedPrompt = Object.keys(values).map(key => `${capitalize(key)} : ${values[key]} `).join('\n');
    const selectedDomainPrompt = prompts[values.domain];
  
    //document.getElementById('previewPrompt').innerHTML = generatedPrompt + `\n\nPrompt Spécifique au Domaine :\n${selectedDomainPrompt}`;
    textTypingEffect(document.getElementById('previewPrompt'), generatedPrompt + `\n\n ${selectedDomainPrompt}, create the HTML, CSS and Javascript code.`);
}
  
// Get the right name
function capitalize(str) {
    console.log(document.getElementById(str).getAttribute("l"));
    return document.getElementById(str).getAttribute("l");
    //return str.charAt(0).toUpperCase() + str.slice(1);
}

function textTypingEffect(element, text, i=0){
    element.textContent +=text[i];

    // If we reached the end of the string.
    if (i === text.length - 1 ){
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 10);
}


// ###############################################
// ############################### Copy the prompt
// ###############################################

$('.copyPrompt').on('click', function(){
    // Get the text field
  var copyText = document.getElementById("previewPrompt");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  $('.copyPrompt').text("Copied!");
  setTimeout(() => $('.copyPrompt').text("Copy"), 1500);
})


// ###############################################
// ######################## Change the placeholder
// ###############################################
var i=0;
const placeholderHints = [
    'A personal bookclub called "Amazook"',
    'A portfolio page for a photographer', 
    'An iOS to-do list app startup called "Magic"', 
    'An event in Paris called "Où est Charlie ?"',
    'A surf shop in Porto called "B**ch"',
]

setInterval(() => {
    if (i > placeholderHints.length){
        i=0;
    }
    $('#proto-step-1').attr('placeholder', placeholderHints[i])
    i++;
}, 2000);