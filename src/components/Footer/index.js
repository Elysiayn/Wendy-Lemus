import React from 'react';

function Footer() {
  return (
    <footer class="page-footer teal darken-2">
    <div class="container">
      <div class="row">
        {/* <div class="col l6 s12">
          <h5 class="white-text">Footer Content</h5>
          <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div> */}
        <div class="">
          {/* <h5 class="white-text">Links</h5> */}
          <ul>
            <li className="col s4">
                <a class="grey-text text-lighten-3" href="https://github.com/Elysiayn">
                  <img
                    src={require('../../assets/images/github.png').default}
                    alt='Github logo'
                    className='icons center'
                  />
                </a>
            </li>
            <li className="col s4">
              <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/wendy-lemus-221398166/">
                <img
                  src={require('../../assets/images/linked.png').default}
                  alt='Linked-In logo'
                  className='icons center'
                />
              </a>
            </li>
            <li className="center">
              <a class="grey-text text-lighten-3" href="https://stackoverflow.com/users/14364170/wendy">
                <img
                  src={require('../../assets/images/overflow.png').default}
                  alt='Stack-Overflow logo'
                  className='icons center'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* <div class="footer-copyright"> */}
      {/* <div class="container"> */}
      {/* © 2014 Copyright Text */}
      {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
      {/* </div> */}
    {/* </div> */}
  </footer>
  )
}

export default Footer;