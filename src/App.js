import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Landing from './components/Landing'; 
import Main from './components/Main';

  
function App() {
  return (
    <body className="App"> 
    <header className="App-header">
        <Header /> 
        <Landing /> 
        <Main />
      </header>
    </body>
  );
}

export default App;
