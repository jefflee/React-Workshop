var Hello = React.createClass({
    render: function(){
        return (
            <div>
                Hello World!
            </div>
        )
    }
});

ReactDOM.render(
    <Hello />,
    document.getElementById("content")
)