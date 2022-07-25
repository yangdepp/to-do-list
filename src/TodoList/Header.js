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
      <div className='header'>
        {['All', 'Active', 'Complete'].map((item, index) => {
          return (
            <span
              key={index}
              onClick={() => this.handleClick(index, item)}
              className={currentIndex === index ? 'menu' : ''}
            >
              {item}
            </span>
          );
        })}
      </div>
    );
  }
}

export default Header;
