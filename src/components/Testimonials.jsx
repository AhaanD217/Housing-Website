import React from 'react';
import testimonials from '../assets/testimonials';

const Testimonials = () => {
  return (
    <div
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
      id='Testimonials'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer{' '}
        <span className='underline underline-offset-4 decoration-1 under font-light'>
          Testimonials
        </span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-lg p-6 text-center'
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='w-20 h-20 rounded-full mx-auto mb-4'
            />
            <h3 className='text-xl font-semibold'>{testimonial.name}</h3>
            <p className='text-gray-500 mb-4'>{testimonial.role}</p>
            <div className='text-yellow-500 mb-4'>
              {'★'.repeat(testimonial.rating)}
              {'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className='text-gray-600'>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
