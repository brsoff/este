import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="Home">
        <div>
          <h1>Home</h1>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;