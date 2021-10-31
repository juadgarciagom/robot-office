import React from 'react'

import '../search-box/search-box.css'

export const SearchBox = (props) => {
    console.log(props);
    return (
        <input
          className='search'
          type="search"
          placeholder={props.placeholder}
          onChange={props.search}
        />
    )
}
