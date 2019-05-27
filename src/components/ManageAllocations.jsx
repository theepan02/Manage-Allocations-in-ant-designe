import React, { Component } from "react";
import { Table, Button, Row, Col, Icon } from "antd";
import "antd/dist/antd.css";

const data = [
  {
    key: "1",
    name: "Tyron",
    Project: 32,
    Details: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    Project: 42,
    Details: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    Project: 32,
    Details: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    Project: 32,
    Details: "London No. 2 Lake Park"
  }
];

export default class ManageAllocations extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "Project"
      }
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        filters: [{ text: "Joe", value: "Joe" }, { text: "Jim", value: "Jim" }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: "Project",
        dataIndex: "Project",
        key: "agProjecte",
        sorter: (a, b) => a.Project - b.Project,
        sortOrder: sortedInfo.columnKey === "Project" && sortedInfo.order
      },
      {
        title: "Details",
        dataIndex: "Details",
        key: "Details",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.Details || null,
        onFilter: (value, record) => record.Details.includes(value),
        sorter: (a, b) => a.Details.length - b.Details.length,
        sortOrder: sortedInfo.columnKey === "Details" && sortedInfo.order
      },
      {
        title: "Add Members",
        dataIndex: "Add Members",
        key: "Add Members",
        render: () => <Icon type="idcard" theme="twoTone" />
      },
      {
        title: "View",
        dataIndex: "View",
        key: "View",
        render: () => <Icon type="appstore" theme="twoTone" />
      },
      {
        title: "Action",
        dataIndex: "more",
        key: "more",
        render: () => <Icon type="edit" theme="twoTone" />
      }
    ];
    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={8} xl={18}>
            <h1>Manage Allocations</h1>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={8} xl={18}>
            <Table
              columns={columns}
              dataSource={data}
              onChange={this.handleChange}
            />
            <div className="table-operations">
              <Button>add</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
