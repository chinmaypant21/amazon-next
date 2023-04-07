import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import style from '../../styles/Header.module.css'
import {LocationIcon, MenuIcon, SearchIcon}  from '../../utils/icons'
import fetchLocationAPI from '../../utils/fetchLocationAPI'

type SearchProps = {
  className?: string;
}

const SearchBar : React.FC<SearchProps>= ({className = ''} : SearchProps) : JSX.Element => {
  return (
    <div className={`flex flex-row flex-1 text-fc_input bg-white ${style.search_bar} ${className}`}>
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
  const [location, setLocation] = useState<[string, string]>(['',''])

  useEffect(() => {
    fetchLocationAPI().then(data =>
      setLocation(data)
    )
  },[])

  return (  
    <header className={`sticky top-0 z-20 text-fc_main ${style.pg_header}`}>
      {/* Top header */}
      <div className='flex flex-col bg-amazon_blue-sec md:bg-amazon_blue '>
        <div className={`flex items-center ${style.top_container}`}>

          {/* Logo */}
          <div>
            <Image src='/assets/amazon_logo.png' 
              className="mt-2 h-9 sm:h-11 lg:h-full"
              alt="Logo"
              width='100'
              height='40' 
            />
          </div>

          {/* Location */}
          <div className='hidden md:flex flex-row'>
            <div className='flex items-center mt-2'>
              <LocationIcon />
            </div>
            <div className='flex items-center'>
              <div className={`items-center ${style.location_text} ${style.text_lined}`}>
                <span className='text-xs text-fc_sec'>Deliver to {'Chinmay'}</span>
                <span className='text-base w-full '>{location[0]} {location[1]}</span>
              </div>
            </div>
          </div>

          {/* SearchBar */}
          <SearchBar className='hidden md:flex mx-2' />

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
          <div className='flex'>
            <div className={style.cart_container}>
              <Image src={'/assets/cartIcon.png'} alt='cart' width={40} height={35}/>
              {/* <CartIcon /> */}
              <span className='text-orange-400 font-semibold w-full flex justify-center'>{'0'}</span>
            </div>
            <span className='hidden md:flex items-center font-bold'>Cart</span>
          </div>
          
        </div>

        {/* Mobile SearchBar */}
        <div className='flex'>
          <SearchBar className='md:hidden mx-4 !h-10 '/>
        </div>
      </div>

      {/* Sec Header */}
      <div className={`flex gap-x-2 bg-amazon_blue-sec ${style.sec_container}`}>
          <span><MenuIcon /> All</span>
          <span className='hidden md:block'>Amazon miniTV</span>
          <span>WishList</span>
          <span className='hidden sm:block'>Gift Cards</span>
          <span className='hidden xs-l:block'>Baby</span>
          <span>Pet Supplies</span>
          <span className='hidden sm:block'>Grocery & Gourmet Foods</span>
          <span>Deal</span>
          <span className='hidden lg:block'>Health, Household & Personal Care</span>
      </div>

      {/* Delivery Location Extend */}
      <div className='md:hidden flex items-center bg-amazon_blue-mobile py-2 pl-1 text-xs'>
        <LocationIcon className='text-xll'/>
        <span>{`Delivery Address: ${'Chinmay'} - ${location[0]} ${location[1]} `}</span>
      </div>

    </header>
  )
}

export default Header;