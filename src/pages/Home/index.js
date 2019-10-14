import React, { Component } from 'react'
import axios from '../../utils/request.js'
class Home extends Component {

    componentDidMount(){
        // 相当于vue中的mounted
        axios.get("/home/swiper")
        .then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div>
                123
            </div>
        )
    }
}
export default Home;