import React from 'react';
import imgGithub from '../../assets/images/github.png';
import imgLinked from '../../assets/images/linked.png';
import imgStack from '../../assets/images/overflow.png';

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
								{/* src\assets\images\github.png */}
								<a
									class="grey-text text-lighten-3"
									href="https://github.com/Elysiayn"
									target="_blank"
								>
									<img
										src={imgGithub}
										alt="Github logo"
										className="icons center"
									/>
								</a>
							</li>
							<li className="col s4">
								<a
									class="grey-text text-lighten-3"
									href="https://www.linkedin.com/in/wendy-lemus-221398166/"
									target="_blank"
								>
									<img
										src={imgLinked}
										alt="Linked-In logo"
										className="icons center"
									/>
								</a>
							</li>
							<li className="center">
								<a
									class="grey-text text-lighten-3"
									href="https://stackoverflow.com/users/14364170/wendy"
									target="_blank"
								>
									<img
										src={imgStack}
										alt="Stack-Overflow logo"
										className="icons center"
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;