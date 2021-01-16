import React, { useState } from 'react';
//Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import logo from '../img/logo.svg';
//Redux and Routes
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  const clearSearched = () => {
    dispatch({ type: 'CLEAR_SEARCHED' });
  };
  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearched}>
        <img src={logo} alt='logo' />
        <h1>GAME9</h1>
      </Logo>
      <form className='search'>
        <input value={textInput} onChange={inputHandler} type='text' placeholder='Enter game name...'/>
         
        <button onClick={submitSearch} type='submit'>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    border-radius: 3px 3px;
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    border-radius: 3px 3px;
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: black;
    color: white;
    transition: 0.3s;

    :hover {
      background-color: #5b5b5b;
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export default Nav;
