import './App.css';
import NavBar from "./NavBar";
import Books from "./Books";
import { BrowserRouter as Router, Route, Switch} from  'react-router-dom';
import Create from "./Create";
import BookDetails from "./BookDetails";
import NotFound from "./NotFound";
import BookDetailsWUpdate from "./BookDetailsWUpdate";
import BookUpdateV2 from "./BookUpdateV2";


function App() {
  return (
      <div className="App">
          <NavBar/>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Books/>
                  </Route>
                  <Route path="/create">
                      <Create/>
                  </Route>
                  <Route path="/books/:id">
                      <BookDetailsWUpdate/>
                  </Route>
                  <Route path="/BookUpdate/:id">
                      <BookUpdateV2/>
                  </Route>
                  <Route path='*'>
                      <NotFound/>
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
