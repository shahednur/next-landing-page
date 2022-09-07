import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../section/Banner';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Banner />
    </ThemeProvider>
  )
}
