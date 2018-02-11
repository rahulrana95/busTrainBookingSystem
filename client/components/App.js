import React from 'react';
import DatePicker from 'antd/lib/date-picker';  // for js
import './App.css';
class App extends React.Component {
  	data = () => {
  		return (<div>Hi</div>);
  	}
  render(){


    return (
      <div className="bgColorGreen">Hi from rahul rana
      	<button>Fetch</button>
          (<DatePicker />
      	{this.data()}
      </div>
    );
  }
}
export default App;
