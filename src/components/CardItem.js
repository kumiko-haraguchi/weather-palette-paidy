import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

const CardItem = ({ idx, upperKey, value, unit }) =>
  <Card key={idx} className="mui-card square">
    <CardHeader title={upperKey} className="mui-card-title" />
    <CardText className="mui-card-text current flex hr-center vr-center">
      {value}<span className="mui-card-sub-text">{unit}</span>
    </CardText>
  </Card>

export default CardItem;