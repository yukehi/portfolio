import React from 'react';
import { Link , withRouter} from 'react-router-dom';

const isActive =(history,path) =>{
    if(history.location.pathname === path) return {color:'#40B6F2'}
    else return {color:'#1B1818'}
};

const Menu = ({history})=>{

    return(
    <div style = {{display: 'flex',justifyContent: 'center'}}>
    <ul className="nav nav-tabs">
    <li className="nav-item">
        <Link style={isActive(history,'/')} className="nav-link" to='/'>Home</Link>
    </li>  
    <li className="nav-item">
        <Link style={isActive(history,'/about')} className="nav-link" to='/about'>About</Link>
    </li> 
    <li className="nav-item">
        <Link style={isActive(history,'/contact')} className="nav-link" to='/contact'>Contact</Link>
    </li> 
    
    </ul>   
    </div>
    )
}









export default withRouter(Menu);