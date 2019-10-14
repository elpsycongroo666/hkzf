import React, { Component ,Fragment} from 'react'
import HKLayout from './component/HKLayout/index'
import {HashRouter  as Router,Route} from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import News from "./pages/News";
import My from "./pages/My";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Router>
            <Route render={()=><HKLayout><Home/></HKLayout>} exact path="/"></Route>
            <Route render={()=><HKLayout><List/></HKLayout>} exact path="/List"></Route>
            <Route render={()=><HKLayout><News/></HKLayout>} exact path="/News"></Route>
            <Route render={()=><HKLayout><My/></HKLayout>} exact path="/My"></Route>
          </Router>
        </div>
      </Fragment>
    )
  }
}
