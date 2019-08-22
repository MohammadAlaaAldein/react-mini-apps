import React, { Component } from "react";
import Header from "./components/layout/Header";
import Aside from "./components/Aside";
import Details from "./components/Details";

export class App extends Component {
  state = {
    selectedItemId: 3,
    data: [
      {
        id: 1,
        name: 'Mohammad',
        email: 'mohammad@gmail.com',
        phone: '0796895057',
        city: 'Amman',
        state: 'Amman',
        country: 'Jordan',
        orgainsation: 'Orange',
        jobProfile: 'Programmer',
      },
      {
        id: 2,
        name: 'Ayham',
        email: 'ayham@gmail.com',
        phone: '0788888888',
        city: 'Amman',
        state: 'Amman',
        country: 'Jordan',
        orgainsation: 'Orange',
        jobProfile: 'Software Developer',
        additionalInfo: 'Loves Games'
      },
      {
        id: 3,
        name: 'Yasmeen',
        email: 'yasmeen@gmail.com',
        phone: '077777777',
        city: 'Amman',
        state: 'Amman',
        country: 'Jordan',
        orgainsation: 'Orange',
        jobProfile: 'Developer',
      },
    ]
  }

  handleClick = (id) => {
    this.setState({selectedItemId: id});
  }


  render() {
    return (
      <>
        <div className="container-fluid d-flex flex-column grow">
          <div className="row">
            <header className="col-12 px-0">
              <Header />
            </header>
            <aside className="col-4">
              {this.state.data.map(element => {
                return (<Aside key={element.id} info={element} selectItem={this.handleClick}/>)
              })}
              
            </aside>
            <div className="col-8 main">
              <Details info={this.state.data.filter(element => {
                return element.id === this.state.selectedItemId;
              })[0]}/>
            </div>
          </div>
          <footer />
        </div>
      </>
    );
  }
}

export default App;
