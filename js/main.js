var React= require('react');
var ReactDOM=require('react-dom');
var GmailBox=require('./Components/GmailBox.js');

var MainComponent=React.createClass({
    render:function(){

          return(
        <div>
         <GmailBox/>
        </div>
      );
    }
  });
  ReactDOM.render(<MainComponent/>,document.getElementById('app'));
