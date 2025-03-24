// import React from 'react'
// import './Navbar.css'
// import navProfile from '../../assets/nav-profile.png'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//         <img src={navProfile} className='nav-profile' alt="" />

//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import './Navbar.css';
import navProfile from '../../assets/nav-profile.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Admin Panel</h1>
      <img src={navProfile} className='nav-profile' alt="Profile" />
    </div>
  );
};

export default Navbar;
