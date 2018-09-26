import React  from 'react';
import PropTypes from 'prop-types';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import  $ from 'jquery';
import DesignQuestion from './DesignQuestion.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from '../actions/actions';
import Forms from './forms.jsx';
import fromJquery from '../jquery/formJquery'

class App extends React.Component {
     constructor(props) {
        super(props);
       this.state={login:'Login',render:false,isOpen:false};
	   this.selectCategory=this.selectCategory.bind(this);
	   this.hideModal=this.hideModal.bind(this);
	   this.loginForm=this.loginForm.bind(this);
	  }
	  componentDidMount()
	  {

$(document).ready(function(){
    $("#login").addClass("selected");
    $("#registerform").css('display','none');
    $("#forgotpassword").removeClass("selected");
    $("#login").click(function(){
        $("#registerform").css('display','none');
        $("#loginform").css('display', 'block');
        $("#login").addClass("selected");
        $("#register").removeClass("selected");
        $("#forgotpassword").removeClass("selected");
        $("#loginpage").removeClass("deselected");
    });
    $("#register").click(function(){
           $("#loginform").css({'display':'none'});
           $("#registerform").css('display', 'block');
           $("#register").addClass("selected");
           $("#login").removeClass("selected");
           $("#forgotpassword").removeClass("selected");
    });
    $("#forgot").click(function(){
        $("#forgotpassword").addClass("selected");
        $("#loginpage").addClass("deselected");
        $(".header").addClass("deselected");
    });
    $("#fa-bars").click(function()
    {
        $(".sidenav").addClass("selected");
    });
    $("#fa-close").click(function()
    {	
		 $(".sidenav").removeClass("selected");
    });
    $(".main-body").click(function()
     {
        $(".sidenav").removeClass("selected");
    });
    $(".glyphicon-arrow-left").click(function(){
        $(".header").removeClass("deselected");
        $("#loginpage").removeClass("deselected");
        $("#forgotpassword").removeClass("selected");
        
    });

  });
	  }
	  componentWillReceiveProps(nextProps)
	  {
		if(nextProps.loginstatus=="true")
		{	
			$(".error .message").removeClass("selected");
			$(".modalForm").addClass("deselected");
		}
		else
		{
			$(".error .message").addClass("selected");
		}
	  }
	   selectCategory(e)
	   {
		   e.preventDefault();
		   var type=e.target.id;
		   if(type=='movie')
		   {
			this.props.history.push("/movies");
			
		   }
	   }
	   loginForm() {
			$(".modalForm").removeClass("deselected");
			//$(".reviews").addClass("selected");
	  };
	
	  hideModal(){
		this.setState({
		  isOpen: false
		});
	  };
	

   render() {console.log(this.props.loginstatus)
var me=this;
const tooltip = [
  <Tooltip id="movie"><strong>Write a review </strong>on Movies</Tooltip>,
  <Tooltip id="restuarant"><strong>Write a review </strong>on Restaurants</Tooltip>,
  <Tooltip id="stays"><strong>Write a review </strong>on Home Stays</Tooltip>,
  <Tooltip id="companies"><strong>Write a review </strong>on Companies</Tooltip>,
  <Tooltip id="gadgets"><strong>Write a review </strong>on Electronic gadgets</Tooltip>
  ];
       return (
	<div className="reviews">
		<div className="main_header">
			<div className="row">
				<div className="col-lg-10 col-md-9 col-sm-6 col-xs-6">
				<i className="fa fa-bars" id="fa-bars"></i>	
				<div className="page">
						Write A Review
					</div>
				</div>
				<div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
					<div className="signIn" onClick={this.loginForm}>
						Sign In
					</div>
					<div className="signUp">
						Sign Up
					</div>
				</div>
			</div>
		</div>
		<div className="sidenav">
			<ul className="categories">
				
				<li className="movie" id="movie" onClick={this.selectCategory}>Movies</li>
				<li className="restuarants" id="restuarants" onClick={this.selectCategory}>Restaurants</li>
				<li className="vechiles">Vechiles</li>
				<li className="gadgets">Gadgets</li>
				<li className="stay">Stays</li>
				<li className="health">Health</li>
				<li className="health">Tour&Travels</li>
			</ul>
		</div>
		<div className="modalForm deselected">
			<Forms/>
		</div>
		<div className="main-body">
		
		</div>
	</div>
      );
   }
}
App.propTypes = {
	actions: PropTypes.object.isRequired,
    loginstatus:PropTypes.string.isRequired
  };

function mapStateToProps(state, ownProps) {
     
	return {
	  loginstatus:state.Login
		};
  }
  
  function mapDispatchToProps(dispatch) {
	return {
	  actions: bindActionCreators(allActions, dispatch)
	};
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);