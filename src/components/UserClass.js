import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log("child cons" + this.props.name);
        this.state = {
            count : 0
        }
    }

    incrCount(){
        this.state.count++; 
    }

    async componentDidMount(){
        //console.log("child compo mount" + this.props.name);
        const userName = 'janvi123694'; 
        const data = await fetch(`https://api.github.com/users/${userName}`);
        const json = await data.json(); 
        //console.log(json);
        const newObj = {
            id : json.id,
            name : json.name, 
            location : json.location
        }


        this.setState({
            userInfo: newObj
        });
    }

    render(){
       // console.log("child render" + this.props.name);
        return this.state.userInfo && (
            <div className='user-card text-center'>
            <h2 className="font-bold my-2"> {this.state.userInfo.name || "Janhavi"} </h2>
            <h2> {this.state.userInfo.location || "Buffalo"} </h2>
            <h2> {this.state.userInfo.id} </h2>
            {console.log(this.state)}
            <h2>tsaij@gmail.com</h2>
            <h2>
                CC count : {this.state.count}
            </h2>
            <button className="bg-green-600 px-5 py-2 rounded-lg text-white"
                onClick={() => {this.setState({count : this.state.count + 1})}}>
                 click
            </button>
          </div>
        )
    }
}

export default UserClass;