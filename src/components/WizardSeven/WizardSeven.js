import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCredit } from '../../ducks/reducer';

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCredit('excellent')}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCredit('good')}>Good</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCredit('fair')}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCredit('poor')}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let { credit } = state;

    return {
        credit
    }
}

export default connect(mapStateToProps, {updateCredit})(WizardSeven);