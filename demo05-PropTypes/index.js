var Hello = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired
    },
    getDefaultProps: function(){
        return {
            title: 'Hello',
			title2: 'aaaa'
        }
    }, 
    render: function(){
        return (
            <div>
                {this.props.title}, {this.props.name} !!! 
				<p>{this.props.title2}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Hello name='123jeff' />,
    document.getElementById("content")
)

// refernce:  http://jamestw.logdown.com/posts/257890-257890-reactjs-prop