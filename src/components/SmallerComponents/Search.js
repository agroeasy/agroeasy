import React from 'react';
import { Input } from 'antd';

const Search = Input.Search;
//this is the search component
class SearchItems extends React.Component {
    render() {
        return(
            <div>
                <Search placeholder="search products..." 
                    onSearch={value => console.log(value)}
                    enterButton 
                />
            </div>
        );
    }
}

export default SearchItems;
