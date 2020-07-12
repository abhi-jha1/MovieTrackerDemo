import React from 'react';
import '../App.css'



class Search extends React.Component {
    render() {

        return (
            <div className='container nav'>
                <div className='row'>
                    <section className='col s4 offset-s4'>
                        <form action='' onSubmit={this.props.handleSubmit}>
                            <div className='input-field input '>
                                <input placeholder="search" type="text" onChange={this.props.handleChange} style={{ color: "white" }}></input>
                            </div>
                        </form>

                    </section>

                </div>
            </div>
        )
    }
}
export default Search