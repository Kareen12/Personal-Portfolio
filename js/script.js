	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }


// Show/hide the button based on the scroll position
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  
  // Scroll to the top when the button is clicked
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
  

    // clearing form data
    document.getElementById('cnt-form').addEventListener('submit', function (event) {
        // Prevent the form from submitting normally
        event.preventDefault();
    
        // Reference to the form
        const form = this;
    
        // Disable the submit button to prevent multiple submissions
        form.querySelector('.contact-button').setAttribute('disabled', 'disabled');
    
        // Fetch the form data
        const formData = new FormData(form);
    
        // Submit the form using fetch
        fetch(form.action, {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
    
            // Reset the form
            form.reset();
    
            // Re-enable the submit button
            form.querySelector('.contact-button').removeAttribute('disabled');
    
            // Show a success toast
            Toastify({
              text: 'Form submitted successfully!',
              duration: 3000, 
              close: true,
              gravity: 'top', 
              position: 'center', 
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
          })
          .catch(error => {
            console.error('Error submitting form:', error);
    
            // Re-enable the submit button in case of an error
            form.querySelector('.contact-button').removeAttribute('disabled');
          });
      });
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }