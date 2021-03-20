import React, {Component } from 'react';
// Import Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";

// export class Navbar extends Component{
  
//   componentDidMount(){
//     document.addEventListener('DOMContentLoaded', function() {
//       var elems = document.querySelectorAll('.sidenav');
//       var instances = M.Sidenav.init(elems, {});
//     });
  
//     // M.AutoInit();
//   }

//   render() {
//     // const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
//     return (
//       <div>
//         <nav>
//           <div class="nav-wrapper blue">

//           <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>

//             <div className="container">
//               <a href="#" class="brand-logo">Elysiayn</a>
//               <ul id="nav-mobile" class="right hide-on-med-and-down">
//                 <li><a href="about">About Me</a></li>
//                 <li><a href="portfolio">Portfolio</a></li>
//                 <li><a href="contact">Contact</a></li>
//                 <li><a href="resume">Resume</a></li>
//               </ul>
//             </div>
//           </div>
//         </nav>
        
//         <ul id="slide-out" class="sidenav">
//           <li><div class="user-view">
//             <div class="background">
//               <img src="images/office.jpg"/>
//             </div>
//             <a href="#about"><img class="circle" src="src\assets\images\pic_crop.jpg"/></a>
//             <a href="#name"><span class="grey-text name">Wendy Lemus</span></a>
//             <a href="#email"><span class="grey-text email">Elysiayn@gmail.com</span></a>
//           </div></li>
//           <li><div class="divider"></div></li>
//           <li><a href="#!"><i class="material-icons">cloud</i>About Me</a></li>
//           <li><a href="#!"><i class="material-icons">cloud</i>Portfolio</a></li>
//           <li><a href="#!"><i class="material-icons">cloud</i>Contact</a></li>
//           <li><a href="#!"><i class="material-icons">cloud</i>Resume</a></li>
//           <li><a class="subheader">Subheader</a></li>
//         </ul>
//       </div>
//     );
//   }
// }

function Navbar(props) {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;