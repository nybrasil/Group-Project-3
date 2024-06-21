import Header from './components/Header';
import TradingViewWidget from './components/TradingViewWidget';
import Chatbot from './components/Chatbot';
import Reviews from './components/Reviews';
import Stripe from './components/Stripe';
import Footer from './components/Footer';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <TradingViewWidget />
      <Reviews />
      <Chatbot />
      <Stripe />
      <Footer />
    </div>
  );
}

export default App;
