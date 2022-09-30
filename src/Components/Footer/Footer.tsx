import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './Footer.scss';

function Footer() {
	return (
		<>
			<div className='website-perks'>
				<div className='perk'>
					<div className='perks-icons'><FontAwesomeIcon icon="car" size="lg" color="green"/></div>
					<div className='detail-perks'>
						<h3>FREE DELIVERY</h3>
						<p>For all orders over $120</p>
					</div>
				</div>
				<div className='perk'>
					<div className='perks-icons'><FontAwesomeIcon icon="cash-register" size="lg" color="green"/></div>
					<div className='detail-perks'>
						<h3>SAFE PAYMENT</h3>
						<p>100% secure payment</p>
					</div>
				</div>
				<div className='perk'>
					<div className='perks-icons'><FontAwesomeIcon icon="message" size="lg" color="green"/></div>
					<div className='detail-perks'>
						<h3>24/7 HELP CENTER</h3>
						<p>Dedicated 24/7 support</p>
					</div>
				</div>
				<div className='perk'>
					<div className='perks-icons'><FontAwesomeIcon icon="user-friends" size="lg" color="green"/></div>
					<div className='detail-perks'>
						<h3>FRIENDLY SERVICES</h3>
						<p>30 day satisfaction</p>
					</div>
				</div>
			</div>

			<hr/>
			<div className='footer-flex'>
				<div className='footer-div'>
					<li className='footer-nav-heading'>About The Store</li>
					<li className='phone-icon'><FontAwesomeIcon icon="phone" size='lg' color="green"/><span>Got Question? Call us 24/7!</span><br/><span className='phone'><span className='number'>+92 331 927 2285</span></span></li>
					<li className='contact-perk'>Add: Block No 62/3, Lachi Cottage, PAF Officer&apos;s Mess, Kohat Cantt</li>
					<li className='contact-perk'>Mail: cwmservices1235@gmail.com</li>
				</div>
				<div className='footer-div'>
					<li className='footer-nav-heading'>Customer Services</li>
					<li>Register</li>
					<li>Login</li>
					<li>Contact Us</li>
					<li>About Us</li>
				</div>
				<div className='footer-div'>
					<li className='footer-nav-heading'>Shop</li>
					<li>Shop</li>
					<li>Checkout</li>
					<li>Shopping Cart</li>
					<li>Wishlist</li>
				</div>
				<div className='footer-div'>
					<li className='footer-nav-heading'>Products</li>
					<li>Kitchen</li>
					<li>Sports</li>
					<li>Electronics</li>
					<li>Gadgets</li>
				</div>
			</div>

			
			<div className='footer-copyright'>Copyright © CWMSTORE. all rights reserved. Powered by CWMSERVICES.</div>
		</>
	)
}

export default Footer