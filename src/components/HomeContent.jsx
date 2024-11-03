import React from 'react';
import '../assets/CSS/HomeContent.css';
import Product from './Product'

function HomeContent() {
  return (
    <div className="homeContent">
      <img src="../HomeContent_Banner.png" alt="" className="homeContent__banner" />
      <div className="homeContent__row">
        <Product
          id="5885"
          Title="coffee beans spilling out of a cup on a wooden spoon next to some green leaves"
          Price="250"
          Rating="⭐⭐⭐⭐"
          Image="https://imgs.search.brave.com/WPD_WpxU1Oug13WM1i0WfTxP2VYp2ZsnKyKtdw2mKgg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk1LzJk/LzI0Lzk1MmQyNGVh/NDU5YmY2OWFjOGU3/N2RjOTY1MWM2OTk0/LmpwZw" />
        <Product
          id="1905"
          Title="coffee beans falling into a white cup on top of a wooden table with black background"
          Price="275"
          Rating="⭐⭐⭐⭐⭐"
          Image="https://imgs.search.brave.com/fVKXm7axelE6-zGd6MJil8vnoT4GSciDifL3OFL4bxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk1LzJk/LzI0Lzk1MmQyNGVh/NDU5YmY2OWFjOGU3/N2RjOTY1MWM2OTk0/LmpwZw" />
        {/* product */}
        {/* product */}
      </div>
      <div className="homeContent__row">
        <Product
          id="1261"
          Title="five cups of coffee lined up in a row"
          Price="300"
          Rating="⭐⭐⭐⭐"
          Image="https://imgs.search.brave.com/MTusYlHY0B0wyhWdfd0fr2JB_rKY7Zun-dybE_JzmMQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q2Lzgw/LzM2L2Q2ODAzNmE2/YWIyZDBjOTAzNTNh/NDNmYjRiYWIyODcw/LmpwZw" />
        <Product
          id="2462"
          Title="Cup of coffee with smoke and coffee beans on old wooden background"
          Price="225"
          Rating="⭐⭐"
          Image="https://imgs.search.brave.com/V_DFbFO9wxSz-Tndk9M5rtU7HAdGyQGP3BPLkB7OLVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/NzE5OTA2MC9waG90/by9jdXAtb2YtY29m/ZmVlLXdpdGgtc21v/a2UtYW5kLWNvZmZl/ZS1iZWFucy1vbi1v/bGQtd29vZGVuLWJh/Y2tncm91bmQuanBn/P2I9MSZzPTYxMng2/MTImdz0wJms9MjAm/Yz1wWVZPSVY4Tjcw/SllxSWJuR1NKZHRH/ZnRLWWxlU01rV2c0/cl9iblZlZl84PQ" />
        <Product
          id="5986"
          Title="Free Coffee Product Photography photo and picture"
          Price="350"
          Rating="⭐⭐⭐⭐"
          Image="https://imgs.search.brave.com/n4wVGzgag9DKnGTat6w4A7mfB8ODl0omv3jP3j00qwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/OS8xMy8xNC8yNC9j/b2ZmZWUtNTU2ODM3/NF82NDAuanBn" />

        {/* product */}
        {/* product */}
        {/* product */}
      </div>
      <div className="homeContent__row">
        <Product
          id="3655"
          Title="Photo rustic coffee packaging and beans on a wooden table"
          Price="500"
          Rating="⭐⭐⭐⭐⭐"
          Image="https://imgs.search.brave.com/i1O6Ps2e6r-putqq00wtv-NtyreqSfCrPwampxGrWro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ydXN0aWMtY29m/ZmVlLXBhY2thZ2lu/Zy1iZWFucy13b29k/ZW4tdGFibGVfMzM3/Mzg0LTIwNzc1Ni5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw" />
        {/* product */}
      </div>
    </div>
  )
}

export default HomeContent