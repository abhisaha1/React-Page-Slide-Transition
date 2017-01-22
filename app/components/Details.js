import React from 'react';
import data from '../data';

export default class Details extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    let pageno = this.props.params.page - 1;
    let page = data[pageno];
    return (
        <div className="details page transition">
            <div className="content">
                <div className="center-container">
                  <div className="box">
                  { page.name }
                  </div>
                </div>
            </div>
            <nav className="bar bar-tab">
              <span className="tab-item">
                Thank You
              </span>
            </nav>
        </div>
    );
  }
}
