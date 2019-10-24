import React, { Component } from "react";
import { DragBox, ResisableBox } from "../ui/Boxes";
import { Input, Checkbox, Form, Button, Col, Row, Card, Icon } from "antd";
import uuid from "react-uuid";
import { SelectedTableList } from "../ui/Lists";
import { RadioBtnsForBoxColor, RadioBtns } from "../ui/Input";
export class Tables extends Component {
  state = {
    areaSize: { width: 500, height: 500 },
    editable: true,
    tableList: [],
    tableName: "",
    isDisabled: false,
    noPeople: 2,
    shape: "square",
    color: "yellow"
  };
  constructor() {
    super();
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleBoxOnClick = this.handleBoxOnClick.bind(this);
    this.handleDeleteBox = this.handleDeleteBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLockArea = this.handleLockArea.bind(this);
  }
  onDrag = (e, position) => {
    console.log("x", position.lastX, "y", position.lastY);
    debugger;
    const id = position.node.dataset.key;
    this.setState({
      tableList: this.state.tableList.map(table => {
        return table.id === id
          ? Object.assign({}, table, {
              pos: { x: position.lastX, y: position.lastY }
            })
          : table;
      })
    });
  };

  handleChangeInput = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleBoxOnClick = e => {
    e.preventDefault();
    const id = e.currentTarget.dataset.key;
    this.setState({
      tableList: this.state.tableList.map(table =>
        table.id === id
          ? Object.assign({}, table, { selected: !table.selected })
          : table
      )
    });
  };
  handleDeleteBox = e => {
    this.setState({
      tableList: this.state.tableList.filter(table => table.selected !== true)
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Receive value from form", values);

        const tableSizeList = [
          {
            peopleNo: 2,
            square: {
              width: "50px",
              height: "50px"
            },
            recVer: {
              width: "25px",
              height: "50px"
            },
            recHor: {
              width: "50px",
              height: "25px"
            }
          },
          {
            peopleNo: 4,
            square: {
              width: "75px",
              height: "75px"
            },
            recVer: {
              width: "50px",
              height: "75px"
            },
            recHor: {
              width: "75px",
              height: "50px"
            }
          },
          {
            peopleNo: 8,
            square: {
              width: "100px",
              height: "100px"
            },
            recVer: {
              width: "75px",
              height: "100px"
            },
            recHor: {
              width: "100px",
              height: "75px"
            }
          }
        ];
        const colorList = {
          red: {
            bg: "#f86e6e",
            txt: "#fff"
          },
          grey: {
            bg: "#2d3440",
            txt: "#FFF"
          },
          yellow: {
            bg: "#ffe18e",
            txt: "#54453d"
          },
          disable: {
            bg: "#f6f6f6",
            txt: "#000"
          }
        };
        const updatedTableList = this.state.tableList.concat([
          Object.assign(
            {},
            {
              name: this.state.tableName,
              pos: { x: 0, y: 0 },
              size: tableSizeList.reduce((resSize, curSize) => {
                const s =
                  curSize.peopleNo === this.state.noPeople ? curSize : resSize;
                return s;
              }, null)[this.state.shape],
              id: uuid(),
              selected: false,
              color:
                colorList[this.state.isDisabled ? "disable" : this.state.color]
            }
          )
        ]);
        this.setState({
          tableList: updatedTableList
        });
      }
    });
  };
  handleSetAreaSize = (e, data) => {
    console.log("this is the call back", e, data);
    this.setState({
      areaSize: data.size
    });
    console.log(this.state.areaSize);
  };
  handleLockArea = e => {
    this.setState({
      editable: false
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 }
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20, offset: 2 }
    };
    return (
      <div>
        <h1>Wellcome to VITTORIO restaurant!!!</h1>
        <div
          style={{
            height: "660px",
            width: "920px",
            border: "3px solid",
            margin: "0 auto",
            padding: "5px",
            position: "relative"
          }}
        >
          <ResisableBox
            width={this.state.areaSize.width}
            height={this.state.areaSize.height}
            minConstraints={[500, 500]}
            maxConstraints={[900, 600]}
            onStop={this.handleSetAreaSize}
            isResisable={this.state.editable}
          >
            {this.state.tableList.map(table => (
              <DragBox
                onDrag={this.onDrag}
                defaultPosition={table.pos}
                name={table.name}
                size={table.size}
                id={table.id}
                color={table.color}
                selected={table.selected}
                onClick={this.handleBoxOnClick}
              />
            ))}
          </ResisableBox>
          <Row
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              padding: "5px"
            }}
          >
            <Button
              disabled={!this.state.editable}
              onClick={this.handleLockArea}
            >
              Lock
            </Button>
            <Button>Reset</Button>
          </Row>
        </div>

        <Row>
          <Col offset={4} span={16}>
            <Card
              title="Table"
              actions={[
                this.state.tableList.filter(table => table.selected).length >
                0 ? (
                  <Button type="primary" onClick={this.handleDeleteBox}>
                    Remove
                  </Button>
                ) : null,
                <SelectedTableList
                  data={this.state.tableList.filter(table => table.selected)}
                />
              ]}
            >
              <Form onSubmit={this.handleSubmit}>
                <Form.Item
                  {...formItemLayout}
                  label="Table name"
                  className="txt-left"
                >
                  {getFieldDecorator("username", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your name"
                      },
                      {
                        max: 10,
                        message: "Max length is 10"
                      }
                    ]
                  })(
                    <Input
                      name="tableName"
                      onChange={this.handleChangeInput}
                      placeholder="Please input table name"
                    />
                  )}
                  <Checkbox
                    name="isDisabled"
                    checked={this.state.isDisabled}
                    onChange={this.handleChangeInput}
                  >
                    Disable
                  </Checkbox>
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Size"
                  className="txt-left"
                >
                  <RadioBtns
                    name={"noPeople"}
                    onChange={this.handleChangeInput}
                    value={this.state.noPeople}
                    list={[
                      {
                        value: 2,
                        name: "Small"
                      },
                      {
                        value: 4,
                        name: "Medium"
                      },
                      {
                        value: 8,
                        name: "Large"
                      }
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Orientation"
                  className="txt-left"
                >
                  <RadioBtns
                    name={"shape"}
                    onChange={this.handleChangeInput}
                    value={this.state.shape}
                    list={[
                      {
                        value: "square",
                        name: "Square"
                      },
                      {
                        value: "recVer",
                        name: "Vertical Rectangular"
                      },
                      {
                        value: "recHor",
                        name: "Horizontal Rectangular"
                      }
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  {...formItemLayout}
                  label="Color"
                  className="txt-left"
                >
                  <RadioBtnsForBoxColor
                    onChange={this.handleChangeInput}
                    value={this.state.color}
                  />
                </Form.Item>
                <Form.Item {...formTailLayout}>
                  <Button type="primary" htmlType="submit">
                    {" "}
                    Add new
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
const WrappedTimeRelatedForm = Form.create({
  name: "Add new table validation"
})(Tables);

export default WrappedTimeRelatedForm;
