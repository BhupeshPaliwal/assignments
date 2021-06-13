import React, { useState } from "react";
import "antd/dist/antd.css";
import Process from "./Process.js";
import "./Style.css";
import { Layout, Menu } from "antd";
import { Input, Space } from 'antd';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const LastBranch = (props) => {
  return <span onClick={() => props.onClick(props.value)}>{props.value}</span>;
};

const Page = () => {
  const [SearchTerm, setSearchTerm] = useState("");

  const [PageContent, setPageContent] = useState("");
  const Selection = (term) => {
    setPageContent(term);
    setSearchTerm("");
  };

  return (
    <Layout>
      <Header className="header">
        <div />
        <Input placeholder="Search Famous Places" onChange={(event) => setSearchTerm(event.target.value)} style={{ width: 200 }} enterButton="Search"/>
      </Header>
      <Content style={{ padding: "25px 25px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0", height: "130%", minHeight: '60vh' }}
          
        >
          <Sider className="site-layout-background" width={200} theme="dark">
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{ height: "100%" }}
              key="menu1"
              >
              

              {(() => {
                switch (SearchTerm.toLowerCase().trim()) {
                  case "":
                    return (
                      <div>
                        <SubMenu key="sub0" title="Countries">
                        <SubMenu key="sub1" title="america">
                          <SubMenu key="sub11" title="illinois">
                            <SubMenu key="sub111" title="chicago">
                              <Menu.Item key="1">
                                <LastBranch
                                  value="place1"
                                  onClick={() => Selection("place1")}
                                />
                              </Menu.Item>
                              <Menu.Item key="2">
                                <LastBranch
                                  value="place2"
                                  onClick={() => Selection("place2")}
                                />
                              </Menu.Item>
                              <Menu.Item key="3">
                                <LastBranch
                                  value="place3"
                                  onClick={() => Selection("place3")}
                                />
                              </Menu.Item>
                              <Menu.Item key="4">
                                <LastBranch
                                  value="place4"
                                  onClick={() => Selection("place4")}
                                />
                              </Menu.Item>
                              <Menu.Item key="5">
                                <LastBranch
                                  value="place5"
                                  onClick={() => Selection("place5")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub112" title="naperville">
                              <Menu.Item key="6">
                                <LastBranch
                                  value="place6"
                                  onClick={() => Selection("place6")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                          <SubMenu key="12" title="newyork">
                            <SubMenu key="sub121" title="rochester">
                              <Menu.Item key="7">
                                <LastBranch
                                  value="place7"
                                  onClick={() => Selection("place7")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub122" title="buffalo">
                              <Menu.Item key="8">
                                <LastBranch
                                  value="place8"
                                  onClick={() => Selection("place8")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                          <SubMenu key="13" title="texas">
                            <SubMenu key="sub131" title="houston">
                              <Menu.Item key="9">
                                <LastBranch
                                  value="place9"
                                  onClick={() => Selection("place9")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub132" title="dallas">  
                              <Menu.Item key="10">
                                <LastBranch
                                  value="place10"
                                  onClick={() => Selection("place10")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                        
                        <SubMenu key="sub2" title="australia">
                          <SubMenu key="sub21" title="queensland">
                            <SubMenu key="sub211" title="brisbane">
                              <Menu.Item key="11">
                                <LastBranch
                                  value="place11"
                                  onClick={() => Selection("place11")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                          <SubMenu key="22" title="tasmania">
                            <SubMenu key="sub221" title="hobart">
                              <Menu.Item key="12">
                                <LastBranch
                                  value="place12"
                                  onClick={() => Selection("place12")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub3" title="asia">
                          <SubMenu key="sub31" title="india">
                            <SubMenu key="sub311" title="mumbai">
                              <Menu.Item key="13">
                                <LastBranch
                                  value="place13"
                                  onClick={() => Selection("place13")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title="europe">
                          <SubMenu key="sub41" title="france">
                            <SubMenu key="sub411" title="paris">
                              <Menu.Item key="14">
                                <LastBranch
                                  value="place14"
                                  onClick={() => Selection("place14")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "america":
                    return (
                      <div>
                        <SubMenu key="sub1" title="america">
                          <SubMenu key="sub11" title="illinois">
                            <SubMenu key="sub111" title="chicago">
                              <Menu.Item key="1">
                                <LastBranch
                                  value="place1"
                                  onClick={() => Selection("place1")}
                                />
                              </Menu.Item>
                              <Menu.Item key="2">
                                <LastBranch
                                  value="place2"
                                  onClick={() => Selection("place2")}
                                />
                              </Menu.Item>
                              <Menu.Item key="3">
                                <LastBranch
                                  value="place3"
                                  onClick={() => Selection("place3")}
                                />
                              </Menu.Item>
                              <Menu.Item key="4">
                                <LastBranch
                                  value="place4"
                                  onClick={() => Selection("place4")}
                                />
                              </Menu.Item>
                              <Menu.Item key="5">
                                <LastBranch
                                  value="place5"
                                  onClick={() => Selection("place5")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub112" title="naperville">
                              <Menu.Item key="6">
                                <LastBranch
                                  value="place6"
                                  onClick={() => Selection("place6")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                          <SubMenu key="12" title="newyork">
                            <SubMenu key="sub121" title="rochester">
                              <Menu.Item key="7">
                                <LastBranch
                                  value="place7"
                                  onClick={() => Selection("place7")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub122" title="buffalo">
                              <Menu.Item key="8">
                                <LastBranch
                                  value="place8"
                                  onClick={() => Selection("place8")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                          <SubMenu key="13" title="texas">
                            <SubMenu key="sub131" title="houston">
                              <Menu.Item key="9">
                                <LastBranch
                                  value="place9"
                                  onClick={() => Selection("place9")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub132" title="dallas"> 
                              <Menu.Item key="10">
                                <LastBranch
                                  value="place10"
                                  onClick={() => Selection("place10")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "illinois":
                    return (
                      <div>
                        <SubMenu key="sub11" title="illinois">
                            <SubMenu key="sub111" title="chicago">
                              <Menu.Item key="1">
                                <LastBranch
                                  value="place1"
                                  onClick={() => Selection("place1")}
                                />
                              </Menu.Item>
                              <Menu.Item key="2">
                                <LastBranch
                                  value="place2"
                                  onClick={() => Selection("place2")}
                                />
                              </Menu.Item>
                              <Menu.Item key="3">
                                <LastBranch
                                  value="place3"
                                  onClick={() => Selection("place3")}
                                />
                              </Menu.Item>
                              <Menu.Item key="4">
                                <LastBranch
                                  value="place4"
                                  onClick={() => Selection("place4")}
                                />
                              </Menu.Item>
                              <Menu.Item key="5">
                                <LastBranch
                                  value="place5"
                                  onClick={() => Selection("place5")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub112" title="naperville">
                              <Menu.Item key="6">
                                <LastBranch
                                  value="place6"
                                  onClick={() => Selection("place6")}
                                />
                              </Menu.Item>
                            </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "chicago":
                    return (
                      <div>
                        <SubMenu key="sub111" title="chicago">
                              <Menu.Item key="1">
                                <LastBranch
                                  value="place1"
                                  onClick={() => Selection("place1")}
                                />
                              </Menu.Item>
                              <Menu.Item key="2">
                                <LastBranch
                                  value="place2"
                                  onClick={() => Selection("place2")}
                                />
                              </Menu.Item>
                              <Menu.Item key="3">
                                <LastBranch
                                  value="place3"
                                  onClick={() => Selection("place3")}
                                />
                              </Menu.Item>
                              <Menu.Item key="4">
                                <LastBranch
                                  value="place4"
                                  onClick={() => Selection("place4")}
                                />
                              </Menu.Item>
                              <Menu.Item key="5">
                                <LastBranch
                                  value="place5"
                                  onClick={() => Selection("place5")}
                                />
                              </Menu.Item>
                            </SubMenu>
                      </div>
                    );
                  case "naperville":
                    return (
                      <div>
                        <SubMenu key="sub112" title="naperville">
                              <Menu.Item key="6">
                                <LastBranch
                                  value="place6"
                                  onClick={() => Selection("place6")}
                                />
                              </Menu.Item>
                        </SubMenu>
                      </div>
                    );
                  case "newyork":
                    return(
                      <div>
                        <SubMenu key="12" title="newyork">
                            <SubMenu key="sub121" title="rochester">
                              <Menu.Item key="7">
                                <LastBranch
                                  value="place7"
                                  onClick={() => Selection("place7")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub122" title="buffalo">
                              <Menu.Item key="8">
                                <LastBranch
                                  value="place8"
                                  onClick={() => Selection("place8")}
                                />
                              </Menu.Item>
                            </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "rochester":
                    return(
                      <div>
                        <SubMenu key="sub121" title="rochester">
                              <Menu.Item key="7">
                                <LastBranch
                                  value="place7"
                                  onClick={() => Selection("place7")}
                                />
                              </Menu.Item>
                        </SubMenu>
                      </div>
                    );
                  case "buffalo":
                    return (
                      <div>
                        <SubMenu key="sub122" title="buffalo">
                              <Menu.Item key="8">
                                <LastBranch
                                  value="place8"
                                  onClick={() => Selection("place8")}
                                />
                              </Menu.Item>
                        </SubMenu>
                      </div>
                    );
                  case "texas":
                    return(
                      <div>
                        <SubMenu key="13" title="texas">
                            <SubMenu key="sub131" title="houston">
                              <Menu.Item key="9">
                                <LastBranch
                                  value="place9"
                                  onClick={() => Selection("place9")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub132" title="dallas"> 
                              <Menu.Item key="10">
                                <LastBranch
                                  value="place10"
                                  onClick={() => Selection("place10")}
                                />
                              </Menu.Item>
                            </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "houston":
                    return (
                      <div>
                        <SubMenu key="sub131" title="houston">
                              <Menu.Item key="9">
                                <LastBranch
                                  value="place9"
                                  onClick={() => Selection("place9")}
                                />
                              </Menu.Item>
                        </SubMenu>
                      </div>
                    );
                  case "dallas":
                    return(
                      <div>
                        <SubMenu key="sub132" title="dallas"> 
                              <Menu.Item key="10">
                                <LastBranch
                                  value="place10"
                                  onClick={() => Selection("place10")}
                                />
                              </Menu.Item>
                        </SubMenu>
                      </div>
                    );
                  case "australia":
                    return (
                      <div>
                        <SubMenu key="sub2" title="australia">
                          <SubMenu key="sub21" title="queensland">
                            <SubMenu key="sub211" title="brisbane">
                              <Menu.Item key="11">
                                <LastBranch
                                  value="place11"
                                  onClick={() => Selection("place11")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                          <SubMenu key="22" title="tasmania">
                            <SubMenu key="sub221" title="hobart">
                              <Menu.Item key="12">
                                <LastBranch
                                  value="place12"
                                  onClick={() => Selection("place12")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "queensland":
                    return (
                      <div>
                        <SubMenu key="sub21" title="queensland">
                            <SubMenu key="sub211" title="brisbane">
                              <Menu.Item key="11">
                                <LastBranch
                                  value="place11"
                                  onClick={() => Selection("place11")}
                                />
                              </Menu.Item>
                            </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "brisbane":
                    return(
                      <div>
                        <SubMenu key="sub211" title="brisbane">
                              <Menu.Item key="11">
                                <LastBranch
                                  value="place11"
                                  onClick={() => Selection("place11")}
                                />
                              </Menu.Item>
                        </SubMenu>
                      </div>
                    );
                  case "tasmania":
                    return (
                      <div>
                        <SubMenu key="22" title="tasmania">
                            <SubMenu key="sub221" title="hobart">
                              <Menu.Item key="12">
                                <LastBranch
                                  value="place12"
                                  onClick={() => Selection("place12")}
                                />
                              </Menu.Item>
                            </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "hobart":
                    return (
                      <div>
                        <SubMenu key="sub221" title="hobart">
                              <Menu.Item key="12">
                                <LastBranch
                                  value="place12"
                                  onClick={() => Selection("place12")}
                                />
                              </Menu.Item>
                            </SubMenu>
                      </div>
                    );
                  case "asia":
                    return (
                      <div>
                        <SubMenu key="sub3" title="asia">
                          <SubMenu key="sub31" title="india">
                            <SubMenu key="sub311" title="mumbai">
                              <Menu.Item key="13">
                                <LastBranch
                                  value="place13"
                                  onClick={() => Selection("place13")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "india":
                    return (
                      <div>
                        <SubMenu key="sub31" title="india">
                            <SubMenu key="sub311" title="mumbai">
                              <Menu.Item key="13">
                                <LastBranch
                                  value="place13"
                                  onClick={() => Selection("place13")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                      </div>
                    );
                  case "mumbai":
                    return (
                      <div>
                        <SubMenu key="sub311" title="mumbai">
                              <Menu.Item key="13">
                                <LastBranch
                                  value="place13"
                                  onClick={() => Selection("place13")}
                                />
                              </Menu.Item>
                        </SubMenu>
                      </div>
                    );
                  case "europe":
                    return(
                      <div>
                        <SubMenu key="sub4" title="europe">
                          <SubMenu key="sub41" title="france">
                            <SubMenu key="sub411" title="paris">
                              <Menu.Item key="14">
                                <LastBranch
                                  value="place14"
                                  onClick={() => Selection("place14")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );
                  case "france":
                    return(
                      <div>
                        <SubMenu key="sub41" title="france">
                            <SubMenu key="sub411" title="paris">
                              <Menu.Item key="14">
                                <LastBranch
                                  value="place14"
                                  onClick={() => Selection("place14")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                      </div>
                    );
                  case "paris":
                    return(
                      <div>
                        <SubMenu key="sub411" title="paris">
                              <Menu.Item key="14">
                                <LastBranch
                                  value="place14"
                                  onClick={() => Selection("place14")}
                                />
                              </Menu.Item>
                            </SubMenu>
                      </div>
                    );
                  case "place1":
                    return (
                      <div>
                        <Menu.Item key="1">
                                <LastBranch
                                  value="place1"
                                  onClick={() => Selection("place1")}
                                />
                        </Menu.Item>
                      </div>
                    );
                  case "place2":
                    return (
                      <div>
                        <Menu.Item key="2">
                                <LastBranch
                                  value="place2"
                                  onClick={() => Selection("place2")}
                                />
                        </Menu.Item>
                      </div>
                      );
                  case "place3":
                    return (
                      <div>
                        <Menu.Item key="3">
                                <LastBranch
                                  value="place3"
                                  onClick={() => Selection("place3")}
                                />
                        </Menu.Item>
                      </div>
                    );
                  case "place4":
                    return (
                      <div>
                        <Menu.Item key="4">
                                <LastBranch
                                  value="place4"
                                  onClick={() => Selection("place4")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place5":
                    return (
                      <div>
                        <Menu.Item key="5">
                                <LastBranch
                                  value="place5"
                                  onClick={() => Selection("place5")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place6":
                    return (
                      <div>
                        <Menu.Item key="6">
                                <LastBranch
                                  value="place6"
                                  onClick={() => Selection("place6")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place7":
                    return (
                      <div>
                        <Menu.Item key="7">
                                <LastBranch
                                  value="place7"
                                  onClick={() => Selection("place7")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place8":
                    return (
                      <div>
                        <Menu.Item key="8">
                                <LastBranch
                                  value="place8"
                                  onClick={() => Selection("place8")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place9":
                    return (
                      <div>
                        <Menu.Item key="9">
                                <LastBranch
                                  value="place9"
                                  onClick={() => Selection("place9")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place10":
                    return (
                      <div>
                        <Menu.Item key="10">
                                <LastBranch
                                  value="place10"
                                  onClick={() => Selection("place10")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place11":
                    return (
                      <div>
                        <Menu.Item key="11">
                                <LastBranch
                                  value="place11"
                                  onClick={() => Selection("place11")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place12":
                    return (
                      <div>
                        <Menu.Item key="12">
                                <LastBranch
                                  value="place12"
                                  onClick={() => Selection("place12")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place13":
                    return (
                      <div>
                        <Menu.Item key="13">
                                <LastBranch
                                  value="place13"
                                  onClick={() => Selection("place13")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    case "place14":
                    return (
                      <div>
                        <Menu.Item key="14">
                                <LastBranch
                                  value="place14"
                                  onClick={() => Selection("place14")}
                                />
                              </Menu.Item>
                      </div>
                    );
                    
                    default:
                    return (
                      <div>
                        <Menu.Item key="NoResults">No Results Found</Menu.Item>
                      </div>
                    );
                }
              })()}
            </Menu>
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Process value={PageContent} />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by Yashraj in React
      </Footer>
    </Layout>
  );
};

export default Page;