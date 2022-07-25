import React from 'react';

class Footer extends React.Component {
  render() {
    const { changeRight } = this.props
    const p = this.props.handleLeft
    const result = p.filter((item) => item.isDone === false)
    return (
      <div >
        <button className='one'>Item left-{result.length}</button>
        <button onClick={() => changeRight()} className='two'>Clear completed</button>
      </div>
    );
  }
}

export default Footer;
