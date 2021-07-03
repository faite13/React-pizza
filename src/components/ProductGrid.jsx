//Main imports
import React from 'react';

//Components
import { Product } from './index';

const ProductGrid = ({ items }) => {
    return (
        <div className="content__items">
            {
                items && items.map(
                    item => 
                        <Product 
                            key={`${item.name}_${item.id}`} 
                            {...item}
                        />
                )
            }
        </div>
  );
};

export default ProductGrid;
