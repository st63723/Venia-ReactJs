import React, { useState, useEffect } from "react";
import Axios from "axios";
import FilterComponent from '../Filter/FilterComponent';
import LoaderComponent from "../Loader/LoaderComponent";
import FiltersIcon from '../../assets/svg/filters.svg';
import ArrowUpIcon from '../../assets/svg/arrow-up.svg';
import ArrowDownIcon from '../../assets/svg/arrow-down.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import './ProductsComponent.scss';
import './PaginationComponent.scss';
import { Link } from "react-router-dom";

import Pagination from "react-js-pagination";
import { setProducts } from "../../reducers/products";
import { useDispatch, useSelector } from "react-redux";

function ProductsComponent() {
    const [hideLightbox, setHideLightbox] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
     const dispatch = useDispatch();
    
    const products = useSelector(store => store.products.data);
    
   useEffect(() => {
    Axios.get('https://fakestoreapi.com/products').then(res => {
        const data = res.data;
        dispatch(setProducts(data));
    })
}, [dispatch]); 

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //pagination 
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);
    let url = "";
    
    return (
      products.length ?
        <div className='products aem-Grid aem-Grid--12' aria-label="Cloth Products">
        
         {/* Left Filters section start */}
         
         <div className={`${hideLightbox ? "show-lightbox" : "hide-lightbox"}`}>
            <span className='cross-mobile' onClick={() => setHideLightbox(false)}> X </span>
            <div className="left-filters-box aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 min768px">
              <aside>
                <FilterComponent />
               </aside>  
            </div> 
          </div>
          <div className="left-filters-box aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 min768px">
            <aside> 
             <FilterComponent />
            </aside> 
          </div> 
          
        {/* Left Filters section end */}
     
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 min768pxx">
         
         {/* Filter resultsand sort products for mobile view */}   
            <div className='filters-sort mobile-view'>
                <span className='filters-pro' onClick={() => setHideLightbox(true)}>
                   <img src={FiltersIcon} alt="Filters icon" />
                    Filter Results
                </span>
                <span className='sort'>
                    <img src={ArrowDownIcon} alt="Sort Products icon" />
                    <img src={ArrowUpIcon} alt="Sort Products icon" />
                    Sort Products
                </span>
            </div>
            {/* Filter resultsand sort products for mobile view end*/}  

             {/* products length and sort dropdown start*/}  
            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                <div className='aem-Grid aem-Grid--12'>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <span className='dark-gunmental semi-bold'> {products.length} Results</span>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--hide">
                        <select>
                            <option>Sort by Latest</option>
                        </select>
                    </div>
                 </div>   
             </div>  
              {/* products length and sort dropdown end*/}  

             {/* products List start*/}  
             <section>
                <div className='products-box'>
                        {currentPosts.map((product) => (     
                            <Link to={`/products/${product.id}`} key={product.id}>
                            <article> 
                                <div className='product'>
                                    <img src={product.image} alt={product.title} /> 
                                    <span className='product-name'>{product.title}</span>
                                    <span className='product-price'>${product.price}</span>
                                    <img src={HeartIcon} className="heart-icon" alt="Heart icon" />                   
                                </div>
                            </article>
                            </Link>
                        ))} 
                </div>
             </section>
             {/* products List end*/}   

            {/* Pagination start*/}          
             <div className="pagination-background">
                <Pagination
                itemsCountPerPage={postsPerPage}
                activePage={currentPage}
                totalItemsCount={products.length}
                onChange={handlePageChange}
                hideFirstLastPages={true}
                itemClass="page-item"
                linkClass="page-link"
                />
            </div>   {/* Pagination end*/}      
        </div>   
    </div>   
    : <LoaderComponent />
    )
}

export default ProductsComponent