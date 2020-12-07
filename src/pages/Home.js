import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

import Game from '../components/Game';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)``;

const Games = styled(motion.div)``;

export default Home;
