import React, { Component } from 'react';
import EducationItem from './education_item';

const Education = () => {
  return (
    <div className='education'>

      <div className='education-intro'>
        <h3>Educational timeline</h3>
        <p className='education-intro-quote'>“Education is what remains after one has forgotten what one has learned in school.”</p>
        <p className='education-intro-author'> 一Albert Einstein</p>
        <p className='education-intro-conclusion'>So this is my educational timeline from 2010 to 2019</p>
      </div>


      <div className='education-timeline no-margin'>
            <EducationItem
              imgURL='../../../img/tnu.jpg'
              side='right'
              description='After a year of engineering education,
              I decided to become a software developer and entered
              the Crimean Federal University (Taurida National University)
               and was very happy for decision I made.
               Course Highlights: Programming in Rails, SQL, Js,
               React, Advanced discrete math, Advanced mathematical analysis,
               Fundamentals of Computing, Discrete Structures,
                Operating Systems, Principles of cryptology, Algorithms'
              name='V. I. Vernadsky Crimean Federal University'
              title='Computer Science and Math'
              data='2010-2014'/>

            <EducationItem
              imgURL='../../../img/bmcc.jpg'
              side='left'
              description='In 2014 I moved to United States. I decided
              to visit BMCC to improve my english and americal life style.
              It was good experiance. English language courses, Physics and Math. Some JS.'
              name='Borough of Manhattan Community College'
              title='Computer Information System'
              data='2014-2019'/>

    </div>
  </div>
  );
};

export default Education;
