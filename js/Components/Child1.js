var React=require('react');
var Child2=require("./Child2");

var Child1=React.createClass({
  render:function(){
    console.log("-->"+this.props.allLabelsData);
    var lstLabel=this.props.allLabelsData.map(function(e,i){
      return(
        <div key={i}>
        <Child2 key={i} id={e.id} name={e.name}></Child2>
        </div>
      );
    });
    return(
     <div>
       {lstLabel}
     </div>
    );
  }
});
module.exports=Child1
