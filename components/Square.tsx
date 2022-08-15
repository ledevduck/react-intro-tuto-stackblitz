import * as React from 'react';

export default class Square extends React.Component<
  { [value: string]: string | null }, // props types (props.value = 'X', 'O', null)
  { [value: string]: string | null } // states types (state.value = 'X', 'O', null)
> {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </button>
    );
  }
}
