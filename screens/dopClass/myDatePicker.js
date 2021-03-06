import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <DatePicker
        style={{ width: 200, fontSize: 20, alignSelf: 'center' }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        onDateChange={(date) => {
          this.setState({ date });
        }}
      />
    );
  }
}
