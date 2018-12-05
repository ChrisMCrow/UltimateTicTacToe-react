import React from 'react';
import LocalBoard from './LocalBoard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GlobalBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log('Global Board props: ', this.props);
  }

  render() {
    return (
      <div className = 'container'>
        <style jsx>{`
          h3 {
            text-align: center;
            margin-bottom: 5px;
          }
          .center-horizontal {
            border-top: 5px solid black;
            border-bottom: 5px solid black;
          }
          .center-vertical {
            border-left: 5px solid black;
            border-right: 5px solid black;
          }
          .row {
            margin: 0;
            padding: 0;
          }
          .col-4 {
            max-width: 270px !important;
          }
        `}</style>
        <div className='row'>
          <div className='col-4'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[0]} boardId={0}/>
          </div>
          <div className='col-4 center-vertical'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[1]} boardId={1}/>
          </div>
          <div className='col-4'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[2]} boardId={2}/>
          </div>                
        </div>
        <div className='row'>
          <div className='col-4 center-horizontal'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[3]} boardId={3}/>
          </div>
          <div className='col-4 center-horizontal center-vertical'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[4]} boardId={4}/>
          </div>
          <div className='col-4 center-horizontal'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[5]} boardId={5}/>
          </div>                
        </div>
        <div className='row'>
          <div className='col-4'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[6]} boardId={6}/>
          </div>
          <div className='col-4 center-vertical'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[7]} boardId={7}/>
          </div>
          <div className='col-4'>
            <LocalBoard gameStatus={this.props.gameStatus} dispatch={this.props.dispatch} localData = {this.props.boardData[8]} boardId={8}/>
          </div>                
        </div>    
      </div>
    );
  }
}

GlobalBoard.propTypes = {
  boardData: PropTypes.array,
  dispatch: PropTypes.func,
  gameStatus: PropTypes.object
};

const mapStateToProps = state => {
  return {
    boardData: state.boardData,
    gameStatus: state.gameStatus
  };
};

export default connect(mapStateToProps)(GlobalBoard);