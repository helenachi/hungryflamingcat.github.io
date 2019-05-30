import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="blurb">
            <h1>Hello, my name is Helena Chi</h1>
            <p>I'm looking for an internship lol</p>
          </div>
        </div>
        <footer>
          <ul>
              <li><a href="mailto:helenac2@illinois.edu">email</a></li>
              <li><a href="https://github.com/hungryflamingcat">github</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Home;