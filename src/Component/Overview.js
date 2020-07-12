import React from 'react';

class Overview extends React.Component {
    render() {
        console.log(this.props.currentMovie, 'value');
        return (


            <div>
                <div className="container">

                    <div className="row">
                        <div className="col s12 m4">
                            {this.props.currentMovie.poster_path == null ? <img className="" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="Card image cap" style={{
                                width: "100%",
                                height: '60%'
                            }} /> : <img className="" src={`http://image.tmdb.org/t/p/w185${this.props.currentMovie.poster_path}`} alt="Card image" style={{
                                width: "100%",
                                height: '60%'
                            }} />}
                        </div>
                        <div className="col s12 m8">
                            <div className="info-container" style={{ color: 'black' }}>
                                <p>{this.props.currentMovie.title}</p>
                                <p>{this.props.currentMovie.release_date.substring(6).split("-").concat(this.props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                                <p>{this.props.currentMovie.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Overview;