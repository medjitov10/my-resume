import React, { Component } from 'react';
import PortfolioItem from './portfolio_item';
import PortfolioItemDescription from './portfolio_item_description';
import PortfolioItemItem from './portfolio_item_item';
class Portfolio extends Component {

  constructor() {
    super();

    this.state = {
      obj: [
        {
          img: '../../../img/floor-plan.png',
          git: 'https://github.com/medjitov10/floor-plan/',
          url: 'https://floor-plan-creator.herokuapp.com/',
          description: {
            name: 'Floor Plan',
            description: `Responsive Multiple page application to implement all digital
              devices on floor plan. Floor plan creator is a full-stack web application.
               It makes use of Rails-PostgreSQL on the backend, and React-Redux on the client.
               Also, this app
              leverages Amazon AWS file-storage for all floor plan images and floor plan pdf.`
          }
        },
        {
          img: '../../../img/to_do_list.png',
          git: 'https://github.com/medjitov10/to_list_2000/',
          url: 'https://to-do-list-2000.herokuapp.com/',
          description: {
            name: 'To-Do-List-2000',
            description: `To-do-list-2000 is full-stack application to record down your
              notes and the things you need to do. It uses Ruby on Rails to to manage back-end(postgreSQL).
              Frontend handled by React.js which uses the Redux architectural framework.`
          }
        },
        {
          img: '../../../img/osmagramm.png',
          git: 'https://github.com/medjitov10/osmagramm',
          url: 'https://osmagramm.herokuapp.com/',
          description: {
            name: 'Osmangramm',
            description: `OSMAGRAM is a full stack application programmed for the instagram's architecture.
              It utilizes Ruby on Rails on the backend, a PostgreSQL database,
              and React.js with a Redux architectural framework on the frontend.`
          }
        },
        // {
        //   img: '../../../img/cotd.png',
        //   git: 'https://github.com/medjitov10/catch-of-the-day/',
        //   url: 'https://ns-wceoyfuumi.now.sh/'
        // },
      ],
      i: 0
    };
  }

  onLeftClick() {
    this.setState({ i: ( (this.state.i - 1) + this.state.obj.length ) % this.state.obj.length });
  }
  onRightClick() {
    this.setState({ i: ( this.state.i + 1 ) % this.state.obj.length });
  }
  onIconClick(index) {
    this.setState({ i: index});
  }

  render() {
    const { i, obj } = this.state;

    const currentObj = obj[i];


    return (
      <div className='portfolio'>
        <div>
          <h3 className='portfolio-intro'>My main works for the moment</h3>
        </div>
        <div style={{ height: '100%'}}>
          <PortfolioItemItem Objs={this.state.obj} currentObj={currentObj} onImgClick={this.onIconClick.bind(this)} />
          <div style={{display: 'flex', height: '100%', margin: '10px'}}>
            <PortfolioItem
              Objs = {obj}
              currentObj={currentObj}
              onRightClick={this.onRightClick.bind(this)}
              onLeftClick={this.onLeftClick.bind(this)}
              onIconClick={this.onIconClick.bind(this)}/>
            <PortfolioItemDescription obj={currentObj}/>
          </div>
        </div>


      </div>
    );
  }
}

export default Portfolio;
