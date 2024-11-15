import React, { useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import request from 'umi-request';

const WithdrawRequest: React.FC = () => {
    const actionRef = useRef<ActionType>();

    const postMessage = (message: string) => {
        // 发送消息给后端
        console.log(message);

    }


    // 列表规则
    const columns: ProColumns<API.WithdrawRequestInfo>[] = [
        {
            title: '订单号',
            dataIndex: 'order_id',
            hideInSearch: true,
        },
        {
            disable: true,
            title: '用户名',
            dataIndex: 'username',
            ellipsis: true,
        },
        {
            title: '微信号',
            dataIndex: 'wechatId',
            copyable: true,
            hideInSearch: true,

        },
        {
            title: '申请时间',
            dataIndex: 'request_date',
            valueType: 'date',
            sorter: true,
        },
        {
            title: '提现金额',
            dataIndex: 'withdraw_amount',
            hideInSearch: true,
            render: (text) => {
                return typeof text === 'number' ? text.toFixed(2) : '0.00';
            },
            width: 300,

        },
        {
            title: '其他',
            dataIndex: 'other',
            hideInSearch: true,
        },
        {
            hideInSearch: true,
            title: '操作',
            valueType: 'option',
            render: (_, entity) => (entity.isHandled ? [
                <text style={{ opacity: 0.5 }}>已处理</text>,
            ] : [

                <a
                    key="setReject"
                    onClick={() => { postMessage('reject') }}
                    style={{ color: 'red', marginRight: '10px' }}
                >
                    驳回
                </a>,
                <a
                    key="setApprove"
                    onClick={() => { postMessage('approve') }}
                >
                    通过
                </a>
            ]),
        },
    ];
    return (
        <PageContainer style={{ backgroundColor: 'white', height: '800px', margin: '10px' }}>
            <ProTable<API.WithdrawRequestInfo>
                columns={columns}
                actionRef={actionRef}
                cardBordered
                style={{ fontWeight: 400 }}
                request={(params, sort, filter) => {
                    return request<{
                        data: API.WithdrawRequestInfo[];
                    }>('https://proapi.azurewebsites.net/github/issues', {
                        params,
                    });
                }}
                editable={{
                    type: 'multiple',
                }}
                columnsState={{
                    onChange(value) {
                        console.log('value: ', value);
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

export default WithdrawRequest;