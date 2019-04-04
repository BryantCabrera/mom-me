import React, { Component } from "react";
import { render } from "react-dom";

import DatePicker from "react-date-picker";

class Datepicker extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date()
  };

  handleStartChange = startDate => {
    this.setState({ startDate });
    this.to.openCalendar();
  };

  handleEndChange = endDate => {
    return this.setState({ endDate });
  };

  render() {
    const { startDate, endDate } = this.state;

    return (
      <div style={{ height: "100vh" }}>
        <span>
          <DatePicker
            onChange={this.handleStartChange}
            value={startDate}
            showLeadingZeroes={true}
            minDate={new Date()}
          />
        </span>
        <span>
          <DatePicker
            ref={el => (this.to = el)}
            onChange={this.handleEndChange}
            value={endDate}
            showLeadingZeroes={true}
            minDate={new Date()}
          />
        </span>
      </div>
    );
  }
}

export default Datepicker
