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

  	/**
  	 * <ReactCSSTransitionGroup> should contain the children. We use React.cloneElement because we want the
  	 * the children to re-render whenever we navigate.
  	 * Too much for me to explain this in words. Please read the docs 
  	 * https://facebook.github.io/react/docs/animation.html
  	 */
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

/*
 * We are using hashHistory here. You can replace this with browserHistory as well for clean-urls
 * But because we are not using server sided rendering, browserHistory will not work if you refresh
 * the page after navigation. So for demo purposes we will use hashHistory 
 */
render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Index}/>
			<Route path="details/:page" component={Details} />
		</Route>
	</Router>
), document.getElementById('container'))

