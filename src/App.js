import React from 'react'
import './App.css'
import RowComp from './components/RowComp'
import requests from './utils/api/requests'
import BannerComp from './components/BannerComp'

function App() {
  return (
    <div className="App">
      {/* <NavComp /> */}
      <BannerComp />
      <RowComp isLargeRow propsTitle='PHIM GỐC NETFLIX' propsFetchUrl={requests.fetchNetflixOriginals} />
      <RowComp propsTitle='Theo trend hiện giờ' propsFetchUrl={requests.fetchTrending} />
      <RowComp propsTitle='Được rate cao nhất' propsFetchUrl={requests.fetchTopRated} />
      <RowComp propsTitle='Phim Action' propsFetchUrl={requests.fetchActionMovies} />
      <RowComp propsTitle='Phim Comedy' propsFetchUrl={requests.fetchComedyMovies} />
      <RowComp propsTitle='Phim Horror' propsFetchUrl={requests.fetchHorrorMovies} />
      <RowComp propsTitle='Phim Romance' propsFetchUrl={requests.fetchRomanceMovies} />
      <RowComp propsTitle='Phim tài liệu' propsFetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default App
