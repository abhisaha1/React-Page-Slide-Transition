import React from 'react';
import { Router, browserHistory, hashHistory, Link } from 'react-router'
import data from '../data';

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        this.navigateToRoute = this.navigateToRoute.bind(this);
    }

    navigateToRoute(e) {
        e.preventDefault();
        this.context.router.push('/details/'+ this.props.currentItem)
    }

    render() {
        let choicesRendered = data.map((item,index) => {
            let itemno = index + 1;
            let selectedClass = (this.props.currentItem === itemno) ? 'selected':''
            return <li className={"table-view-cell " + selectedClass} key={index} onClick={() => this.props.setCurrentItem(itemno)} >
                        <input 
                            checked={ this.props.currentItem === itemno } 
                            type="radio" 
                            name="item"
                            className="item-title"
                            value={itemno}
                            onChange={()=>{}}
                        />
                        {item.name}
                    </li>
        })
        return (
            <div className="index page transition">
                <div className="content">
                    <ul className="table-view">
                        { choicesRendered }
                    </ul>
                </div>
                <nav className="bar bar-tab">
                    <a onClick={this.navigateToRoute} className="tab-item" href="#">
                        Buy Now
                    </a>
                </nav>
            </div>
        )
    }
}

Index.contextTypes = {
    router: React.PropTypes.object
};

