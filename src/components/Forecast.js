import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import Icon from './Icon';

const renderForcastItem = items =>
  items.map(({ date, day, high, low, text }, idx) =>
    <Card key={idx} className="mui-card">  
      <CardHeader title={day} className="mui-card-title" />
      <CardText className="mui-card-text forecast">
        <div className="mui-card-text-inner flex dr-clm sp-bw">
          <div className="media-img">
            <Icon weather={text}/>
          </div>
          <div className="flex sp-bw media-txt">
            <span>↑{high}F</span><span>↓{low}F</span>
          </div>
        </div>    
      </CardText>
    </Card>)  

const Forecast = ({ forecast }) => {
  if (!forecast) return null;
  return (
    <Card className="mui-card outer mgla mgra mgt32">    
      <CardHeader
        title={`WEEKLY FORECAST`}
        className="mui-card-header flex hr-center"
      />
      <div className="flex sp-ad pd16">{renderForcastItem(forecast)}</div>
    </Card>
  ) 
}

export default Forecast;