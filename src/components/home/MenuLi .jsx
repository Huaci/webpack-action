import React, { Component } from 'react'
import {Link} from 'react-router';
class MenuLi extends Component{
    render(){
        let linkTo = this.props.name =="Home"?"/":"/"+this.props.name;
        let activeClass = this.props.name =="Home"?"":"active";
        return (
            <li>
                <Link to={linkTo}  activeClassName={activeClass}>
                    {this.props.name}
                </Link>
            </li>
        );
    }
}
export default MenuLi;