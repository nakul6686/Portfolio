document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      // Remove 'active' class from all links
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      // Add 'active' class to the clicked link
      this.classList.add("active");

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });


  const submitbtn = document.getElementById("submit-btn");
  const contactForm= document.getElementById('contact-form')
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    submitbtn.setAttribute("disabled", true);
    submitbtn.innerHTML = `<div class="spinner-border text-primary" role="status">
    <span class="sr-only">Submitting...</span>
  </div> Submitting....`;
    // these IDs from the previous steps
    emailjs.sendForm('bmFrdWw2Njg2bkBrdWw=', 'contact_form', this)
        .then(() => {
            alert('SUCCESS!');
            contactForm.reset();
            submitbtn.removeAttribute("disabled");
        submitbtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit`;
        }, (error) => {
            alert('FAILED...');
            submitbtn.removeAttribute("disabled");
        submitbtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Submit`;
        });
});

});
