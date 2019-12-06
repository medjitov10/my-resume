import React, { Component } from 'react';
import SkillsIntro from './skills-intro';
import SkillsItem from './skills-item';

class Skills extends Component {

  constructor() {
    super();
    this.state = { percent: 5};
  }

  skills_list = [
  {
    name: 'Java',
    img: './../../../img/java.png'
  },
  {
    name: 'Spring',
    img: './../../../img/spring.png'
  },
  {
    name: "React",
    img: "./../../../img/react.png",
  },
  {
    name: "Java Script",
    img: './../../../img/js-logo.png'
  },
  {
    img: "./../../../img/ruby-on-rails.png",
    name: 'RUBY ON RAILS'
  },
  {
    img: "./../../../img/postgresql.png",
    name: "PostgreSQL"
  },
  {
    img: "./../../../img/git.png",
    name: "Git"
  }
  ,
  {
    img: "./../../../img/docker.png",
    name: "Docker"
  },
  {
    img: "./../../../img/postman.png",
    name: "Postman"
  }
  ]

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
                {
                  this.skills_list.map(skill => {
                    return (
                      <div className='col-lg-3 col-md-6 col-sm-12'>
                        <SkillsItem
                          name={skill.name}
                          img={skill.img}
                          color='rgb(68, 183, 255)'
                        />
                      </div>  
                    )
                  })
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
