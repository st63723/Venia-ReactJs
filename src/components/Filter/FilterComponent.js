import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './FilterComponent.scss';

function FilterComponent() {
    let url = "";
    return (
    <>  
        {/* Page Navigation section */} 
        <nav className="crumbs">
            <Link to="/" aria-label='Clothing url'>Clothing</Link> /
            <Link to="/" aria-label='Womens url'>Women's</Link> /
            <Link to="/" aria-label='Outerwear url'>Outerwear</Link>    
        </nav>

         {/* filters section start */}   
        <div className="filters">
             <div className="filters-mobile">
                    <div className='filter-title'>
                        Filters
                    </div>
                     <div className='colors-names-row'>
                        <span className='colors-name'>Black</span>
                       <a href={url}>Clear all</a> 
                     </div>
                </div> 
                <div className='filter-title filters-desktop'>Filters</div>

                 {/* Color checks section */}   
                <fieldset className='color-group'>
                <div className='filter-sub-title'>Color</div>
                    <div role="group">
                      <label className='checkbox'>
                        <input name='Red' value="val" defaultChecked="Checked" type="checkbox" />
                      </label>
                      <label className='checkbox1'>
                        <input type="checkbox" name='Black' value="val" />
                      </label>  
                      <label className='checkbox2'>
                        <input name='Green' value="val" type="checkbox" />
                      </label>
                      <label className='checkbox3'>
                        <input type="checkbox" name='Purple' value="val" />
                      </label>                     
                    </div>
             </fieldset>

             {/* Brands section start */}   
            <fieldset>
                <div className='filter-sub-title'>Brands</div>
                    <div role="group">
                      <label>  
                          <input type="checkbox" className="checkbox-field" />
                          Janie and Jack
                      </label>
                    </div>
                    <div role="group">
                      <label>  
                          <input type="checkbox" className="checkbox-field" />
                          Old navy and Old outlet
                        </label>
                    </div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" className="checkbox-field" />
                          Lilly Pulitzer
                        </label>
                    </div>
                    <div role="group">
                      <label>  
                          <input type="checkbox" className="checkbox-field" />
                          Zara
                        </label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>   
             </fieldset>  
            
             {/* Sizes section start */}   
             <fieldset>
                <div className='filter-sub-title'>Size</div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" className="checkbox-field" />
                          Small
                        </label>
                    </div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" className="checkbox-field" />
                          Large
                        </label>
                    </div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" className="checkbox-field" />
                          Medium
                        </label>
                    </div>
                    <div role="group">
                       <label>  
                          <input type="checkbox" className="checkbox-field" />
                          XL
                        </label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>       
             </fieldset>   
             
             <fieldset>
                <div className='filter-sub-title'>Price</div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" className="checkbox-field" />
                          500 - 1000
                        </label>
                    </div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" className="checkbox-field" />
                          1000 - 5000
                        </label>
                    </div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" className="checkbox-field" />
                          5000 - 10000
                        </label>
                    </div>
                    <div role="group">
                        <label>  
                          <input type="checkbox" className="checkbox-field" />
                          10000 - 20000
                        </label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>       
             </fieldset>    
        </div>
        {/* filters section end */}
    </>
    )
}

export default FilterComponent


