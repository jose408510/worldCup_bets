import React, {Component} from 'react';
import "./Avatar.css";


class Avatar extends Component {

    constructor(props){
        super(props)
        this.state={
            photo:[]
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text">Upload Photo</span>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile01"/>
                    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
                </div>
            </div>
        )
    } 
}
