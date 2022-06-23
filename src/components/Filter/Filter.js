import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Filters.scss';

function Filters() {
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
                <fieldset className='color-group' role="Color Checks">
                <h6>Color</h6>
                    <div role="CheckboxGroup">
                      <span className='checkbox'>
                        
                        <input id="Red" name='Red' value="val" defaultChecked="Checked" type="checkbox" />
                      </span>
                      <span className='checkbox1'>
                        <input id="Black" type="checkbox" name='Black' value="val" />
                      </span>  
                      <span className='checkbox2'>
                        <input id="Green" name='Green' value="val" type="checkbox" />
                      </span>
                      <span className='checkbox3'>
                        <input id="Purple" type="checkbox" name='Purple' value="val" />
                      </span>                     
                    </div>
             </fieldset>

             {/* Brands section start */}   
            <fieldset>
                <h6>Brands</h6>
                    <div role="CheckboxGroup">
                      <input id="Janie and Jack" name='Janie and Jack' value="val" type="checkbox" />
                      <label htmlFor="Janie and Jack">Janie and Jack</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="Old Navy and Old Navy Outlet" type="checkbox" name='Old Navy and Old Navy Outlet' value="val" />
                      <label htmlFor="Old Navy and Old Navy Outlet">Old Navy and Old Navy Outlet</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="Lilly Pulitzer" type="checkbox" name='Lilly Pulitzer' value="val" />
                      <label htmlFor="Lilly Pulitzer">Lilly Pulitzer</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="Zara" type="checkbox" name='Zara' value="val" />
                      <label htmlFor="Zara">Zara</label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>   
             </fieldset>  
            
             {/* Sizes section start */}   
             <fieldset>
                <h6>Size</h6>
                    <div role="CheckboxGroup">
                      <input id="small" name='small' value="val" type="checkbox" />
                      <label htmlFor="small">Small</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="Large" type="checkbox" name='Large' value="val" />
                      <label htmlFor="Large">Large</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="Medium" type="checkbox" name='Medium' value="val" />
                      <label htmlFor="Medium">Medium</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="XL" type="checkbox" name='xl' value="val" />
                      <label htmlFor="XL">XL</label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>       
             </fieldset>   
             
             <fieldset>
                <h6>Price</h6>
                    <div role="CheckboxGroup">
                      <input id="Low" name='Low' value="val" type="checkbox" />
                      <label htmlFor="Low">Low</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="Medium" type="checkbox" name='Medium' value="val" />
                      <label htmlFor="Medium">Medium</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="High" type="checkbox" name='High' value="val" />
                      <label htmlFor="High">High</label>
                    </div>
                    <div role="CheckboxGroup">
                      <input id="HighRange" type="checkbox" name='HighRange' value="val" />
                      <label htmlFor="HighRange">High Range</label>
                    </div>
                    <a href={url} aria-label='Show More Link' className="shoremore">Show more</a>       
             </fieldset>    
        </div>
        {/* filters section end */}
    </>
    )
}

export default Filters


