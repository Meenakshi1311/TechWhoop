import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <HeroSection />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
