import React , {Component} from 'react';
import { connect } from "react-redux";



class Dashboard extends Component {

    render() {
        return (
            <div className="row">
                 <label className="control-label col-md-2 col-md-offset-4">Welcome to dash page {this.props.userName}</label>
          </div>
        );
      }
    }

    const mapStateToProps = state => {
        return { userName: state.userName };
    };

export default connect(mapStateToProps)(Dashboard);