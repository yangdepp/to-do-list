import React from 'react';

class List extends React.Component {
  render() {
    const { data, changeItemStatus, deleteItem } = this.props;
    return (
      <div>
        {data.map((item) => {
          const { id, value, isDone } = item;
          return (
            <div>
              <span
                style={{ color: `${isDone ? '#ccc' : '#000'}` }}
                key={id}
                onClick={() => changeItemStatus({ id, isDone })}
              >
                {value}
              </span>
              <button onClick={() => deleteItem(id)}>删除</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
