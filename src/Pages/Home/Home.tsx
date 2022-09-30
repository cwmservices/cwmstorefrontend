import React,{useState,useEffect, useRef} from 'react';
import '../../Pages/Home/Home.scss';

import Product from '../../Components/Product/Product';
import Pagination from '../../Components/Pagination/Pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Categories } from '../../Categories';
import Category from '../../Components/Category/Category';

import ClipLoader from "react-spinners/ClipLoader";

function Home() {
	const [Products,setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(8);
	const [loading,setLoading] = useState(false);
	
	const pagination:any = useRef(null);

	useEffect(() => {
	// fetch products data
	const fetchProducts = async () => {
		setLoading(true);
		pagination.current.style.display='none';
		const res = await fetch("https://cwmstorebackend.herokuapp.com/products", {
			credentials: 'include'
		});
		const data = await res.json();
		setProducts(data);
		setTimeout(() => {
			setLoading(false);
			pagination.current.style.display='flex';
		}, 2000);
		};
		
		fetchProducts();
	}, [])

	

	//Filter Category
	const filterCategory = (name:any) => {	
		fetch("https://cwmstorebackend.herokuapp.com/products", {
			credentials: 'include'
		}).then((data)=>{
			data.json().then((allData)=>{
				if(name=="All"){
					setProducts(allData);
				}else{
					const filterItems = allData.filter((item:any) => {
						return item.category == name;
					});
					setProducts(filterItems);
					setCurrentPage(1);
				}
			})
		})
	};

	//Get Current Products
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = Products.slice(indexOfFirstProduct, indexOfLastProduct);

	// Change Page
	function paginate(pageNumber:any){
		setCurrentPage(pageNumber);
	}

	function scrollDown(){
		window.scrollTo(0,380);
	}

	function scrollDownMobile(){
		window.scrollTo(0,240);
	}

	return (
	<>
	{/* //banner starts here */}
	<div className='banner'>
	<img src="banner.png" alt="banner" />
	<h1>The Best Creative Market <br /> For Your Shopping.</h1> 
	<button onClick={scrollDown}>Shop Now</button>
    </div>
	<div className='banner-mobile'>
	<h1>The Best Creative Market For <br />Everyday Shopping</h1> 
	<button onClick={scrollDownMobile}>Shop Now</button>
	</div>
	{/* //banner ends here */}
	
	{/* Product Categories */}
	
	<hr className='hr'/>
	<div className='categories'>
		{
			Categories.map((category)=>{
				return (
					<button key={category.id} onClick={()=>filterCategory(category.name)} className='category-btn'>
						<Category name={category.name} icon={category.icon} />
					</button>
				)
			})
		}
	</div>
	<hr className='bottom-hr'/>
	{/* Product Categories */}

	
	{/* //Products Listing */}
	{
		loading?<div style={{textAlign:"center",marginTop:"100px",marginBottom:"100px"}}><ClipLoader color="green" loading={loading} size={70} /></div>:<><div className='products'>
		{
			currentProducts.map((product:any)=>{
				return (
					<div key={product._id}>
						<Product name={product.name} imageUrl={product.imgUrl} price={product.price} category={product.category} id={product._id} quantity={product.quantity} total={product.total}/>
					</div>
				)
			})
		}
	</div></>
	}
	
	<div className='pagination' ref={pagination}>
	<Pagination
        productsPerPage={productsPerPage}
        totalProducts={Products.length}
        paginate={paginate}
      />
	</div>
	
	{/* //Products Listing */}
	</>
	)
}

export default Home;