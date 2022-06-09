import React from 'react';
import { FlexWrapper } from '../styles/styles.js';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => (
  <FlexWrapper>
    <a
      href='https://www.facebook.com/profile.php?id=100057774904984'
      target='_blank'
      rel='noopener noreferrer'
      alt='facebook'
    >
      <FacebookIcon/>
    </a>
  </FlexWrapper>
);

export default Footer;
