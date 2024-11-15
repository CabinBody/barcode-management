import React, { useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import request from 'umi-request';

const MerchantReview: React.FC = () => {
    const actionRef = useRef<ActionType>();

    const postMessage = (message: string) => {
        // 发送消息给后端
        console.log(message);

    }


    // 列表规则
    const columns: ProColumns<API.MerchantReviewInfo>[] = [
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
            title: '店铺名称',
            dataIndex: 'shop_name',
            sorter: true,
            hideInSearch: true,

        },
        {
            title: '店铺简介',
            dataIndex: 'shop_desc',
            hideInSearch: true,

        },
        {
            title: '店铺头像',
            dataIndex: 'shop_avatar',
            hideInSearch: true,

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
            <ProTable<API.MerchantReviewInfo>
                columns={columns}
                actionRef={actionRef}
                cardBordered
                style={{ fontWeight: 400 }}
                request={(params, sort, filter) => {
                    return request<{
                        data: API.MerchantReviewInfo[];
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

export default MerchantReview;