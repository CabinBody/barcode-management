import {
    Button,
    Card,
    Col,
    Row,
    Statistic,
    Tabs,
    Table,
    Descriptions,
    Avatar
} from 'antd';
import { LeftOutlined, UserOutlined } from '@ant-design/icons';
import { useParams } from 'umi';
import React from 'react';
import { PageContainer } from '@ant-design/pro-components';

const { TabPane } = Tabs;

const statisticsData = [
    { title: '粉丝数', value: 119 },
    { title: '总收入(元)', value: 2901 },
    { title: '扣点', value: '5%' },
    { title: '平台收入(元)', value: 348.84 }
];

const transactionData = [
    {
        key: '1',
        title: '[15元] [足球财富 - 绿茵掌柜] 7点30美职…',
        amount: 15,
        status: '交易完成',
        buyer: '哒喵喵 (ID:213123)',
        date: '2024/9/22',
        vendorIncome: 14.25,
        platformIncome: 0.75
    },
    {
        key: '2',
        title: '[15元] [足球财富 - 绿茵掌柜] 7点30美职…',
        amount: 15,
        status: '已退款',
        buyer: 'baibai (ID:213134)',
        date: '2024/9/22',
        vendorIncome: 0,
        platformIncome: 0
    },
];

const columns = [
    { title: '文章名称', dataIndex: 'title', key: 'title' },
    { title: '支付金额', dataIndex: 'amount', key: 'amount' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '购买用户', dataIndex: 'buyer', key: 'buyer' },
    { title: '购买日期', dataIndex: 'date', key: 'date' },
    { title: '商家收入', dataIndex: 'vendorIncome', key: 'vendorIncome' },
    { title: '平台收入', dataIndex: 'platformIncome', key: 'platformIncome' },
];


const MerchantDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <div style={{ width: '100%', height: '48px', backgroundColor: 'white' }}>
                <p onClick={() => history.back()} style={{ width: 'fit-content', display: 'flex', alignItems: 'center', height: '100%', cursor: 'pointer', fontSize: '16px', marginLeft: '20px' }}>
                    <LeftOutlined />商家列表
                </p>
            </div>
            <div style={{ paddingLeft: '20px', fontWeight: '600', fontSize: '14px', height: '56px', margin: '10px 10px 0 10px', backgroundColor: 'white', display: 'flex', alignItems: 'center' }}>
                【七哥说球】商家信息
            </div>
            <PageContainer title={false} style={{ margin: '10px', backgroundColor: 'white' }}>
                <Card>
                    <Row gutter={18}>
                        <Col>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </Col>
                        <Col span={6}>
                            <p style={{ fontWeight: 'bold', fontSize: '16px' }}>七哥说球</p>
                            <p style={{ fontSize: '14px', opacity: '0.5' }}>
                                kelly777 <a href="">@微信</a>
                            </p>
                        </Col>
                        {statisticsData.map((stat, index) => (
                            <Col span={4} key={index}>
                                <Statistic title={stat.title} value={stat.value} />
                            </Col>
                        ))}
                    </Row>

                    <Descriptions bordered column={3} style={{ marginTop: 20 }}>
                        <Descriptions.Item label="用户ID">213123</Descriptions.Item>
                        <Descriptions.Item label="开店时间">2024/9/1</Descriptions.Item>
                        <Descriptions.Item label="粉丝数">119</Descriptions.Item>
                        <Descriptions.Item label="发布文章数">23</Descriptions.Item>
                        <Descriptions.Item label="待定">-</Descriptions.Item>
                        <Descriptions.Item label="待定">-</Descriptions.Item>
                        <Descriptions.Item label="账户余额">300</Descriptions.Item>
                    </Descriptions>
                </Card>

                <Tabs defaultActiveKey="1" style={{ marginTop: 20 }}>
                    <TabPane tab="文章列表" key="1">
                        <Table dataSource={transactionData} columns={columns} pagination={false} />
                    </TabPane>
                    <TabPane tab="交易记录" key="2">
                        <Table dataSource={transactionData} columns={columns} pagination={false} />
                    </TabPane>
                    <TabPane tab="粉丝列表" key="3">
                        <Table dataSource={transactionData} columns={columns} pagination={false} />
                    </TabPane>
                    <TabPane tab="挂靠列表" key="4">
                        <Table dataSource={transactionData} columns={columns} pagination={false} />
                    </TabPane>
                </Tabs>
            </PageContainer>
        </>


    );
}

export default MerchantDetail;