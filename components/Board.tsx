import * as React from 'react';
import Square from './Square';

export default class Board extends React.Component<
  { [value: string]: string | null }, // props types (props.value = 'X', 'O', null)
  { [squares: string]: Array<string | null> } // states types (state.squares = Array of 9 items with every item = 'X', 'O', null)
> {
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill(null) };
  }
  renderSquare(i: number) {
    return <Square value={this.state.squares[i]} />; // pass 'X', 'O', null as props.value to children Square
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
