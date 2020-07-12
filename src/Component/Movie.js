import React from 'react';
import '../App.css'

class Movie extends React.Component {
    render() {

        return (

            <div className="col s12 m7 l3 nav">
                <div className="card">
                    <div className="card-image">
                        {this.props.details.poster_path == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{
                            width: "100%",
                            height: 360
                        }} /> : <img className="" src={`http://image.tmdb.org/t/p/w185${this.props.details.poster_path}`} alt="Card image cap" style={{
                            width: "100%",
                            height: 360
                        }} />}
                        <span className="card-title">{this.props.details.title}</span>
                    </div>
                    <div className="card-action">
                        <span onClick={() => this.props.click(this.props.details.id)}>View Details</span>
                    </div>
                </div>
            </div>

        )
    }
}
export default Movie;