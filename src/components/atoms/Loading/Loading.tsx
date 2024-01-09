import React from 'react';
import { Spin } from 'antd';

import "./Loading.css";

const Loading: React.FC = () => (
  <div className="Loading">
    <Spin />
  </div>
);

export default Loading;