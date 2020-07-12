import React from 'react';
import '../App.css'

class Buttons extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }} >
                <a className="waves-effect waves-light btn-small btn " onClick={this.props.now_playing}>  Now Playing</a>
                <a className="waves-effect waves-light btn-small btn  " onClick={this.props.upcoming}>Upcoming</a>
                <a className="waves-effect waves-light btn-small btn " onClick={this.props.latest}>Latest</a>

            </div>
        )
    }
}
export default Buttons;