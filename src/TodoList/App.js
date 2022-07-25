import React from 'react';
import Header from './Header';
import Input from './Input';
import List from './List';
import Footer from './Footer';
import Style from './Style.css'

let id = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      status: 'All',
    };
  }

  addItem = (params) => {
    const data = this.state.data;
    data.push({
      id,
      ...params,
    });
    this.setState({
      data
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
      data
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

  changeRenderStatus = (status) => {
    this.setState({
      status,
    });
  };
  changeRight = () => {
    const data = this.state.data
    console.log(data);
    const result = data.filter((item) => item.isDone === false)
    this.setState({
      data: result
    })
  }
  render() {
    return (
      <div className='body'>
        <Header changeRenderStatus={this.changeRenderStatus} />
        <Input addItem={this.addItem} />
        <List
          data={this.state.data}
          status={this.state.status}
          changeItemStatus={this.changeItemStatus}
          deleteItem={this.deleteItem}
        />
        <Footer handleLeft={this.state.data} changeRight={this.changeRight} />
      </div>
    );
  }
}

export default App;
