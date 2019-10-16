import { TabBar } from "antd-mobile";
import React from "react";
import { withRouter } from "react-router-dom";
import './index.css';
class HKLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab"
    };
  }

  render() {
    return (
      <div style={{ position: "fixed", height: "100%", width: "100%", top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#5fcc9e"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i className="iconfont icon-ind" />}
            selectedIcon={<i className="iconfont icon-ind" />}
            selected={this.props.location.pathname === "/"}
            onPress={() => {
              this.props.history.push("/");
            }}
          >
            {this.props.location.pathname === "/" && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse" />}
            selectedIcon={<i className="iconfont icon-findHouse" />}
            title="找房"
            key="list"
            selected={this.props.location.pathname === "/List"}
            onPress={() => {
              this.props.history.push("/List");
            }}
          >
            {this.props.location.pathname === "/List" && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom" />}
            selectedIcon={<i className="iconfont icon-infom" />}
            title="资讯"
            key="news"
            selected={this.props.location.pathname === "/News"}
            onPress={() => {
              this.props.history.push("/News");
            }}
          >
            {this.props.location.pathname === "/News" && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={ <i className="iconfont icon-my" />   }
            selectedIcon={<i className="iconfont icon-my" />}
            title="我的"
            key="my"
            selected={this.props.location.pathname === "/My"}
            onPress={() => {
              this.props.history.push("/My");
            }}
          >
            {this.props.location.pathname === "/My" && this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(HKLayout);
