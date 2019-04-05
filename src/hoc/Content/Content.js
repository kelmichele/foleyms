import React, { Component } from 'react';
import classes from './Content.scss';

class Content extends Component {
  render() {
    return (
      <main className={classes.Content}>
        <div className="inside">
          {this.props.children}
        </div>
      </main>
    );
  }
}

export default Content;