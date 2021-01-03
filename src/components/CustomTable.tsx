import React from 'react';

import { Table, Tag, Space } from 'antd';

interface TableData {
  key: string;
  name: string;
  actions: string[];
}

const actions: string[] = ['create', 'read', 'update', 'delete'];

const data: TableData[]= [
  {
    key: '1',
    name: 'Script',
    actions
  },
  {
    key: '2',
    name: 'Props',
    actions
  },
  {
    key: '3',
    name: 'Scenes',
    actions
  },
  {
    key: '4',
    name: 'Money',
    actions
  },
  {
    key: '5',
    name: 'Stunt',
    actions
  }
];

const columns = [
  {
    title: 'Object',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: actions => (
      <>
         {actions.map(action => {
          let color = action.length > 5 ? 'geekblue' : 'green';
          if (action === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={action}>
              {action.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  }
]

const CustomTable = () => {
  return (
    <Table columns={columns} dataSource={data} />
  )
};

export default CustomTable;