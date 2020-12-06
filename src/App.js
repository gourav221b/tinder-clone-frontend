
import './App.css';
import Header from './header';
import Tindercards from './tindercards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    // BEM  Class convention
    <div className="app">
 <Header />
 <Tindercards />
<SwipeButtons />
    </div>
  );
}

export default App;
