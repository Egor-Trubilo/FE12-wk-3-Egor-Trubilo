import "./styles/index.scss";
import ReactDOM from "react-dom";
import React from "react";
// import summ from "./modules/summ";
// import  Card  from "./modules/card";

import CardHolder from "./Components/cardHolder";





ReactDOM.render(<CardHolder/>, document.getElementById('root'));
// const taskList = [{taskName: 'Brush Teeth', isDone: false}]

// const rootDOMElement = document.getElementById('root');

// const cardList = taskList.map((task) => {return (new Card(task.taskName, task.isDone, rootDOMElement))});

// ReactDOM.render(React.createElement('div', null, React.createElement('div', null, 'sdfdsf')), rootDOMElement);


    