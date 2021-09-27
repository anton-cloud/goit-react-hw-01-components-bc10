import React from 'react';
import { StatisticsStyled } from './StatisticsStyled';
import PropTypes from 'prop-types'

const Statistics = ({title, stats}) => {

  return (
<StatisticsStyled>
  {title && <h2 className="title">{title}</h2>}
  
  <ul className="statList">
    {stats.map((stat) => <li className="item" key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage} %</span>
    </li>)}
  </ul>
</StatisticsStyled>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
}

export default Statistics;