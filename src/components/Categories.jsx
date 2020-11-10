import React, {useState} from 'react';

/*

class Categories extends React.Component {
    state = {
        activeItem: 0,
    }
    onSelectItem = index => {
    this.setState({
        activeItem: index,
    })
    }

    render() {
        const {items, onClick} = this.props;
        return (
            <div>
                <div className="categories">
                    <ul>
                        <li>Все</li>
                        {
                            items.map((name, index) => (
                                <li
                                    className={this.state.activeItem === index ? "active" : ""}
                                    onClick={() => this.onSelectItem(index)}
                                    key={`${name}_${index}`}>
                                    {name}
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        );
    }
}
*/


function Categories({items, onClick}) {
    useState()

    const [activeItem, setActiveItem,] = React.useState(null);
    const onSelectItem = (index) => {
        setActiveItem(index)
    }
    return (
        <div>
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {
                        items.map((name, index) => (
                            <li
                                className={activeItem === index ? "active" : ""}
                                onClick={() => onSelectItem(index)} key={`${name}_${index}`}>
                                {name}
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
        ;
}


export default Categories;
