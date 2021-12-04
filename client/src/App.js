import React from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Auth from "./components/auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute"
import { 
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <Route exact path="/auth/:type?" component={Auth} />      
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  );
}

export default App;
