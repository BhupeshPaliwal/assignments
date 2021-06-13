import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import SwitchResult from "./SwitchResult.js";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const ItemComponent = (props) => {
  return <span onClick={() => props.onClick(props.value)}>{props.value}</span>;
};

const Page = () => {
  const [SearchTerm, setSearchTerm] = useState("");

  const [ContentPart, setContentPart] = useState("");
  const OptionClicked = (term) => {
    setContentPart(term);
    setSearchTerm("");
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0", height: "130%" }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
            >
              <Menu.Item key="search">
                <input
                  type="text"
                  placeholder="Search Pokemon..."
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </Menu.Item>

              {(() => {
                switch (SearchTerm.toLowerCase().trim()) {
                  case "":
                    return (
                      <div>
                        <SubMenu key="sub1" title="Regular">
                          <SubMenu key="sub11" title="Gen 1">
                            <SubMenu key="sub111" title="Kanto">
                              <Menu.Item key="1">
                                <ItemComponent
                                  value="Magmar"
                                  onClick={() => OptionClicked("magmar")}
                                />
                              </Menu.Item>
                              <Menu.Item key="2">
                                <ItemComponent
                                  value="Drowzee"
                                  onClick={() => OptionClicked("drowzee")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub112" title="Johto">
                              <Menu.Item key="3">
                                <ItemComponent
                                  value="Gengar"
                                  onClick={() => OptionClicked("gengar")}
                                />
                              </Menu.Item>
                              <Menu.Item key="4">
                                <ItemComponent
                                  value="Slaking"
                                  onClick={() => OptionClicked("slaking")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>

                          <SubMenu key="sub12" title="Gen 2">
                            <SubMenu key="sub121" title="Hoen">
                              <Menu.Item key="5">
                                <ItemComponent
                                  value="Zubat"
                                  onClick={() => OptionClicked("zubat")}
                                />
                              </Menu.Item>
                              <Menu.Item key="6">
                                <ItemComponent
                                  value="Bagon"
                                  onClick={() => OptionClicked("bagon")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub122" title="Sinnoh">
                              <Menu.Item key="7">
                                <ItemComponent
                                  value="Taurus"
                                  onClick={() => OptionClicked("taurus")}
                                />
                              </Menu.Item>
                              <Menu.Item key="8">
                                <ItemComponent
                                  value="Goldeen"
                                  onClick={() => OptionClicked("goldeen")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>

                        <SubMenu key="sub2" title="Legendary">
                          <SubMenu key="sub21" title="Gen 3">
                            <SubMenu key="sub211" title="Unova">
                              <Menu.Item key="9">
                                <ItemComponent
                                  value="Mewtwo"
                                  onClick={() => OptionClicked("mewtwo")}
                                />
                              </Menu.Item>
                              <Menu.Item key="10">
                                <ItemComponent
                                  value="Latios"
                                  onClick={() => OptionClicked("latios")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub212" title="Kalos">
                              <Menu.Item key="11">
                                <ItemComponent
                                  value="Uxie"
                                  onClick={() => OptionClicked("uxie")}
                                />
                              </Menu.Item>
                              <Menu.Item key="12">
                                <ItemComponent
                                  value="Heatran"
                                  onClick={() => OptionClicked("heatran")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>

                          <SubMenu key="sub22" title="Gen 4">
                            <SubMenu key="sub221" title="Alola">
                              <Menu.Item key="13">
                                <ItemComponent
                                  value="Thundurus"
                                  onClick={() => OptionClicked("thundurus")}
                                />
                              </Menu.Item>
                              <Menu.Item key="14">
                                <ItemComponent
                                  value="Hooh"
                                  onClick={() => OptionClicked("hooh")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub222" title="Galar">
                              <Menu.Item key="15">
                                <ItemComponent
                                  value="Lugia"
                                  onClick={() => OptionClicked("lugia")}
                                />
                              </Menu.Item>
                              <Menu.Item key="16">
                                <ItemComponent
                                  value="Zapdos"
                                  onClick={() => OptionClicked("zapdos")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "regular":
                    return (
                      <div>
                        <SubMenu key="sub1" title="Regular">
                          <SubMenu key="sub11" title="Gen 1">
                            <SubMenu key="sub111" title="Kanto">
                              <Menu.Item key="1">
                                <ItemComponent
                                  value="Magmar"
                                  onClick={() => OptionClicked("magmar")}
                                />
                              </Menu.Item>
                              <Menu.Item key="2">
                                <ItemComponent
                                  value="Drowzee"
                                  onClick={() => OptionClicked("drowzee")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub111" title="Johto">
                              <Menu.Item key="3">
                                <ItemComponent
                                  value="Gengar"
                                  onClick={() => OptionClicked("gengar")}
                                />
                              </Menu.Item>
                              <Menu.Item key="4">
                                <ItemComponent
                                  value="Slaking"
                                  onClick={() => OptionClicked("slaking")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>

                          <SubMenu key="sub12" title="Gen 2">
                            <SubMenu key="sub121" title="Hoen">
                              <Menu.Item key="5">
                                <ItemComponent
                                  value="Zubat"
                                  onClick={() => OptionClicked("zubat")}
                                />
                              </Menu.Item>
                              <Menu.Item key="6">
                                <ItemComponent
                                  value="Bagon"
                                  onClick={() => OptionClicked("bagon")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub122" title="Sinnoh">
                              <Menu.Item key="7">
                                <ItemComponent
                                  value="Taurus"
                                  onClick={() => OptionClicked("taurus")}
                                />
                              </Menu.Item>
                              <Menu.Item key="8">
                                <ItemComponent
                                  value="Goldeen"
                                  onClick={() => OptionClicked("goldeen")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "gen 1":
                    return (
                      <div>
                        <SubMenu key="sub11" title="Gen 1">
                          <SubMenu key="sub111" title="Kanto">
                            <Menu.Item key="1">
                              <ItemComponent
                                value="Magmar"
                                onClick={() => OptionClicked("magmar")}
                              />
                            </Menu.Item>
                            <Menu.Item key="2">
                              <ItemComponent
                                value="Drowzee"
                                onClick={() => OptionClicked("drowzee")}
                              />
                            </Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub112" title="Johto">
                            <Menu.Item key="3">
                              <ItemComponent
                                value="Gengar"
                                onClick={() => OptionClicked("gengar")}
                              />
                            </Menu.Item>
                            <Menu.Item key="4">
                              <ItemComponent
                                value="Slaking"
                                onClick={() => OptionClicked("slaking")}
                              />
                            </Menu.Item>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "gen 2":
                    return (
                      <div>
                        <SubMenu key="sub12" title="Gen 2">
                          <SubMenu key="sub121" title="Hoen">
                            <Menu.Item key="5">
                              <ItemComponent
                                value="Zubat"
                                onClick={() => OptionClicked("zubat")}
                              />
                            </Menu.Item>
                            <Menu.Item key="6">
                              <ItemComponent
                                value="Bagon"
                                onClick={() => OptionClicked("bagon")}
                              />
                            </Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub122" title="Sinnoh">
                            <Menu.Item key="7">
                              <ItemComponent
                                value="Taurus"
                                onClick={() => OptionClicked("taurus")}
                              />
                            </Menu.Item>
                            <Menu.Item key="8">
                              <ItemComponent
                                value="Goldeen"
                                onClick={() => OptionClicked("goldeen")}
                              />
                            </Menu.Item>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "Hoen":
                    return (
                      <div>
                        <SubMenu key="sub121" title="Hoen">
                          <Menu.Item key="5">
                            <ItemComponent
                              value="Zubat"
                              onClick={() => OptionClicked("zubat")}
                            />
                          </Menu.Item>
                          <Menu.Item key="6">
                            <ItemComponent
                              value="Bagon"
                              onClick={() => OptionClicked("bagon")}
                            />
                          </Menu.Item>
                        </SubMenu>
                      </div>
                    );

                  case "sinnoh":
                    return (
                      <div>
                        <SubMenu key="sub122" title="Sinnoh">
                          <Menu.Item key="7">
                            <ItemComponent
                              value="Taurus"
                              onClick={() => OptionClicked("taurus")}
                            />
                          </Menu.Item>
                          <Menu.Item key="8">
                            <ItemComponent
                              value="Goldeen"
                              onClick={() => OptionClicked("goldeen")}
                            />
                          </Menu.Item>
                        </SubMenu>
                      </div>
                    );

                  case "kanto":
                    return (
                      <div>
                        <SubMenu key="sub111" title="Kanto">
                          <Menu.Item key="1">
                            <ItemComponent
                              value="Magmar"
                              onClick={() => OptionClicked("magmar")}
                            />
                          </Menu.Item>
                          <Menu.Item key="2">
                            <ItemComponent
                              value="Drowzee"
                              onClick={() => OptionClicked("drowzee")}
                            />
                          </Menu.Item>
                        </SubMenu>
                      </div>
                    );

                  case "johto":
                    return (
                      <div>
                        <SubMenu key="sub112" title="Johto">
                          <Menu.Item key="3">
                            <ItemComponent
                              value="Gengar"
                              onClick={() => OptionClicked("gengar")}
                            />
                          </Menu.Item>
                          <Menu.Item key="4">
                            <ItemComponent
                              value="Slaking"
                              onClick={() => OptionClicked("slaking")}
                            />
                          </Menu.Item>
                        </SubMenu>
                      </div>
                    );

                  case "legendary":
                    return (
                      <div>
                        <SubMenu key="sub2" title="Legendary">
                          <SubMenu key="sub21" title="Gen 3">
                            <SubMenu key="sub211" title="Unova">
                              <Menu.Item key="9">
                                <ItemComponent
                                  value="Mewtwo"
                                  onClick={() => OptionClicked("mewtwo")}
                                />
                              </Menu.Item>
                              <Menu.Item key="10">
                                <ItemComponent
                                  value="Latios"
                                  onClick={() => OptionClicked("latios")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub212" title="Kalos">
                              <Menu.Item key="11">
                                <ItemComponent
                                  value="Uxie"
                                  onClick={() => OptionClicked("uxie")}
                                />
                              </Menu.Item>
                              <Menu.Item key="12">
                                <ItemComponent
                                  value="Heatran"
                                  onClick={() => OptionClicked("heatran")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>

                          <SubMenu key="sub22" title="Gen 4">
                            <SubMenu key="sub221" title="Alola">
                              <Menu.Item key="13">
                                <ItemComponent
                                  value="Thundurus"
                                  onClick={() => OptionClicked("thundurus")}
                                />
                              </Menu.Item>
                              <Menu.Item key="14">
                                <ItemComponent
                                  value="Hooh"
                                  onClick={() => OptionClicked("hooh")}
                                />
                              </Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub222" title="Galar">
                              <Menu.Item key="15">
                                <ItemComponent
                                  value="Lugia"
                                  onClick={() => OptionClicked("lugia")}
                                />
                              </Menu.Item>
                              <Menu.Item key="16">
                                <ItemComponent
                                  value="Zapdos"
                                  onClick={() => OptionClicked("zapdos")}
                                />
                              </Menu.Item>
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "gen 3":
                    return (
                      <div>
                        <SubMenu key="sub21" title="Gen 3">
                          <SubMenu key="sub211" title="Unova">
                            <Menu.Item key="9">
                              <ItemComponent
                                value="Mewtwo"
                                onClick={() => OptionClicked("mewtwo")}
                              />
                            </Menu.Item>
                            <Menu.Item key="10">
                              <ItemComponent
                                value="Latios"
                                onClick={() => OptionClicked("latios")}
                              />
                            </Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub212" title="Kalos">
                            <Menu.Item key="11">
                              <ItemComponent
                                value="Uxie"
                                onClick={() => OptionClicked("uxie")}
                              />
                            </Menu.Item>
                            <Menu.Item key="12">
                              <ItemComponent
                                value="Heatran"
                                onClick={() => OptionClicked("heatran")}
                              />
                            </Menu.Item>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "unova":
                    return (
                      <div>
                        <SubMenu key="sub211" title="Unova">
                          <Menu.Item key="9">
                            <ItemComponent
                              value="Mewtwo"
                              onClick={() => OptionClicked("mewtwo")}
                            />
                          </Menu.Item>
                          <Menu.Item key="10">
                            <ItemComponent
                              value="Latios"
                              onClick={() => OptionClicked("latios")}
                            />
                          </Menu.Item>
                        </SubMenu>
                      </div>
                    );

                  case "kalos":
                    return (
                      <div>
                        <SubMenu key="sub212" title="Kalos">
                          <Menu.Item key="11">
                            <ItemComponent
                              value="Uxie"
                              onClick={() => OptionClicked("uxie")}
                            />
                          </Menu.Item>
                          <Menu.Item key="12">
                            <ItemComponent
                              value="Heatran"
                              onClick={() => OptionClicked("heatran")}
                            />
                          </Menu.Item>
                        </SubMenu>
                      </div>
                    );

                  case "gen 4":
                    return (
                      <div>
                        <SubMenu key="sub22" title="Gen 4">
                          <SubMenu key="sub221" title="Alola">
                            <Menu.Item key="13">
                              <ItemComponent
                                value="Thundurus"
                                onClick={() => OptionClicked("thundurus")}
                              />
                            </Menu.Item>
                            <Menu.Item key="14">
                              <ItemComponent
                                value="Hooh"
                                onClick={() => OptionClicked("hooh")}
                              />
                            </Menu.Item>
                          </SubMenu>
                          <SubMenu key="sub222" title="Galar">
                            <Menu.Item key="15">
                              <ItemComponent
                                value="Lugia"
                                onClick={() => OptionClicked("lugia")}
                              />
                            </Menu.Item>
                            <Menu.Item key="16">
                              <ItemComponent
                                value="Zapdos"
                                onClick={() => OptionClicked("zapdos")}
                              />
                            </Menu.Item>
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "alola":
                    return (
                      <div>
                        <SubMenu key="sub221" title="Alola">
                          <Menu.Item key="13">
                            <ItemComponent
                              value="Thundurus"
                              onClick={() => OptionClicked("thundurus")}
                            />
                          </Menu.Item>
                          <Menu.Item key="14">
                            <ItemComponent
                              value="Hooh"
                              onClick={() => OptionClicked("hooh")}
                            />
                          </Menu.Item>
                        </SubMenu>
                      </div>
                    );

                  case "galar":
                    return (
                      <div>
                        <SubMenu key="sub222" title="Galar">
                          <Menu.Item key="15">
                            <ItemComponent
                              value="Lugia"
                              onClick={() => OptionClicked("lugia")}
                            />
                          </Menu.Item>
                          <Menu.Item key="16">
                            <ItemComponent
                              value="Zapdos"
                              onClick={() => OptionClicked("zapdos")}
                            />
                          </Menu.Item>
                        </SubMenu>
                      </div>
                    );

                  case "magmar":
                    return (
                      <div>
                        <Menu.Item key="1">
                          <ItemComponent
                            value="Magmar"
                            onClick={() => OptionClicked("magmar")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "drowzee":
                    return (
                      <div>
                        <Menu.Item key="2">
                          <ItemComponent
                            value="Drowzee"
                            onClick={() => OptionClicked("drowzee")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "gengar":
                    return (
                      <div>
                        <Menu.Item key="3">
                          <ItemComponent
                            value="Gengar"
                            onClick={() => OptionClicked("gengar")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "slaking":
                    return (
                      <div>
                        <Menu.Item key="4">
                          <ItemComponent
                            value="Slaking"
                            onClick={() => OptionClicked("slaking")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "zubat":
                    return (
                      <div>
                        <Menu.Item key="5">
                          <ItemComponent
                            value="Zubat"
                            onClick={() => OptionClicked("zubat")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "bagon":
                    return (
                      <div>
                        <Menu.Item key="6">
                          <ItemComponent
                            value="Bagon"
                            onClick={() => OptionClicked("bagon")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "taurus":
                    return (
                      <div>
                        <Menu.Item key="7">
                          <ItemComponent
                            value="Taurus"
                            onClick={() => OptionClicked("taurus")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "goldeen":
                    return (
                      <div>
                        <Menu.Item key="8">
                          <ItemComponent
                            value="Goldeen"
                            onClick={() => OptionClicked("goldeen")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "mewtwo":
                    return (
                      <div>
                        <Menu.Item key="9">
                          <ItemComponent
                            value="Mewtwo"
                            onClick={() => OptionClicked("mewtwo")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "latios":
                    return (
                      <div>
                        <Menu.Item key="10">
                          <ItemComponent
                            value="Latios"
                            onClick={() => OptionClicked("latios")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "uxie":
                    return (
                      <div>
                        <Menu.Item key="11">
                          <ItemComponent
                            value="Uxie"
                            onClick={() => OptionClicked("uxie")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "heatran":
                    return (
                      <div>
                        <Menu.Item key="12">
                          <ItemComponent
                            value="Heatran"
                            onClick={() => OptionClicked("heatran")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "thundurus":
                    return (
                      <div>
                        <Menu.Item key="13">
                          <ItemComponent
                            value="Thundurus"
                            onClick={() => OptionClicked("thundurus")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "hooh":
                    return (
                      <div>
                        <Menu.Item key="14">
                          <ItemComponent
                            value="Hooh"
                            onClick={() => OptionClicked("hooh")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "lugia":
                    return (
                      <div>
                        <Menu.Item key="15">
                          <ItemComponent
                            value="Lugia"
                            onClick={() => OptionClicked("lugia")}
                          />
                        </Menu.Item>
                      </div>
                    );

                  case "zapdos":
                    return (
                      <div>
                        <Menu.Item key="16">
                          <ItemComponent
                            value="Zapdos"
                            onClick={() => OptionClicked("zapdos")}
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
            <SwitchResult value={ContentPart} />
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Page;

// {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
// <Menu.Item key="1">nav 1</Menu.Item>
// <Menu.Item key="2">nav 2</Menu.Item>
// <Menu.Item key="3">nav 3</Menu.Item>
// </Menu>  */}
