import React from 'react'
import Image from 'next/image'
import style from '../../styles/Header.module.css'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {CartIcon, LocationIcon, SearchIcon}  from '../../utils/icons'

const Header : React.FC = () : JSX.Element => {
  return (
    <header className={`text-fc_main ${style.pg_header}`}>
      {/* Top header */}
      <div className={`flex items-center bg-amazon_blue ${style.top_container}`}>

        {/* Logo */}
        <div>
          <Image src='/assets/amazon_logo.png' 
            className="cursor-pointer mt-2"
            alt="Logo"
            width='150'
            height='40' 
          />
        </div>

        {/* Location */}
        <div className='flex flex-row'>
          <div className='flex items-end'>
            <LocationIcon />
          </div>
          <div className={`flex flex-col items-center ${style.location_text} ${style.text_lined}`}>
            <span className='text-xs text-fc_sec'>Deliver to {'Name'}</span>
            <span className='text-base'>{'Location pincode'}</span>
          </div>
        </div>

        {/* SearchBar */}
        <div className={`flex flex-row flex-1 text-fc_input ${style.search_bar}`}>
            <input type='text' placeholder='Search Amazon'/>
          <div className='bg-amazon_search hover:bg-amazon_search-hover'>
            <SearchIcon sx={{color:'#111'}}/>
          </div>
        </div>

        {/* Language */}
        <div className={`flex items-center font-semibold ${style.langauge_container}`}>
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
        <div className={`${style.text_lined}`}>
            <span className={`text-xs`}>Returns</span>
            <span className='font-semibold'>& Orders</span>
        </div>

        {/* Cart */}
        <div>
          <CartIcon />
          <span>Cart</span>
        </div>
        
      </div>

      {/* Sec Header */}
      <div>

      </div>
    </header>
  )
}

export default Header;