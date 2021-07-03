//Main imports
import React, { useState } from 'react';
import classNames from 'classnames';

const Categories = React.memo(function Categories(props) {
    const { items, onClickItem } = props
    const [activeCategory, setActiveCategory] = useState(0);

    const onSelectItem = (index) => {
        setActiveCategory(index);
        onClickItem(index);
    };

    const fillList = () => {
        return items && items.map(
            (name, index) => 
                <li
                    className={
                        classNames(
                            { 'active': index === activeCategory }
                        )
                    }
                    key={`${name}_${index}`}
                    onClick={() => onSelectItem(index)}
                >
                    {name}
                </li>
        );
    };

    return (
        <div className="categories">
            <ul>
                { fillList() }
            </ul>
        </div>
    );
});

export default Categories;