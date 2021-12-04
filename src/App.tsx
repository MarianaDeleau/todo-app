import React from 'react';
import { SignUpPage, AddTaskPage, Users, EditTaskPage, DashboardPage, LoginPage, CategoriesPage, HomePage } from '../src/pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

//import { Categories } from './pages/Categories';




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
        {/* <Route path="/recovery-password" component={SignUpPage} /> */}

        
        <Route path="/users" component={Users} />
        {/* <Route path="/profile" component={Users} /> */}
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/edit-task" component={EditTaskPage} />
        <Route path="/add-tasks" component={AddTaskPage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
