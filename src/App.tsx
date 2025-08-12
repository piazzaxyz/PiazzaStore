import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import './components/FontAwesome';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import FloatingSupportButton from './components/FloatingSupportButton';
import ScrollToTop from './components/ScrollToTop';
import ContactPage from './components/ContactPage';

function App() {
  const HomePage = () => (
    <>
      <Hero />
      <CategoryGrid />
      <ProductGrid 
        title="PRODUTOS EM DESTAQUE" 
        subtitle="Descubra as peças que estão fazendo sucesso"
        limit={8}
      />
      <Newsletter />
    </>
  );

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <Header />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contato" element={<ContactPage />} />
            </Routes>
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
