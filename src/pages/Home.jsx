//Main imports
import React, { useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';

//Components
import { Categories, Sort, ProductGrid } from '../components';

//Redux actions
import { setCategory } from '../redux/actions/filters';

//Consts
import { categoriesList, sortList } from '../consts';

const Home = () => {
    const dispatch = useDispatch();
    const items  = useSelector(({ products }) => products.items);

    const onSelectCategory = useCallback((index) => {
            dispatch(setCategory(index));
    }, [dispatch]);

    return(
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoriesList}
                    onClickItem={onSelectCategory}
                />
                <Sort 
                    items={sortList} 
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <ProductGrid 
                items={items}
            />
        </div>
    );
}

export default Home;