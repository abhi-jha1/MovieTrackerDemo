import React from 'react';
import '../App.css'

class Buttons extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }} >
                <span className="waves-effect waves-light btn-small btn " onClick={this.props.now_playing}>  Now Playing</span>
                <span className="waves-effect waves-light btn-small btn  " onClick={this.props.upcoming}>Upcoming</span>
                <span className="waves-effect waves-light btn-small btn " onClick={this.props.latest}>Latest</span>

            </div>
        )
    }
}
export default Buttons;