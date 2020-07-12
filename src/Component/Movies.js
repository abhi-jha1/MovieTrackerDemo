import React from 'react';
import Movie from './Movie';


class Movies extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        {
                            this.props.movies.map((movie, i) => {
                                return (<Movie key={i} details={movie} click={this.props.data} />)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies;