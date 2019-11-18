import React, {Component} from 'react';

class SkillsItem extends Component {
  constructor() {
    super();
    this.state = { start: 0 };
  }

  componentDidMount() {
    this.interval = setInterval( () => {
      if ( this.state.start < this.props.percent ) {
        this.setState({
          start: parseInt(this.state.start + 1)
        });
      } else {
        clearInterval(this.interval);
      }
    }, 15);
  }


  componentWillUnmount() {

    clearInterval(this.interval);
  }

  render() {
    const { img, color, name } = this.props;
    return (
      <div className='skills-item'>
        <h4>{name}</h4>
        <div>
          <img src={img} width="100px"/>
        </div>
      </div>
    );
  }
}

export default SkillsItem;
