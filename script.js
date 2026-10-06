/**
 * Dr. Varsha’s Ayurvedic Treatment Center
 * Minimal Prototype Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
  }

  // FAQ Accordion
  const faqButtons = document.querySelectorAll('.faq-button');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;

      const isActive = item.classList.contains('active');
      
      // Close all items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});

// Demo Form Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const confirmation = document.getElementById('formConfirmation');
  if (confirmation) {
    confirmation.style.display = 'block';
  }
}
