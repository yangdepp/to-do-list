import React from 'react';

class List extends React.Component {
  render() {
    const { data, changeItemStatus, deleteItem, status } = this.props;

    let resultData;
    if (status !== 'All') {
      resultData = data.filter((item) => status === 'Complete' ? item.isDone : !item.isDone,
      );
    } else {
      resultData = data;
    }
    return (
      <div className='list'>
        {resultData.map((item) => {
          const { id, value, isDone } = item;
          return (
            <div>
              <button style={{ color: `${isDone ? '#ccc' : '#000'}` }}
                key={id}
                onClick={() => changeItemStatus({ id, isDone })}
                className='iconfont icon-duihao'></button>

              <span
                style={{ color: `${isDone ? '#ccc' : '#000'}` }}
                key={id}
                onClick={() => changeItemStatus({ id, isDone })}>
                {value}
              </span>

              <button className='iconfont icon-fork'
                onClick={() => deleteItem(id)}></button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default List;
