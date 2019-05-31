import React from 'react';
import Nutshell from "./components/Nutshell";
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"


ReactDOM.render(
<Router>
<Nutshell />
</Router>,
document.getElementById('root'));

