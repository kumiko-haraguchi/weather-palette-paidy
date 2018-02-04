import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const loaderStyle = {
  container: {
    position: 'fixed',
    marginLeft: '-100px',
    marginTop: '-25px',
    left: '50%',
    top: '50%',
  },
};

const Loading = () =>
  <div style={loaderStyle.container}>
    <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="rgb(255, 64, 129)"
      status="loading"
    />
  </div> 

export default Loading;