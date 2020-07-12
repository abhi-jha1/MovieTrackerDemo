import React from 'react';
import '../App.css';


class Nav extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <div className="nav-wrapper container">
                    <span className="waves-effect waves-light btn-small btn " onClick={this.props.click} >Movie Finder</span>
                </div>
            </nav>

        )

    }
}
export default Nav;