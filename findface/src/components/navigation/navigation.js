import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa3 pointer'>Sign Out</p>
            </nav>
            )
        } else {
            return (
                <div>
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className='f4 link dim white underline pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('Register')} className='f4 link dim white underline pa3 pointer'>Register</p>
            </nav></div>
            )
        }
}
 
export default Navigation;