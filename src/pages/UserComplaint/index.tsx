import React, { useRef, useState } from 'react';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import request from 'umi-request';

const UserComplaint: React.FC = () => {
    const actionRef = useRef<ActionType>();

    const postMessage = (message: string) => {
        // 发送消息给后端
        console.log(message);

    }


    // 列表规则
    const columns: ProColumns<API.UseComplaintInfo>[] = [
        {
            title: '单号',
            dataIndex: 'order_id',
            hideInSearch: true,
        },
        {
            disable: true,
            title: '投诉人',
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
            title: '投诉时间',
            dataIndex: 'comlpaint_date',
            valueType: 'date',
            sorter: true,
        },
        {
            title: '投诉用户/商家',
            dataIndex: 'complainted_target',
            hideInSearch: true,
            render: (_, record) => (
                <span>
                    {record.complainted_target?.username?'':'1'}
                    <br />
                    {record.complainted_target?.shop_name?'':'2'}
                </span>
            ),

        },
        {
            title: '投诉类型',
            dataIndex: 'complaint_type',
            hideInSearch: true,

        },
        {
            title: '投诉内容',
            dataIndex: 'complaint_content',
            hideInSearch: true,
            ellipsis: true,

        },
        {
            title: '投诉人电话',
            dataIndex: 'commpaint_phone',
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
                >
                    待定
                </a>
            ]),
        },
    ];
    return (
        <PageContainer style={{ backgroundColor: 'white', height: '800px', margin: '10px' }}>
            <ProTable<API.UseComplaintInfo>
                columns={columns}
                actionRef={actionRef}
                cardBordered
                style={{ fontWeight: 400 }}
                request={(params, sort, filter) => {
                    return request<{
                        data: API.UseComplaintInfo[];
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

export default UserComplaint;