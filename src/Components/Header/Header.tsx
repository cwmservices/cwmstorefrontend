import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{  useEffect, useRef, useState} from 'react';
import "./Header.scss";
import {NavLink, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
	const dispatch = useDispatch();
	const [name,setName] = useState("Admin");
	name.toLowerCase()

	const Navigate = useNavigate();
	const state = useSelector((state:any)=>state.AddToCart);
	const wstate = useSelector((state:any)=>state.AddToWhishList);
	const [isLogin,setIsLogin] = useState(false);
	
	function NetTotal(){
		const Total = state.reduce((total:any,item:any)=>{
			return total + (item.price*item.quantity);
		},0)
		return Total;
	}

	function TotalCartNumber(){
		const CartTotal = state.reduce((total:any,item:any)=>{
			return total + item.quantity;
		},0)
		return CartTotal;
	}

	function TotalWhishListNumber(){
		const WhishListTotal = wstate.reduce((total:any,item:any)=>{
			return total + item.quantity;
		},0)
		return WhishListTotal;
	}

	const ApplyMobileAdminNavClass:any = useRef(null);
	const ApplyMobileUlClass:any = useRef(null);
	const ApplyMobileTopNavClass:any = useRef(null);
	const AdminNavMobileDisplayFlex:any = useRef(null);
	const removeBarsDiv:any = useRef(null);
	const showCrossBarsDiv:any = useRef(null);

	function changeToMobileResponsiveHeader(){
		removeBarsDiv.current.setAttribute('class',"mobile-Bars-div");
		ApplyMobileAdminNavClass.current.setAttribute('class',"mobile-admin-nav");
		ApplyMobileUlClass.current.setAttribute('class',"mobile-ul");
		ApplyMobileTopNavClass.current.setAttribute('class',"mobile-top-nav");
		AdminNavMobileDisplayFlex.current.setAttribute('class',"admin-nav-mobile-show");
		showCrossBarsDiv.current.setAttribute('class',"show-cross-bar");
	}

	function backToWebResponsiveHeader(){
		showCrossBarsDiv.current.setAttribute('class',"Cross-Bars-div");
		ApplyMobileAdminNavClass.current.setAttribute('class',"admin-nav");
		ApplyMobileTopNavClass.current.setAttribute('class',"top-nav");
		AdminNavMobileDisplayFlex.current.setAttribute('class',"admin-nav-mobile");
		removeBarsDiv.current.setAttribute('class',"Bars-div");
		ApplyMobileUlClass.current.setAttribute('class',"back-mobile-ul");
	}

	function backToOriginal(){
		showCrossBarsDiv.current.setAttribute('class',"Cross-Bars-div");
		ApplyMobileAdminNavClass.current.setAttribute('class',"admin-nav");
		ApplyMobileTopNavClass.current.setAttribute('class',"top-nav");
		AdminNavMobileDisplayFlex.current.setAttribute('class',"admin-nav-mobile");
		removeBarsDiv.current.setAttribute('class',"Bars-div");
		ApplyMobileUlClass.current.setAttribute('class',"back-mobile-ul-withoutanim");
	}

	const CheckPageLoaded = async () => {
		try {
		const res = await fetch("https://cwmstorebackend.herokuapp.com/check", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
	
		const data = await res.json();
		setName(data.name);

		setIsLogin(true);
		console.log("user is login")

		} catch (error) {
		setIsLogin(false);
		console.log("user is logout")
		}
	};
	useEffect(() => {
		CheckPageLoaded();
	});

	return (
		<nav style={{position:"fixed",width:"100%",zIndex:200}}>
			<ul ref={ApplyMobileUlClass}>
				<div className="logo">
					<li><NavLink to="/" onClick={backToOriginal}><img className='brand-logo' src="brandLogo.png" alt="brandLogo"/></NavLink></li>
				</div>
				<div className="top-nav" ref={ApplyMobileTopNavClass}>
					{isLogin?<><li><NavLink onClick={backToOriginal} className='center-menu-links' to="/">Home</NavLink></li>
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/about">About</NavLink></li>
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/blog">Blog</NavLink></li>
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/contact">Contact</NavLink></li>	
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/logout">Logout</NavLink></li></>:<>
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/">Home</NavLink></li>
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/about">About</NavLink></li>
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/blog">Blog</NavLink></li>
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/contact">Contact</NavLink></li>	
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/signup">Signup</NavLink></li>
					<li><NavLink onClick={backToOriginal} className='center-menu-links' to="/login">Login</NavLink></li>
					</>	}				
					</div>
				<div className="admin-nav" ref={ApplyMobileAdminNavClass}>
					<span className="cart-web-count">{TotalCartNumber()}</span>
					<span className="whishlist-web-count">{TotalWhishListNumber()}</span>
					<NavLink to="/adminlogin"><FontAwesomeIcon icon="user-circle" color="orange" size='lg'/></NavLink><li><NavLink to="/adminlogin"><span className='lightAnchor'>admin&apos;s</span><br/>Account Login</NavLink></li>
					<NavLink to="/whishlist"><FontAwesomeIcon icon="heart" color="red" size='lg'/></NavLink><li><NavLink to="/whishlist"><span className='lightAnchor'>Favourite</span><br/>My Whislist</NavLink></li>
					<NavLink to="cart"><FontAwesomeIcon icon="cart-plus" color="yellow" size='lg'/></NavLink><li><NavLink to="/cart"><span className='lightAnchor'>Cart</span><br/>${NetTotal()==0?NetTotal()+".00":NetTotal()+5}</NavLink></li>	
				</div>
				<div className="admin-nav-mobile" ref={AdminNavMobileDisplayFlex}>
					<span className="cart-mobile-count">{TotalCartNumber()}</span>
					<span className="whishlist-mobile-count">{TotalWhishListNumber()}</span>
					<NavLink to="/adminlogin"><FontAwesomeIcon icon="user-circle" color="orange" size='lg'/></NavLink><li><NavLink to="/adminlogin"><span className='lightAnchor'>admin&apos;s</span><br/>Account Login</NavLink></li>
					<li><NavLink onClick={()=>backToWebResponsiveHeader()} to="whishlist"><FontAwesomeIcon icon="heart" color="red" size='lg'/></NavLink><NavLink onClick={()=>backToWebResponsiveHeader()} to="/whishlist">Whishlist</NavLink></li>
					<li><NavLink onClick={()=>backToWebResponsiveHeader()} to="cart"><FontAwesomeIcon icon="cart-plus" color="yellow" size='lg'/></NavLink><NavLink onClick={()=>backToWebResponsiveHeader()} to="/cart">Cart</NavLink></li>	
				</div>
				<div className='Bars-div' ref={removeBarsDiv}>
					<button onClick={changeToMobileResponsiveHeader} className="hamburger">
						<FontAwesomeIcon icon="bars" color="white" size="lg"/>
					</button>
				</div>
				<div className='Cross-Bars-div' ref={showCrossBarsDiv}>
					<button onClick={backToWebResponsiveHeader} className="hamburger">
						<FontAwesomeIcon icon="times" color="white" size="lg"/>
					</button>
				</div>
			</ul>
		</nav>
	)
}

export default Header;