/**
 * Opens a WhatsApp chat with a pre-filled message about a project.
 * @param {string} projectName - The name of the project.
 * @param {string} phoneNumber - The target phone number (default: Concept Digital's).
 */
export const openWhatsAppProject = (projectName, phoneNumber = '5513991353207') => {
    const text = `Olá! Vi o projeto *${projectName}* no portfólio e gostaria de saber mais informações.`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Security best practice: open in new tab with references cleared
    // Note: window.open second arg '_blank' is standard, but some browsers block popups.
    // For a button click event, this is usually fine.
    window.open(url, '_blank', 'noopener,noreferrer');
};
