import React, {Component} from "react";
import { connect } from "react-redux";


const requireAuth = (ChildComponent) =>{
    class ComposedComponent extends Component{

        //component just got rendered
        componentDidMount(){
            this.shouldNavigateAway();
        }

        //component just got updated
        componentDidUpdate(){
            this.shouldNavigateAway();
        }

        shouldNavigateAway(){
            if(!this.props.auth){
                console.log("I need to leave");
                this.props.history.push('/');
            }
        }

        render () { 
            return <ChildComponent {...this.props} /> 
        }
    }

    function mapStateToProps(state) {
        return {auth : state.auth}
    }
    

    return connect(mapStateToProps)(ComposedComponent);
}

export default requireAuth;