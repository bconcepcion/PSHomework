import React, {Component} from 'react'

class Tardis extends Component {
    constructor(props){
        super(props);
        this.state = {
            tardis : {
                name : 'Time and Relative Dimension in Space',
                caps: false
            }
        }
    }

    changeIt = (event) => {
        if(this.state.tardis.caps) {
            this.setState({
                tardis : {
                    name: event.target.innerText.toLowerCase(),
                    caps: false
                }
            })
        } else {
            this.setState({
                tardis : {
                    name: event.target.innerText.toUpperCase(),
                    caps: true
                    
                }
            })
        }
    }
    render(){
        return(
        <div onClick={this.changeIt}>
        <p>{this.state.tardis.name}</p>
        </div>
        )
    }
}
export default Tardis
