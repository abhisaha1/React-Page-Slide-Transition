import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { render } from 'react-dom'
import { browserHistory, hashHistory, Router, Route, IndexRoute } from 'react-router'
import Index from './components/Index'
import Details from './components/Details'

require('./main.scss');

class App extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = { currentItem: 1}
    	this.setCurrentItem = this.setCurrentItem.bind(this);
  	}

  	setCurrentItem(index) {
	    this.setState({
	        currentItem: index
	    })
  	}

  	render() {
	    let path = this.props.location.pathname;
	    let segment = path.split('/')[2] || 'root';
	    let transitionName = (segment == 'root') ? 'rightSwipe' : 'leftSwipe'
	    return (
		    <ReactCSSTransitionGroup
		      component="div"
		      transitionName={transitionName}
		      transitionEnterTimeout={500}
		      transitionLeaveTimeout={500}
		    >
		    
		      { React.cloneElement(this.props.children, {
		        key: segment,
		        currentItem: this.state.currentItem,
		        setCurrentItem: this.setCurrentItem
		      })}
		    </ReactCSSTransitionGroup>
	    )
	  }
};


render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}/>
			<Route path="details/:page" component={Details} />
		</Route>
	</Router>
), document.getElementById('container'))

