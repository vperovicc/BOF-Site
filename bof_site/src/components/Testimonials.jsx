import React from 'react';
import '../styles/Testimonials.css'; // Make sure to import the CSS file

const Testimonials = () => {
  // Sample data for testimonials (replace with your actual data)
  const testimonials = [
    { id: 1, img: './src/assets/sven_footer.png' },
    { id: 2, img: './src/assets/sven_footer.png' },
    { id: 3, img: './src/assets/sven_footer.png' },
    { id: 4, img: './src/assets/sven_footer.png' },
    { id: 5, img: './src/assets/sven_footer.png' },
    { id: 6, img: './src/assets/sven_footer.png' },
    { id: 7, img: './src/assets/sven_footer.png' },
    { id: 8, img: './src/assets/sven_footer.png' },
    { id: 9, img: './src/assets/sven_footer.png' },
    { id: 10, img: './src/assets/sven_footer.png' },
    { id: 11, img: './src/assets/sven_footer.png' },
    { id: 12, img: './src/assets/sven_footer.png' },
  ];

  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial) => (
        <div className="testimonial-item" key={testimonial.id}>
          <img src={testimonial.img} alt={`Testimonial ${testimonial.id}`} />
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
