import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Statistic } from 'antd';
import { useState } from 'react';

const { Divider } = ProCard;
// import styles from './index.less'

const Home: React.FC = () => {
  const [dashboard, setDashboard] = useState([
    [
      {
        'key': '注册用户数',
        'value': 1437
      },
      {
        'key': '店铺数',
        'value': 208
      }
    ],
    [
      {
        'key': '总收入（元）',
        'value': 120880
      },
      {
        'key': '店铺收入（元）',
        'value': 107780
      },
      {
        'key': '平台收入（元）',
        'value': 13100
      }
    ],
    [
      {
        'key': '总贴数',
        'value': 90812
      },
      {
        'key': '付费贴数',
        'value': 12345
      },
      {
        'key': '其他',
        'value': 0
      },
      {
        'key': '其他',
        'value': 0
      }
    ]
  ]);
  return (
    <div>
      {dashboard.map((raw, raws) => (
        <div key={raws} style={{
          marginBottom: 24, backgroundColor: 'white',
          display: 'flex', justifyContent: 'flex-start', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', maxWidth: 1256
        }}>
          {raw.map((item, index) => (
            <ProCard key={index} layout='center' style={{ maxWidth: 210, height: 128 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Statistic value={item.value} precision={0} style={{ fontSize: '24px' }} />
                <div style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>
                  {item.key}
                </div>
              </div>
            </ProCard>
          ))}
        </div>
      ))}
    </div >
  );
}

export default Home;