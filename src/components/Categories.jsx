import React from 'react';

function Categories({items, onClick}) {
    return (
        <div>
            <div className="categories">
                <ul>
                    <li className="active">Все</li>
                    {
                         items.map((name, index) => (
                            <li onClick={() => onClick(name)} key={`${name}_${index}`}>
                                {name}
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    );
}

export default Categories;