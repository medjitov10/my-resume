import React, { Component } from 'react';

export default class TitleJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      spanStyle: {
        color: 'black',
        fontSize: '25px'
      }
    };

  }

  componentDidMount() {
    const arrOfTitles = [];
    arrOfTitles.push(' Fullstack software engineer');
    arrOfTitles.push(' Java engineer');

    let copyOfArr = arrOfTitles.slice().map( title => {
      return title.split('');
    });

    let i = 0;
    var spanStyle = {};
    const toRight = () => {

      setTimeout( () => {
        if ( copyOfArr[i].length ) {
          this.setState({title: this.state.title + copyOfArr[i].shift()});
          toRight();
        } else {
          copyOfArr[i] = arrOfTitles[i].split('');
          hold(4);
        }
      }, 200);
    };

    const toLeft = () => {
      setTimeout( () => {
        if ( this.state.title ) {
          this.setState({title: this.state.title.slice(0, this.state.title.length - 1)});
          toLeft();
        } else {
          i++;
          i = i%arrOfTitles.length;
          toRight();
        }
      }, 40);
    };

    const hold = (num) => {
      setTimeout(() => {
        if (num) {
          this.setState({
            spanStyle: {
              color: `${this.state.spanStyle.color === 'black' ? 'rgb(190, 193, 198)' : 'black'}`,
              fontSize: '25px'
            }
          });
          num--;
          hold(num);
        } else {
          this.setState({ spanStyle: {color: 'black', fontSize: '25px'}});
          toLeft();
        }
      }, 1000);
    };

    toRight();
  }

// ````````


  render() {

    return (
      <div className='title-job'>
        <div>
          I'm a
          &nbsp;
          {this.state.title}
          <span style={this.state.spanStyle}>|</span>
        </div>

      </div>
    );
  }
}
