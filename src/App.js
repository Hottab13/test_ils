import Map from "./components/Map/Map";
import TebleMap from "./components/Table/Table";
import React from "react";
import { Layout, theme } from "antd";
import { useSelector } from "react-redux";

const { Header, Sider, Content } = Layout;

const App = () => {
  const request = useSelector((state) => state.request);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header"></Header>
      <Layout>
        <Sider
          width={600}
          style={{
            background: colorBgContainer,
          }}
        >
          <TebleMap arrRequest={request.requests} />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 500,
              maxHeight: 450,
              height: 550,
              background: colorBgContainer,
            }}
          >
            <Map coordinatesRequest={request.coordinatesRequest} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
