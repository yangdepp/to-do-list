import React from 'react';
import Header from './Header';
import Input from './Input';
import List from './List';
import Footer from './Footer';

let id = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  addItem = (params) => {
    const data = this.state.data;
    data.push({
      id,
      ...params,
    });
    this.setState({
      data,
    });
    id++;
  };

  changeItemStatus = ({ id, isDone }) => {
    const data = this.state.data;
    data.forEach((item) => {
      if (item.id === id) {
        item.isDone = !isDone;
      }
    });
    this.setState({
      data,
    });
  };

  deleteItem = (id) => {
    console.log(id);
    const data = this.state.data;
    const result = data.filter((item) => item.id !== id);
    this.setState({
      data: result,
    });
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <Header />
        <Input addItem={this.addItem} />
        <List
          data={this.state.data}
          changeItemStatus={this.changeItemStatus}
          deleteItem={this.deleteItem}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
