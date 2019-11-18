import React, { Component } from 'react';
import SkillsIntro from './skills-intro';
import SkillsItem from './skills-item';

class Skills extends Component {

  constructor() {
    super();
    this.state = { percent: 5};
  }

  render() {
    return (
      <div className='skills'>
        <div className='skills-intro'>
          <SkillsIntro />
        </div>

        <div className='skills-charts'>
          <div className="container-fluid">
            <div className="row">
              <div className="row col-lg-12 col-md-12 col-12 skills-div no-margin">

              <div className='col-lg-3 col-md-6 col-sm-12'>
                <SkillsItem
                  name='React'
                  img='./../../../img/react.png'
                  color='rgb(68, 183, 255)'
                />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <SkillsItem
                  name='Java'
                  img='./../../../img/java.png'
                  color='rgb(68, 183, 255)'
                />
              </div>
              <div className='col-lg-3 col-md-6 col-sm-12'>
                <SkillsItem
                  name='JS'
                  img='./../../../img/js-logo.png'
                  color='rgb(68, 183, 255)'
                />
              </div>

              <div className='col-lg-3 col-md-6 col-sm-12'>
                <SkillsItem
                  img="./../../../img/ruby-on-rails.png"
                  name='RUBY ON RAILS'
                  color='rgb(153, 24, 30)'
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
