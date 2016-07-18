var LikeButton = React.createClass({
    getInitialState: function(){
        return {liked: true};
    },
    handleClick: function(){
        this.setState({liked: !this.state.liked});
    },
    render: function(){

        var text = this.state.liked ? "like" : "dislike";

        return (
            <div>
                <button onClick={this.handleClick}>{text}</button>
            </div>
        )
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById("content")
)