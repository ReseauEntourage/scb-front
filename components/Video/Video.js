import React from "react"
import Menu from './../Menu/Menu'
// import YouTube from 'react-youtube';
import { Markdown } from 'react-showdown';

import ReactPlayer from 'react-player'

import './Video.scss'
import Button from './../Button/Button'

let paragraphes = []

const subStringData = (text) => {
    
    const res = text.split("\n")
    return res   

}
const Video = ( { video, color, order, slug, items, chapitre } ) => {

    video.map( (vid) => {
        paragraphes = subStringData(vid.Texte)
    })
    return (
        <div className="container">
            <Menu slug={ slug }/>
            <div className="video-container">
            { 
                video.map( (vid, key) => (
                    <div className="video-content" key={key}>
                        <div className="video__video-subtitle">
                            <h2> {chapitre} </h2>
                        </div>
                        <div className="video__video-name">
                            <h1> { vid.titre } </h1>
                        </div>
                        <div className="video-player-container">
                            <ReactPlayer url={vid.url_video} playing width='100%' height='100%'/>
                        </div>

                        <div className="video__video-text-container">
                            <Markdown markup={ vid.Texte } /> 
                        </div>
                        
                        {
                            items.pop().ordre !== order 
                            ?   
                                <Button 
                                    title={"continuer"} 
                                    link={ "/parcours/" } 
                                    order={order}
                                    color={color} 
                                    slug={slug}
                                    chapitre={chapitre}
                                    next={false}
                                />
                            :   
                                <Button 
                                    title={"continuer"} 
                                    link={ "/parcours/" } 
                                    order={order} 
                                    color={color} 
                                    slug={slug}
                                    chapitre={chapitre}
                                    next={true}
                                />
                        }
                    </div>
                ))
            }
            </div>
        </div>
    )
}
    
    
    

export default Video