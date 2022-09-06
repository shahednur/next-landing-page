// import '../styles/globals.css'
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  },[]);
  return <Component {...pageProps} />
}

export default MyApp
