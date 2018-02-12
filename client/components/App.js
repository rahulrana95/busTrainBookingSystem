import React from 'react';
import { Layout } from 'antd';
import NavigationMenu from './Menu/index';
const { Header, Footer, Sider, Content } = Layout;
import './App.css';

const styleCss = {
  padding: '0px',
  height: 'auto'

};


class App extends React.Component {
  render(){
    return (
      <div>
      <Layout>
      <Header style={styleCss}> <NavigationMenu /> </Header>
      <Content>{this.props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
      </div>
    );
  }
}
export default App;
