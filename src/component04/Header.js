import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleClick = (index, item) => {
    this.setState({
      currentIndex: index,
    });
    const { changeRenderStatus } = this.props;
    changeRenderStatus(item);
  };

  render() {
    const { currentIndex } = this.state;
    return (
      <div>
        {['All', 'Active', 'Complete'].map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => this.handleClick(index, item)}
              style={{ color: `${index === currentIndex ? 'red' : '#000'}` }}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Header;
