import React, {Component} from 'react';
import { Navbar } from './components/Navbar';
import { TodoRows } from './components/TodoRows';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
         userName: 'Joey',
         todoItems: [
           {action: 'Get $100k job', done: true },
           {action: 'Get Permanent Residency', done: false},
           {action: 'Get into one of FAANG Companies', done: false},
           {action: 'Go to Home', done: false},
         ],
         newToDo: '',  
    };
  }

  toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
           item.action === todo.action ? {...item, done: !item.done} : item 
      ),
    })
  }

 todoRows = () => 
    this.state.todoItems.map((item) => (
     <TodoRows 
       key={item.action}
       item = {item}
       callback = {this.toggleDone}
      />
    ));

  updateValue = (event) => {
    this.setState({newToDo: event.target.value});
  }; 

  newToDo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {action: this.state.newToDo, done: false},
      ]
    })
  }

  render = () => (
    <div className="container">
      <div className="row">
       <Navbar name={this.state.userName} />
        <div className="col-12">
          <input 
          className="form-control" 
          value={this.state.newToDo}
          onChange={this.updateValue}
          />
          <button className="btn btn-primary" onClick={this.newToDo}>
            Add
          </button>
        </div>
       
        <div className="col-12">
          <table className="table">
             <thead>
               <tr>
                 <th>Task</th>
                 <th>Complete</th>
               </tr>
             </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div> 
  );
}