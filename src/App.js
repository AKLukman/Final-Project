import logo from './logo.svg';
import './App.css';
import Test from './component/Test/Test';
import Navigation from './component/Navigation/Navigation';
import ThirdSection from './component/ThirdSection/ThirdSection';
import FourthSection from './component/FourthSection/FourthSection';
import FifthSection from './component/FifthSection/FifthSection';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Test></Test>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <Footer></Footer>


    </div>
  );
}

export default App;
