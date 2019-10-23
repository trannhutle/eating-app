import React, { Component } from "react";
import { DragBox } from "../ui/DraggableBoxes";
import { Input } from "antd";
import uuid from "react-uuid";
import { SelectedTableList } from "../ui/Lists";
import { RadioBtnsForBoxColor, RadioBtns } from "../ui/Input";

export class Tables extends Component {
  state = {
    tableList: [],
    tableName: "",
    isDisabled: false,
    noPeople: 2,
    shape: "square",
    color: "yellow"
  };
  constructor() {
    super();
    this.addNewTable = this.addNewTable.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleBoxOnClick = this.handleBoxOnClick.bind(this);
    this.handleDeleteBox = this.handleDeleteBox.bind(this);
  }
  onDrag = (e, position) => {
    console.log("x", position.x, "y", position.y);
  };
  addNewTable = () => {
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
        bg: "#a6a6a5",
        txt: "#54453d"
      },
      yellow: {
        bg: "#ffe18e",
        txt: "#54453d"
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
          color: colorList[this.state.color]
        }
      )
    ]);
    this.setState({
      tableList: updatedTableList
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

  render() {
    return (
      <div>
        <h1>Wellcome to VITTORIO restaurant!!!</h1>
        <div
          style={{
            width: "500px",
            height: "500px",
            position: "relative",
            border: "1px solid"
          }}
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
        </div>
        <Input
          name="tableName"
          placeholder="Table Name"
          onChange={this.handleChangeInput}
          value={this.state.tableName}
          addonBefore={<label>Table name</label>}
        />
        <input
          type="checkbox"
          name="isDisabled"
          checked={this.state.isDisabled}
          onChange={this.handleChangeInput}
        />{" "}
        isDisable
        <br />
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
        <br />
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
        <br />
        <RadioBtnsForBoxColor
          onChange={this.handleChangeInput}
          value={this.state.color}
        />
        <button type="button" onClick={this.addNewTable}>
          {" "}
          Add new
        </button>
        {this.state.tableList.filter(table => table.selected).length > 0 ? (
          <div>
            <SelectedTableList
              data={this.state.tableList.filter(table => table.selected)}
            />
            <button type="button" onClick={this.handleDeleteBox}>
              Remove selected table
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Tables;
