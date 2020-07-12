import React from 'react';
import '../App.css';


class Nav extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <div className="nav-wrapper container">
                    <a href='#' className='brand logo'>Movie Finder</a>
                </div>
            </nav>

        )

    }
}
export default Nav;