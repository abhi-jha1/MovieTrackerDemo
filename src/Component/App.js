import React from 'react';
import Nav from './Nav';
import Search from './Search';
import Movies from './Movies';
import Overview from './Overview';
import Buttons from './Buttons';




class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            search: 'spiderman',
            currentMovie: null
        }


        this.apiKey = 'a351127d822104d386320e47ad39118b';
        this.now_playing();

    }



    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}`).then(data => data.json()).then(data => {
            console.log(data.results);
            this.setState({ movies: [...data.results] });
        })


    }

    currentMovie = (id) => {
        let data = this.state.movies.filter((movie) => {
            return movie.id == id;
        })
        data = data[0];
        console.log(data);
        this.setState({ currentMovie: data });

        console.log(this.state.currentMovie, "current");
    }




    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ search: e.target.value });
    }

    latest = () => {
        fetch(`https://api.themoviedb.org/3/movie/latest?api_key=a351127d822104d386320e47ad39118b&language=en-US`).then(data => data.json()).then(data => {
            console.log(data);
            this.setState({ movies: [data] });
        })
    }
    now_playing = () => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a351127d822104d386320e47ad39118b&language=en-US&page=1`).then(data => data.json()).then(data => {
            console.log(data.results);
            this.setState({ movies: [...data.results] });
        })
    }

    upcoming = () => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=a351127d822104d386320e47ad39118b&language=en-US&page=1`).then(data => data.json()).then(data => {
            console.log(data.results);
            this.setState({ movies: [...data.results] });
        })
    }


    render() {
        console.log(this.state.currentMovie);
        return (
            <nav>
                <div className='App '>
                    <Nav />
                    {this.state.currentMovie == null ? <div> <Buttons latest={this.latest} now_playing={this.now_playing} upcoming={this.upcoming} /><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} /> <Movies movies={this.state.movies} data={this.currentMovie} /></div> : <Overview currentMovie={this.state.currentMovie} />}

                </div>


            </nav >

        )
    }
}
export default App;