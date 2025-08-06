import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import FloatingSupportButton from './components/FloatingSupportButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          
          <main className="pt-16">
            <Hero />
            <CategoryGrid />
            <ProductGrid 
              title="PRODUTOS EM DESTAQUE" 
              subtitle="Descubra as peças que estão fazendo sucesso"
              limit={8}
            />
          </main>
          
          <Footer />
          <FloatingSupportButton />
          <ScrollToTop />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;