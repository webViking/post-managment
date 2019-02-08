import React,{Component} from 'react'





import Backdrop from '../Backdrop/Backdrop'
import {connect} from 'react-redux'
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
class Navbar extends Component {
    state = {
        sideDrawerOpen: false,
      }
      hamburgerClickHandler = () => {
        this.setState((prevState) => {
          return {
            sideDrawerOpen: !prevState.sideDrawerOpen
          }
        })
      }
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
      }
    render(){
       // const {profile,auth} = this.props
    
        return(
            <nav className = "nav-wrapper teal">
            <div className = "container">
                
                <Toolbar hamburgerClicked = {this.hamburgerClickHandler}/>
                <SideDrawer show ={this.state.sideDrawerOpen} />
                <Backdrop show ={this.state.sideDrawerOpen} clicked={this.backdropClickHandler} />
                
            </div>
        </nav>
        )
    }
}

//<Link to="/" className="brand-logo">Post Managment</Link>
    

   // let links = null
  //  if(props.auth.uid){
     //   links = (
      //      <SignInLink profileProp = {profile}/>
      //  )
        
 //   }else{
 //       links = <SignOutLink/>
   // }
    

const mapStateToProps = (state) => {
    return{
        //this is initial firebase prop
        auth:state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar)