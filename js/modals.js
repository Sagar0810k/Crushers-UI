document.addEventListener('DOMContentLoaded', function() {
    // triggers karne ko rakha h yaha 
    const triggers = document.querySelectorAll('.modal-trigger');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.add('modal-open');
        document.body.style.overflow = 'hidden'; //  scrolling ni hone deta h 
      });
    });
  
    const closeButtons = document.querySelectorAll('.modal-close');
    
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.closest('.modal').classList.remove('modal-open');
        document.body.style.overflow = ''; // scrolling allow k liye 
      });
    });
  
    
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.remove('modal-open');
          document.body.style.overflow = ''; 
        }
      });
    });
  
    //  Escape key se bhi exit diya h 
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.modal-open').forEach(modal => {
          modal.classList.remove('modal-open');
          document.body.style.overflow = ''; 
        });
      }
    });
  });
