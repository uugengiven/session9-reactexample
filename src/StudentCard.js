import React from 'react';
import './StudentCard.css';

class StudentCard extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isClicked: true,
            timesClicked: 0
        };

        this.changeClick = this.changeClick.bind(this);
    }

    changeClick(){
        this.setState({isClicked: !this.state.isClicked});
        this.setState({timesClicked: this.state.timesClicked + 1});
        console.log(this.state.isClicked);
    }

    render() {
        var name = this.props.name;
        var session = this.props.session;
        var hasBeenClicked = this.state.isClicked;
        var urgh = "";
        if(hasBeenClicked)
        {
            urgh = "blue";
        }
        else
        {
            urgh = "white";
        }

        return (
        <div onClick={this.changeClick} className="Card" style={{backgroundColor: urgh}}>
            <h1>{name}</h1>
            <h2>Session {session}</h2>
            <h2>Liked this many times: {this.state.timesClicked}</h2>
        </div>
        );
  }
}
export default StudentCard;