document.addEventListener('astro:page-load', () => {
  // Intersection Observer for scroll animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get the delay class number (e.g., 'delay-2' -> 2)
          const delayClass = Array.from(entry.target.classList)
            .find(className => className.startsWith('delay-'));
          
          // Add animated class immediately to start the animation
          // The delay is handled by CSS animation-delay
          entry.target.classList.add('animated');
          
          // Once the animation has played, unobserve the element
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
