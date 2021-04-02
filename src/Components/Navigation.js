import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const Navigation = ({displayName}) => (
    <nav className="w-1/5">
        <ul>
            <span className="hover:shadow-xl">
                <Link to="/">홈</Link>
            </span>
            <br></br>
            <br></br>
            <span className="hover:shadow-xl">
                <Link to="/profile">{displayName ? displayName + '의 프로필' : '프로필'}</Link>
            </span>
        </ul>            
    </nav>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Navigation)