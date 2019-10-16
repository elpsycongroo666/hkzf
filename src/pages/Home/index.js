import React, { Component, Fragment } from "react";
import axios from "../../utils/request.js";
import { baseUrl } from "../../utils/url";
import { Carousel } from "antd-mobile";
import SearchLocation from "../../component/searchLocation";
import indexCss from "./index.module.scss";
// 将图片像js一样引入进来即可
import nav1 from "../../assets/images/nav-1.png";
import nav2 from "../../assets/images/nav-2.png";
import nav3 from "../../assets/images/nav-3.png";
import nav4 from "../../assets/images/nav-4.png";
class Home extends Component {
  state = {
    // 轮播图数据
    swiperList: [],
    // 解决轮播图高度bug
    imgHeight: 176,
    // 导航数组
    navList: [
      {
        imgSrc: nav1,
        id: 1,
        text: "整租"
      },
      {
        imgSrc: nav2,
        id: 2,
        text: "合租"
      },
      {
        imgSrc: nav3,
        id: 3,
        text: "地图找房"
      },
      {
        imgSrc: nav4,
        id: 4,
        text: "去租房"
      }
    ],
    // 租房小组
    groupList: [],
    // 最新资讯
    newsList: []
  };
  componentDidMount() {
    // 相当于vue中的mounted
    // 轮播图请求
    axios.get("/home/swiper").then(res => {
      this.setState({
        swiperList: res.data.body
      });
    });

    // 租房小组
    axios.get("/home/groups").then(res => {
      this.setState({
        groupList: res.data.body
      });
    });

    // 最新资讯
    axios.get("/home/news").then(res => {
      this.setState({
        newsList: res.data.body
      });
    });
  }

  // 另一种解决轮播图不能 自动轮播的方法 先等到数组回来之后 在生成结构
  // showCarousel(isShow) {
  //   if (isShow) {
  //     return (
  //       <Carousel autoplay infinite>
  //         {this.state.swiperList.map(val => (
  //           <a
  //             key={val.id}
  //             href="http://www.alipay.com"
  //             style={{
  //               display: "inline-block",
  //               width: "100%",
  //               height: this.state.imgHeight
  //             }}
  //           >
  //             <img
  //               src={baseUrl + val.imgSrc}
  //               alt=""
  //               style={{ width: "100%", verticalAlign: "top" }}
  //               onLoad={() => {
  //                 // fire window resize event to change height
  //                 window.dispatchEvent(new Event("resize"));
  //                 this.setState({ imgHeight: "auto" });
  //               }}
  //             />
  //           </a>
  //         ))}
  //       </Carousel>
  //     );
  //   } else {
  //     return <Fragment></Fragment>;
  //   }
  // }

  render() {
    //   只要修改state和props中的属性 那么都会执行render函数
    return (
      <Fragment>
        {/* {this.showCarousel(this.state.swiperList.length)} */}
        {/* 轮播图 开始 */}
        <div className={indexCss.index_carousel}>
          {this.state.swiperList.length && (
            <Carousel autoplay infinite>
              {this.state.swiperList.map(val => (
                <a
                  key={val.id}
                  href="http://www.alipay.com"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight
                  }}
                >
                  <img
                    src={baseUrl + val.imgSrc}
                    alt=""
                    style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          )}
          <div className={indexCss.index_search}>
            <SearchLocation />
          </div>
        </div>
        {/* 轮播图 结束 */}

        {/* 导航 开始 */}
        <nav className={indexCss.hk_nav}>
          {this.state.navList.map(v => (
            <div className={indexCss.nav_item} key={v.id}>
              <img src={v.imgSrc} alt="" />
              <div className={indexCss.nav_text}>{v.text}</div>
            </div>
          ))}
        </nav>
        {/* 导航 结束 */}

        {/* 租房小组 开始 */}
        <div className={indexCss.group}>
          <div className={indexCss.group_title}>
            <span>租房小组</span>
            <span>更多</span>
          </div>
          <div className={indexCss.group_content}>
            {this.state.groupList.map(v => (
              <div className={indexCss.group_item} key={v.id}>
                <div className={indexCss.group_info}>
                  <div className={indexCss.info_name1}>{v.title}</div>
                  <div className={indexCss.info_name2}>{v.desc}</div>
                </div>
                <div className={indexCss.group_img_wrap}>
                  <img src={baseUrl + v.imgSrc} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 租房小组 结束 */}

        {/* 最新资讯 开始 */}
        <div className={indexCss.news}>
          <div className={indexCss.news_title}>最新资讯</div>
          <div className={indexCss.news_content}>
            {this.state.newsList.map(v => (
              <div className={indexCss.news_item} key={v.id}>
                <div className={indexCss.item_img}>
                  <img src={baseUrl + v.imgSrc} alt="" />
                </div>
                <div className={indexCss.item_text}>
                  <div className={indexCss.text_title}>{v.title}</div>
                  <div className={indexCss.text_desc}>
                    <span>{v.from}</span>
                    <span>{v.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 最新资讯 结束 */}
      </Fragment>
    );
  }
}
export default Home;
