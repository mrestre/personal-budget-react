import React from 'react';

function Menu() {
  return (
    <nav aria-label="Link options">
        <ul>
            
            <li><a href="/" tabIndex="0">Homepage</a></li>
            
            <li><a href="/about" tabIndex="1">About</a></li>
            
            <li><a href="/login" tabIndex="2">Login</a></li>
        
        </ul>
    </nav>
  );
}

export default Menu;
