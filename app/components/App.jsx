// App.jsx

import React from 'react';
import Footer from './Footer.jsx';
import Intro from './Intro.jsx';
import Experience from './Experience.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <Experience />
        <Footer />
      </div>
    );
  }
}

// module.exports in ES6!!!
export default App;
