import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const Current = ({ date, temp, weather, humidity, speed }) =>
  <Card className="mui-card width-short outer mgla mgra mgt32">    
    <CardHeader title={`TODAY ${date}`} />
    <div className="flex sp-ad pd16">
      <Card className="mui-card square">  
        <CardHeader title="Weather" className="mui-card-title" />
        <CardText className="mui-card-text current flex hr-center vr-center">
          {weather}
        </CardText>
      </Card>  
      <Card className="mui-card">    
        <CardHeader title="Tempreture" className="mui-card-title" />
        <CardText className="mui-card-text current flex hr-center vr-center">
          {temp}<span className="mui-card-sub-text">F</span>
        </CardText>
      </Card>  
      <Card className="mui-card">    
        <CardHeader title="Humidity" className="mui-card-title" />
        <CardText className="mui-card-text current flex hr-center vr-center">
          {humidity}<span className="mui-card-sub-text">%</span>
        </CardText>
      </Card>  
      <Card className="mui-card">    
        <CardHeader title="Speed" className="mui-card-title" />
        <CardText className="mui-card-text current flex hr-center vr-center">
          {speed}<span className="mui-card-sub-text">km/h</span>
        </CardText>
      </Card>  
    </div>
  </Card>  

export default Current;