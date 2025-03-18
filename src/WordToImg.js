import React, { Component } from 'react';
import { connect } from 'react-redux';


import './WordToImg.scss'
import { property } from 'lodash';
import  { useRef } from 'react';
import domtoimage from 'dom-to-image';


class wordToImg extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            propertyname:'',
            captureRef : React.createRef()

        }
    }
    
    
    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }
    
    handleOnChangeInput=(event,inputId)=>{
        let copyState = this.state;
        copyState[inputId]=event.target.value;
        this.setState({
            ...copyState,
        })
        
    }
    takeScreenshot = () => {
        const node = this.state.captureRef.current;

        domtoimage.toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'screenshot.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error('Oops, something went wrong!', error);
            });
    };
    render() {
        
        console.log('states: ',this.state)
        
        return (
            <div className='wordToImg-container'>
            <div ref={this.state.captureRef} className='wordToImg-content'>
                <div  className='pseudo-before-wordToImg'></div>
                <div className='wordToImg'>
                    <div className='logo'>
                    </div>
                    <div className='form-control txt' >
                        {this.state.propertyname}
                    </div>
                </div>
            </div>
            <textarea type='text'className='form-control txt-input' 
                placeholder='Enter property name' 
                value={this.state.propertyname}
                onChange={(event)=>this.handleOnChangeInput(event,'propertyname')} 
            />
            <button className='export-button' onClick={this.takeScreenshot}>Xuất ảnh</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(wordToImg);
