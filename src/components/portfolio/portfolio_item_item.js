import React, {Component} from 'react';

export default class PortfolioItemItem extends Component {
  render() {
    return (
      <div className='small-img'>
        {this.props.Objs.map( (obj, index )=> {
          let style = null;
          if ( obj.img === this.props.currentObj.img ) {
            style = {
              backgroundImage: `url('${obj.img}')`,
              border: '2px solid black',
              opacity: '1'
            };
          } else {
            style = {
              backgroundImage: `url('${obj.img}')`,
              opacity: '0.5'
            };
          }
          return <div className='small-img-item' key={obj.img} style={style} onClick={ () => this.props.onImgClick(index)}></div>;
        })}
      </div>
    );
  }
}
