import React from 'react';
import { Button, Card, List, Tabs, Tooltip } from 'antd';
import { StarOutlined } from '@ant-design/icons';
 
const { TabPane } = Tabs;
const tabKeys = {
  Streams: 'stream',
  Videos: 'videos',
  Clips: 'clips',
}
 
const processUrl = (url) => url
  .replace('%{height}', '252')
  .replace('%{width}', '480')
  .replace('{height}', '252')
  .replace('{width}', '480');
 
const renderCardTitle = (item, loggedIn) => {
  const title = `${item.broadcaster_name} - ${item.title}`;
 
  return (
    <div>
      {
        loggedIn &&
        <Tooltip title="Add to favorite list">
          <Button shape="circle" icon={<StarOutlined />} />
        </Tooltip>
      }
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', width: 450 }}>
        <Tooltip title={title}>
          <span>{title}</span>
        </Tooltip>
      </div>
    </div>
  )
}
 
