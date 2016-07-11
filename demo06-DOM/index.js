var Hello = React.createClass({
    handleClick: function(){
        alert(ReactDOM.findDOMNode(this.refs.myInput).value);
    },
    render: function(){
        return (
            <div>
                <input type="text" ref="myInput" />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Hello />,
    document.getElementById("content")
)