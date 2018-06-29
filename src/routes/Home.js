import React, { PureComponent } from 'react';
import { connect } from 'dva';
import _get from 'lodash/get';

@connect(({ home }) => ({
  value: _get(home, 'home', null),
}), (dispatch) => ({
  onChange: (...args) => dispatch({ type: 'home/change', payload: {...args}}),
}))
export default class Home extends PureComponent {
  render () {
    console.log('render', this.props.value);
    return (
      <div>
        <h3>home</h3>
        <p>{this.props.value}</p>
        <button onClick={() => this.props.onChange()}>change value</button>
      </div>
    );
  }
}
