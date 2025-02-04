function loadTestimonials() {
  const testimonialSection = document.getElementById('testimonial');

  // Define the testimonials data
  const testimonials = [
    {
      imgSrc: 'assets/images/Testimonials/pic-1.png',
      comment: `I had the pleasure of working with Darshil on a freelance project, and his expertise in web development exceeded all expectations. Darshil was highly professional, attentive to details, and always delivered work ahead of deadlines. His ability to understand the project requirements and turn ideas into reality was truly impressive. I would highly recommend Darshil to anyone seeking a reliable and skilled freelancer.`,
      name: 'jason roy',
      role: 'web developer freelancer',
    },
    {
      imgSrc: 'assets/images/Testimonials/pic-2.png',
      comment: `As a fellow entrepreneur, I’ve had the privilege of collaborating with [Business Owner's Name] on several occasions, and their dedication to their business is truly admirable. Their ability to innovate while maintaining a sharp focus on customer needs sets them apart in their industry. [Business Owner's Name] approaches every challenge with enthusiasm and determination, inspiring everyone they work with to strive for excellence. It’s always a pleasure to learn from their expertise and vision.`,
      name: 'evelyn jones',
      role: 'A small business Owner',
    },
    {
      imgSrc: 'assets/images/Testimonials/pic-3.jpg',
      comment: `I had the privilege of working closely with Darshil during his time at Quad Softech, where he excelled as both a Web Developer and a Team Leader. Darshil consistently demonstrated exceptional technical skills, particularly in frontend development, and his leadership abilities were truly impressive. He has a remarkable ability to motivate his team and ensure that projects are delivered on time and to the highest standard. His professionalism and dedication make him an invaluable asset to any organization.`,
      name: 'Emilly Rival',
      role: 'Supervisor',
    },
    {
      imgSrc: 'assets/images/Testimonials/pic-4.png',
      comment: `I had the pleasure of collaborating with Darshil on a web development project, and his professionalism and expertise truly stood out. He not only delivered the project ahead of schedule but also exceeded our expectations in terms of design and functionality. Darshil's clear communication and willingness to incorporate feedback made the entire process seamless and enjoyable.`,
      name: 'sarah',
      role: 'freelancer',
    },
    {
      imgSrc: 'assets/images/Testimonials/pic-5.png',
      comment: `Working with Darshil has been an exceptional experience. His expertise, dedication, and innovative approach have significantly enhanced our projects. Darshil's attention to detail and ability to understand our unique requirements make him an indispensable partner. I highly recommend him to anyone seeking high-quality solutions and professional service.`,
      name: 'John Doe',
      role: 'Software Engineer',
    },
  ];

  // Create the HTML structure dynamically
  let testimonialHTML = `
    <div class="heading">
      <h2><span>testimonials</span></h2>
    </div>
    <div class="swiper-container testimonial-slider">
      <div class="swiper-wrapper">`;

  testimonials.forEach(testimonial => {
    testimonialHTML += `
      <div class="swiper-slide testi-item fade-in">
        <img src="${testimonial.imgSrc}" alt="Testimonial-Pic" />
        <i class="fas fa-quote-left"></i>
        <p class="comment">${testimonial.comment}</p>
        <div class="intro">
          <h3>${testimonial.name}</h3>
          <h5>${testimonial.role}</h5>
        </div>
      </div>`;
  });

  testimonialHTML += `
      </div>
      <div class="swiper-pagination swiper-pagination1"></div>
    </div>`;

  // Append the dynamically generated HTML to the testimonial section
  testimonialSection.innerHTML = testimonialHTML;

  // Initialize Swiper if needed (optional)
  const swiper = new Swiper('.testimonial-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
  });
}

// Call the function to load testimonials when the page is loaded
document.addEventListener('DOMContentLoaded', loadTestimonials);
