import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import { convertToUpperCase } from '../utils'
import Icon from './Icon';
import CardItem from './CardItem';

const generaeCardItem = ({ props }) =>
  props.map(({ item, unit }, idx) => {
    const key = Object.keys(item)[0];
    const upperKey = convertToUpperCase(key.slice(0));
    const value = upperKey === "Weather" ? <Icon weather={key} /> : item[key];
    return (
      <CardItem
        idex={idx}  
        key={key}  
        upperKey={upperKey}  
        value={value}  
        unit={unit}  
      />)
  })

const Current = props =>
  <Card className="mui-card width-short outer mgla mgra mgt32">
    <CardHeader title={`TODAY`} className="mui-card-header flex hr-center"/>
    <div className="flex sp-ad pd16">
      {generaeCardItem(props)}
    </div>
  </Card>

export default Current;