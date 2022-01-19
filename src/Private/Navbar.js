import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='Home'>
					MyApp
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<div className='dropdown'>
							<Link
								to='home'
								className='btn btn-dark dropdown-toggle'
								role='button'
								id='dropdownMenuLink'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Menu
							</Link>
							<ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
								<li>
									<Link className='dropdown-item' to='/jokes'>
										Jokes
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/logout'>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</ul>
				</div>
				<Link to='/loginform'>
					<button type='button' className='btn btn-info'>
						Login
					</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
