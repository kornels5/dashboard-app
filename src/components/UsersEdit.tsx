import React from 'react';
import { Row, Col, Tabs } from 'antd';

import CustomButton from './CustomButton';
import CustomTable from './CustomTable';

const { TabPane } = Tabs;

const UsersEdit = () => {
  return (
    <div>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>
          <Row justify="space-around">
            <Col flex="auto">
              <CustomButton color="red">Delete</CustomButton>
            </Col>
            <Col flex="auto">
              <CustomButton color="gray">Block</CustomButton>
            </Col>
            <Col flex="auto">
              <CustomButton color="yellow">Set Password</CustomButton>
            </Col>
            <Col flex="auto">
              <CustomButton color="blue">Save</CustomButton>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Logs" key="1">
              <CustomTable/>
            </TabPane>
            <TabPane tab="Permissions" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Col>
        <Col span={12}>
        </Col>
      </Row>
    </div>
  )
}

export default UsersEdit;