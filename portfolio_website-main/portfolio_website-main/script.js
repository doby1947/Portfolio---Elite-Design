// Select elements
const design_card_buttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

const single_profile_card = document.querySelectorAll('.single-profile-card');
const testimonial_card = document.querySelectorAll('.testimonial-card');

// Design Card Buttons Functionality
design_card_buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all introduction texts first
        introduction_text.forEach((introduction) => {
            introduction.style.opacity = 0;
            setTimeout(() => {
                introduction.style.display = 'none';
            }, 300); // Delay to match the transition time
        });

        // Show the selected introduction text with fade-in effect
        const selectedIntroduction = introduction_text[index];
        selectedIntroduction.style.display = 'block';
        setTimeout(() => {
            selectedIntroduction.style.opacity = 1;
            selectedIntroduction.style.transition = 'opacity 0.3s ease'; // Smooth fade-in
        }, 10); // Small delay to trigger opacity transition

        // Set active state for design buttons
        design_card_buttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    });
});

// Profile Card Functionality
single_profile_card.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Hide all testimonial cards first
        testimonial_card.forEach((testimonialCard) => {
            testimonialCard.style.opacity = 0;
            setTimeout(() => {
                testimonialCard.style.display = 'none';
            }, 300); // Delay to match the transition time
        });

        // Show the selected testimonial card with fade-in effect
        const selectedTestimonial = testimonial_card[index];
        selectedTestimonial.style.display = 'block';
        setTimeout(() => {
            selectedTestimonial.style.opacity = 1;
            selectedTestimonial.style.transition = 'opacity 0.3s ease'; // Smooth fade-in
        }, 10); // Small delay to trigger opacity transition

        // Set active state for profile cards
        single_profile_card.forEach((cardBtn, cardIndex) => {
            if (index === cardIndex) {
                cardBtn.classList.add('profile-card-active');
            } else {
                cardBtn.classList.remove('profile-card-active');
            }
        });
    });
});
