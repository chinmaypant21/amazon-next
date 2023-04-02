import React from 'react'
import Image from 'next/image'
import style from '../../styles/Header.module.css'
import {CartIcon, LocationIcon, SearchIcon}  from '../../utils/icons'

type SearchProps = {
  className?: string;
}

const SearchBar : React.FC<SearchProps>= ({className = ''} : SearchProps) : JSX.Element => {
  return (
    <div className={`flex flex-row flex-1 text-fc_input ${style.search_bar} ${className}`}>
      <input type='text' placeholder='Search Amazon'/>
      <div className='flex items-center px-2 bg-amazon_search hover:bg-amazon_search-hover'
          onClick={() => {}
        }>
        <SearchIcon sx={{color:'#2a2a2a'}}/>
      </div>
    </div>
  )
}

const Header : React.FC = () : JSX.Element => {
  return (  
    <header className={`text-fc_main ${style.pg_header}`}>
      {/* Top header */}
      <div className='flex flex-col bg-amazon_blue '>
        <div className={`flex items-center ${style.top_container}`}>

          {/* Logo */}
          <div>
            <Image src='/assets/amazon_logo.png' 
              className="mt-2"
              alt="Logo"
              width='150'
              height='40' 
            />
          </div>

          {/* Location */}
          <div className='hidden lg:flex flex-row'>
            <div className='flex items-end'>
              <LocationIcon />
            </div>
            <div className={`flex flex-col items-center ${style.location_text} ${style.text_lined}`}>
              <span className='text-xs text-fc_sec'>Deliver to {'Name'}</span>
              <span className='text-base'>{'Location pincode'}</span>
            </div>
          </div>

          {/* SearchBar */}
          <SearchBar className='hidden md:flex' />

          {/* Language */}
          <div className={`hidden md:flex items-center font-semibold ${style.langauge_container}`}>
            <Image src={'/in-flag.svg'} height={25} width={25} alt='flag' className={style.lang_flag_img}/>
            <select name="langauge" id="header_lang" className='flex items-center'>
                <option value="header_lang_EN">EN</option>
              </select>
          </div>

          {/* Accounts & Lists  */}
          <div className={`${style.text_lined}`}>
              <span className={`text-xs`}>{`Hello, ${'Chinmay'}`}</span>
              <span className='font-semibold'>Account & Lists</span>
          </div>

          {/* Orders */}
          <div className={`hidden lg:flex flex-col`}>
              <span className={`text-xs`}>Returns</span>
              <span className='font-semibold'>& Orders</span>
          </div>

          {/* Cart */}
          <div>
            <CartIcon />
            <span>Cart</span>
          </div>
          
        </div>

        <div className='flex'>
          <SearchBar className='md:hidden mx-4 !h-10 '/>
        </div>
      </div>

      {/* Sec Header */}
      <div className={`flex gap-x-5 bg-amazon_blue md:bg-amazon_blue-sec ${style.sec_container}`}>
          <span>Amazon miniTV</span>
          <span>Sell</span>
          <span>Gift Cards</span>
          <span>Baby</span>
          <span className='hidden sm:block'>Pet Supplies</span>
          <span className='hidden sm:block'>Grocery & Gourmet Foods</span>
          <span className='hidden md:block'>Coupons</span>
          <span className='hidden lg:block'>Health, Household & Personal Care</span>
      </div>
    </header>
  )
}

export default Header;