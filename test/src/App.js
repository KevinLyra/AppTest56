import './App.css';
import Menu from './components/Menu';
import Community from './components/Community';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route , Switch , Redirect} from 'react-router-dom'
import ErrorPage from './components/ErrorPage';
import { Component } from 'react';
import Profile from './components/Profile';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       underConst: {
         Docs: false,
         Tutorials: true,
         Community: false
       }
    }
  }

  render(){
    return (
      <BrowserRouter>
        <Menu />
  
        <Switch>
          <Route exact path="/" component={Docs} />
          <Route path="/tutorial" component={Tutorials} /> 
          {/* <Route path="/tutorial" render={ () => (this.state.underConst.Tutorials ? (<Redirect to="/"/>) : (<Tutorials/>))}/>  */}
          <Route path="/community" component={Community} />
          <Route path="/users/:profileId" component={Profile}/>
          <Route component={ErrorPage} />
        </Switch>
  
      </BrowserRouter>
    );
  }
  }


export default App;
