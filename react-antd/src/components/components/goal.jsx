import React from 'react';
import { Calendar, Badge } from 'antd';
import './styles/goal.css';
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 20:
      listData = [
        { type: 'warning', content: '论文查重.' },
      ]; break;
    case 30:
      listData = [
        { type: 'warning', content: '网站上线.' },

      ]; break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

class CalendarGoal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
           <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
          </div>
        );
    }
}

export default CalendarGoal;

