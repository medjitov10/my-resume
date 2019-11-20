import React, {Component} from 'react';

class PortfolioItemDescription extends Component {
  render() {
    const {name, description} = this.props.obj.description;
    const {git, url} = this.props.obj;
    return (
      <div style={{width: '40%', margin: '0 auto', textAlign: 'center'}}>
        <h3>
          {name}
        </h3>
        <p style={{ margin: '0 20px'}}>
          {description}
        </p>
            <a href={git} target='_blank'>
              Git
            </a>
            <br />
            <a href={url} target='_blank'>
              Live
            </a>

      </div>
    )
  }
}

export default PortfolioItemDescription;
