// App.jsx

import React from 'react';
import Footer from './Footer.jsx';
import Intro from './Intro.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <Footer />
      </div>
    );
  }
}

// module.exports in ES6!!!
export default App;
