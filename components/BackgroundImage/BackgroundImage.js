import React from 'react';

import './BackgroundImage.scss'

class BackgroundImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render () {
        const {img, desktop_img} = this.props

        return (
            <div className="background-container">
                {
                    this.state.width > 992 
                    ?
                    <img className="background-image" src={`http://localhost:1337${desktop_img}`} alt=""/>
                    :
                    <img className="background-image" src={`http://localhost:1337${img}`} alt=""/>
                }
                
            </div>
        )
    }
    
}

export default BackgroundImage