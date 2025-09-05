import React, { useState, useEffect } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY > 50) {
        setShow(true);
      }else {
        setShow(false);
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);


    const handleChange = (e) =>{
      setSearchValue(e.target.value);
      navigate(`/search?q=${e.target.value}`)
    };


  return (
    <nav className={`nav ${show && "nav__black"} `}>
      <img
  alt='Netflix logo'
  src="https://i.namu.wiki/i/D3xkCENQRUf-rn0_1apxt-OKh8QhHPUSpHIqlP4Qs-nmErlQnxvTK7wyX0ZDuftgvi8Njoh-hwsc9vRuxd1iig.svg"
  className='nav__logo'
  onClick={() => navigate("/")}   // 새로고침 대신 메인으로 이동
  style={{ cursor: "pointer" }}
/>


      <input value={searchValue} onChange={handleChange} className='nav__input' name="search"
             type='text' placeholder='영화를 검색해주세요' />

      <img
        alt='User Logged'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        className='nav__avatar'
      />
    </nav>
  )
}
