import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import AverageTickerValues from './components/AvgTickerValContainer';
import TradingPairBtnContainer from './components/TradingPairBtnContainer';
import SelectedBtnContainer from './components/SelectedBtnContainer';

function App() {
  return (
    <div className=' flex flex-col h-screen '>
      <Header />
      <Layout>
        <TradingPairBtnContainer />
        <SelectedBtnContainer />
        <AverageTickerValues />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
