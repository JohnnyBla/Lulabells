import React from 'react';

const SectionOne = () => {
  return (
    <div className='col-md-6 col-12 my-5 mx-md-5'>
      <h1 className='HeroText fs-1'>LulaBelles</h1>
      <h4 className='HeroTextTwo '>Restaurant</h4>
      <figure>
        <blockquote className='quote mt-5 blockquote col-md-5 fs-6'>
          <p>
            “Food is one part of the experience. And it has to be somewhere
            between 50 to 60 percent of the dining experience. But the rest
            counts as well: The mood, the atmosphere, the music, the feeling,
            the design, the harmony between what you have on the plate and what
            surrounds the plate.”
          </p>
        </blockquote>
        <figcaption className='blockquote-footer mt-2 quoteFooter'>
          <cite title='Alain Ducasse'>Alain Ducasse, Chef</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default SectionOne;
