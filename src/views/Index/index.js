import React, { Component } from "react";
import { Route, Link, NavLink, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import Home from "../Home/index";
import MyPlugin from "../MyPlugin/index";
import MyStyle from "../MyStyle/index";
import Mine from "../Mine/index";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const breadcrumbNameMap = {
  "/Index": "首页",
  "/Index/MyPlugin": "插件",
  "/Index/MyStyle": "样式",
  "/Index/Mine": "我的"
};
//列表菜单项
const FirstMenu = [
  {
    key: "sub1",
    title: "首页",
    icon: "home",
    SecondMenu: [
      {
        key: "1",
        title: "首页概览",
        icon: "pie-chart",
        path: "/Index"
      },
      {
        key: "2",
        title: "首页其他",
        icon: "tag-o",
        path: "/Index/Home"
      }
    ]
  },
  {
    key: "sub2",
    title: "插件",
    icon: "pushpin-o",
    SecondMenu: [
      {
        key: "3",
        title: "插件概览",
        icon: "pie-chart",
        path: "/Index/MyPlugin"
      },
      {
        key: "4",
        title: "插件其他",
        icon: "tag-o",
        path: "/Index/MyPlugin"
      }
    ]
  },
  {
    key: "sub3",
    title: "样式",
    icon: "smile-o",
    SecondMenu: [
      {
        key: "5",
        title: "样式概览",
        icon: "pie-chart",
        path: "/Index/MyStyle"
      },
      {
        key: "6",
        title: "样式其他",
        icon: "tag-o",
        path: "/Index/MyStyle"
      }
    ]
  },
  {
    key: "sub4",
    title: "我的",
    icon: "rocket",
    SecondMenu: [
      {
        key: "7",
        title: "我的概览",
        icon: "pie-chart",
        path: "/Index/Mine"
      },
      {
        key: "8",
        title: "我的其他",
        icon: "tag-o",
        path: "/Index/Mine"
      }
    ]
  }
];
class SiderMenu extends Component {
  render() {
    // FirstItem 一级菜单遍历
    const MenuItem = FirstMenu.map(FirstItem => (
      <SubMenu
        key={FirstItem.key}
        title={
          <span>
            <Icon type={FirstItem.icon} />
            {FirstItem.title}
          </span>
        }
      >
        {/*  SecondItem 二级菜单遍历 */}
        {FirstItem.SecondMenu.map(SecondItem => (
          <Menu.Item key={SecondItem.key}>
            <NavLink to={{ pathname: SecondItem.path }}>
              <Icon type={SecondItem.icon} />
              {SecondItem.title}
            </NavLink>
          </Menu.Item>
        ))}
      </SubMenu>
    ));
    return (
      <Menu
        mode="inline"
        defaultOpenKeys={["sub1"]}
        defaultSelectedKeys={["1"]}
        style={{ height: "100%" }}
      >
        {MenuItem}
      </Menu>
    );
  }
}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    const pathSnippets = location.pathname.split("/").filter(i => i);
    console.log(pathSnippets);
    const breadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to={{ pathname: "/", params: { abc: "abc" } }}>
                React Dome
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={{ pathname: "/User", params: { abc: "abc" } }}>
                用户
              </Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breadcrumbItems}
          </Breadcrumb>

          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <SiderMenu />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 500 }}>
              {/* <Switch> */}
              <Route exact path="/Index" component={Home} />
              <Route path="/Index/MyPlugin" component={MyPlugin} />
              <Route path="/Index/MyStyle" component={MyStyle} />
              <Route path="/Index/Mine" component={Mine} />
              {/* </Switch> */}
            </Content>
          </Layout>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Design by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/liyaocool"
          >
            liyaocool
          </a>
        </Footer>
      </Layout>
    );
  }
}

const IndexWithRouter = withRouter(Index);
export default IndexWithRouter;
