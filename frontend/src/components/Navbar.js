// import React, { useState } from 'react'
// import { Button } from './Button'
// import { Link } from 'react-router-dom'
// import './Navbar.css'
// import Dropdown from './Dropdown.js'
// import SearchBox from './SearchBox.js'
// import { Route } from 'react-router-dom'

// function Navbar() {
//   const [click, setClick] = useState(false)
//   const [dropdown, setDropdown] = useState(false)

//   const handleClick = () => setClick(!click)
//   const closeMobileMenu = () => setClick(false)

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false)
//     } else {
//       setDropdown(true)
//     }
//   }

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false)
//     } else {
//       setDropdown(false)
//     }
//   }

//   return (
//     <>
//       <nav className='navbar'>
//         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//           Trilogy Optic
//           <i class='fab fa-firstdraft' />
//         </Link>
//         <div className='menu-icon' onClick={handleClick}>
//           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li
//             className='nav-search'
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Route render={({ history }) => <SearchBox history={history} />} />
//           </li>

//           <li
//             className='nav-item'
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Link to='/cart' className='nav-links'>
               
//               <i
//                 className='fas fa-shopping-cart'
//                 onClick={closeMobileMenu}
//               >
//                 <i className='nav-cart'></i>
//               </i>
//               Coș
//             </Link>
//           </li>

//           <li
//             className='nav-item'
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Link
//               to='/services'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Servicii
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/product/:id'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Produse <i className='fas fa-caret-down' />
//             </Link>
//             {dropdown && <Dropdown />}
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/register'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Înregistrare
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <Button />
//       </nav>
//     </>
//   )
// }

// export default Navbar
