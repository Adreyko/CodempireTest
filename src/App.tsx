import React, { useState } from 'react'
import CountryList from './CountryList/CountryList'
import Header from './Header/Header'

const App = () => {

  const [searchInput, setSearchInput] = useState('')

  return (
    <div >
      <Header setSearchInput={setSearchInput} />
      <CountryList searchInput={searchInput} />
    </div>
  )
}

export default App