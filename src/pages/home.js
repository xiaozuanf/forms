import React from "react";
const tsIcon = require( '../assets/image/1.png');
const article=[
    {
        title:'css禁用鼠标样式',
        subtitle:'css禁用鼠标样式',
        content:`.disabled {<br>
            &nbsp;&nbsp;pointer-events: none;<br>
            &nbsp;&nbsp;cursor: default;<br>
            &nbsp;&nbsp;opacity: 0.6;<br>
        }`,
        date:'2021-01-12'
    }
]
export default class Home extends React.Component{
    render(){
        return(
            <div className="trends">
                {/* <img src={tsIcon}></img> */}
                {/* <div className="trends-li">
                    <h1 className="trends-title">构建Nginx和PHP镜像</h1>
                    <div className="trends">构建Nginx和PHP镜像</div>
                    <div className="trends-date">发布于2020-09-12</div>
                </div>
                <div className="trends-li">
                    <h1 className="trends-title">构建Nginx和PHP镜像</h1>
                    <div className="trends">构建Nginx和PHP镜像</div>
                    <div className="trends-date">发布于2020-09-12</div>
                </div> */}
                {
                    article.map((item, index) => {
                        return <div className="trends-li" key={index}>
                            <h1 className="trends-title">{item.title}</h1>
                            <div className="trends" dangerouslySetInnerHTML={{__html: item.content}}></div>
                            <div className="trends-date">发布于{item.date}</div>
                        </div>
                    })
                }
            </div>
        )
    }
}