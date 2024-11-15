import React, { useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import request from 'umi-request';
import { render } from 'less';
import { set } from 'lodash';

const RetailInvestorList: React.FC = () => {
    const actionRef = useRef<ActionType>();
    const [isBannedBarShow, setIsBannedBarShow] = useState(false);


    // 列表规则
    const columns: ProColumns<API.RetailInvestorInfo>[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            hideInSearch: true,
        },
        {
            disable: true,
            title: '用户名',
            dataIndex: 'username',
            ellipsis: true,
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '此项为必填项',
                    },
                ],
            },
        },
        {
            title: '微信号',
            dataIndex: 'wechatId',
            copyable: true,
            hideInSearch: true,

        },
        {
            title: '注册时间',
            dataIndex: 'register_date',
            valueType: 'date',
            sorter: true,
        },
        {
            title: '购买文章数',
            dataIndex: 'buied_artical_num',
            hideInSearch: true,

        },
        {
            title: '账户余额',
            dataIndex: 'user_balance',
            hideInSearch: true,
            render: (text) => {
                return typeof text === 'number' ? text.toFixed(2) : '0.00';
            }

        },
        {
            title: '消息数',
            dataIndex: 'message_num',
            hideInSearch: true,

        },
        {
            title: '其他',
            dataIndex: 'other',
            hideInSearch: true,
        },

        {
            title: '操作',
            valueType: 'option',
            key: 'option',
            render: () => [
                <a
                    key="setBannedStatus"
                    onClick={() => { setIsBannedBarShow(true) }}
                >
                    封禁
                </a>,
            ],
        },
    ];
    return (
        <PageContainer style={{ backgroundColor: 'white', height: '800px', margin: '10px' }}>
            <Modal
                title="封禁"
                open={isBannedBarShow}
                onOk={() => { setIsBannedBarShow(false) }}
                onCancel={() => { setIsBannedBarShow(false) }}
                okText="确定"
                cancelText="取消"
                style={{ textAlign: 'center', width: '480px', height: '200px' }} // 内容居中
            >
                <p style={{ margin: '50px 0 50px 0 ' }}>是否封禁此用户</p>
            </Modal>
            <ProTable<API.RetailInvestorInfo>
                columns={columns}
                actionRef={actionRef}
                cardBordered
                style={{ fontWeight: 400 }}
                request={(params, sort, filter) => {
                    return request<{
                        data: API.RetailInvestorInfo[];
                    }>('https://proapi.azurewebsites.net/github/issues', {
                        params,
                    });
                }}
                editable={{
                    type: 'multiple',
                }}
                columnsState={{
                    onChange(value) {
                        // console.log('value: ', value);
                    },
                }}
                rowKey="id"
                search={{
                    labelWidth: 'auto',
                    optionRender(searchConfig, props, dom) {
                        return (
                            [<div style={{ marginRight: '180px' }}>{dom[1]} {dom[0]}</div>]
                        )
                    },
                }}
                options={false}
                pagination={{
                    pageSize: 10,
                    onChange: (page) => console.log(page),
                }}
                dateFormatter="string"
            />
        </PageContainer>

    );
};

export default RetailInvestorList;