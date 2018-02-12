import React from 'react';
import { Menu, Icon,Avatar } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const styleCss = {
  float: 'right'
};


export default class NavigationMenu extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
      <Menu.Item key="logo">
          AllInOne Bookspot
      </Menu.Item>
        <Menu.Item key="mail">
          <Icon type="mail" />Home
        </Menu.Item>
        <Menu.Item key="hotels" >
          <Icon type="appstore" />Hotels
        </Menu.Item>


        <SubMenu style={styleCss} key="profile" title={<span><Avatar size="large" shape="square" icon="user" /> <Icon style={{ marginLeft:'7px' }} type="caret-down" /> </span>}>
            <Menu.Item key="setting:1">My Trips</Menu.Item>
            <Menu.Item key="setting:2">Wallet</Menu.Item>
            <Menu.Item key="setting:3">My Profile</Menu.Item>
            <Menu.Item key="setting:4">Sign out/in</Menu.Item>
        </SubMenu>
        <SubMenu style={styleCss} title={<span><Icon type="caret-down" />Select City</span>}>
        </SubMenu>
        <SubMenu style={styleCss} title={<span><Icon type="caret-down" />Manage Bookings</span>}>
            <Menu.Item key="setting:1">My Trips</Menu.Item>
            <Menu.Item key="setting:2">Wallet</Menu.Item>
            <Menu.Item key="setting:3">My Profile</Menu.Item>
            <Menu.Item key="setting:4">Sign out/in</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
