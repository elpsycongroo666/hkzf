import React, { Component,Fragment } from 'react'
import indexCss from './index.module.scss'
export default class index extends Component {
    render() {
        return (
            <Fragment>
                <div className={indexCss.search_location}>
                    <div className={indexCss.search_input_wrap}>
                        <div className={indexCss.search_city}>
                            <span>广州</span>
                            <i className={"iconfont icon-arrow " + indexCss['arrow']}></i>
                        </div>
                        <div className={indexCss.search_input}>
                            <i className={"iconfont icon-seach " + indexCss['search']}></i>
                            <span>请输入小区或地址</span>
                        </div>
                    </div>
                    <div className={indexCss.search_icon}>
                        <i className={"iconfont icon-map " + indexCss['map']}></i>
                    </div>
                </div>
            </Fragment>
        )
    }
}
