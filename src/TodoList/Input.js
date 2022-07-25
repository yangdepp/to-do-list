import React from 'react';
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  onChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  render() {
    const { addItem } = this.props;
    const { inputValue } = this.state;
    return (
      <div className='input'>
        <input value={inputValue} onChange={this.onChange} />
        <button onClick={
          () => {
            if (inputValue.trim()) {
              addItem({
                value: inputValue.trim(),
                isDone: false,
              });
              this.setState({
                inputValue: '',
              });
            }
          }}>完成
        </button>
      </div>
    );
  }
}

export default Input;
