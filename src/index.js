import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Blogs from './Blogs';

const rootElement = document.getElementById("root");
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="blogs" element={<Blogs />} />
		</Switch>
	</BrowserRouter>,
	rootElement
);
