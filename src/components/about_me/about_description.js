import React, {Component} from 'react';

export default class AboutDescription extends Component {

  constructor(props) {
    super(props);
    this.state = {
      about: ""
    };
  }

  componentDidMount() {
    const about = `I am a software engineer who is passionate about
    transforming my ideas into real-world programs. With a background
    in Full Stack development using Ruby on Rails and React,
    I bring a strong understanding of well structured MVC architecture
    and design patterns to the team I work with. I have the ability to
    think about abstract problems and process them into small solutions
    so that I could find an efficient way to accomplish any project.
    My belief system is grounded in maintainability, scalability,
    and the idea that resources should be used only when needed,
    be that in the world of code and beyond. `.split('');

    this.timer = setInterval( () => {
      if (about.length > 0) {
        this.setState({ about: this.state.about + about.shift()});
      } else {
        clearInterval(this.timer);
      }
    }, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  makeItFast() {
    this.setState({about: `I am a software engineer who is passionate about
    transforming my ideas into real-world programs. With a background
    in Full Stack development using Ruby on Rails and React,
    I bring a strong understanding of well structured MVC architecture
    and design patterns to the team I work with. I have the ability to
    think about abstract problems and process them into small solutions
    so that I could find an efficient way to accomplish any project.
    My belief system is grounded in maintainability, scalability,
    and the idea that resources should be used only when needed,
    be that in the world of code and beyond. `});
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className='about-me-description' onClick={this.makeItFast.bind(this)}>
          &nbsp;&nbsp;&nbsp;
          {this.state.about}
      </div>
    );
  }
}
