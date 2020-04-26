import React, { Component } from 'react'
import { Row, Col } from "reactstrap";
import MultiSelect from "@khanacademy/react-multi-select";
import _ from "lodash";

const convertArrayToOptionsObject = (originList) => {
  let result = [];
  originList.map((item) => (
    result.push({ "label": item, "value": item })
  ));
  return result;
};

const trimOptions = (listData, dataField) => {
  const result = _.sortBy(_.uniqBy(_.map(listData, dataField)));
  let dropdown = {
    allselected: result,
    alloptions: convertArrayToOptionsObject(result)
  }
  return dropdown;
}
class MultiFilterDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }
  render() {
    const { dropdown } = this.props;
    const { selected } = this.state;
    return (
      <MultiSelect
        overrideStrings={{ selectSomeItems: "select" }}
        disabled={!dropdown}
        disableSearch={!dropdown}
        options={dropdown ? dropdown.alloptions : []}
        selected={selected}
        onSelectedChanged={selected => this.setState({ selected })}
      />
    )
  }
}


const MultiSelectFilter = (props) => {
  const { text, dataField, dropdown } = props;
  return (
    <>
      <label htmlFor={dataField}>
        <strong style={{ fontSize: "11px", minWidth: "5ch" }} className="text-truncate d-block">{text}</strong>
      </label>
      <MultiFilterDropdown  dropdown={dropdown} />
    </>
  );
}
export class Filters extends Component {
  render() {
    const { columns, isLoad, data } = this.props;
    return (
      <Row>
        <Col lg="3" >
          <Row>
            {
              columns.map((item) => {
                return (
                  <Col key={item.dataField}>
                    <MultiSelectFilter {...item}  dropdown={isLoad && data.length > 0 ? trimOptions(data, item.dataField) : null} />
                  </Col>
                )
              })
            }
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Filters

