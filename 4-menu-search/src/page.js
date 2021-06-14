import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import SwitchResult from "./SwitchResult.js";
import JSONDATA from "./search_list.json";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const ItemComponent = (props) => {
  return <span onClick={() => props.onClick(props.value)}><Menu.Item key={props.value}>{props.value}</Menu.Item></span>;
};

const Page = () => {
  const [SearchTerm, setSearchTerm] = useState("");

  const [ContentPart, setContentPart] = useState("");
  const OptionClicked = (term) => {
    setContentPart(term);
    setSearchTerm("");
  };

  var arr = [];

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
                /></Menu.Item>
              

              {
                  JSONDATA.filter((val)=>{
                  if(SearchTerm==""){arr.push("")}
                  else if(val.searched.toLowerCase().includes((SearchTerm.toLowerCase()).trim())){
                    arr.push(val.searched);
                  }
                })
              }  

              {( ()=> {

                switch (arr[0]) {
                  case "":
                    return (
                      <div>
                        <SubMenu key="sub1" title="Regular">
                          <SubMenu key="sub11" title="Gen 1">
                            <SubMenu key="sub111" title="Kanto">
                              
                                <ItemComponent
                                  value="Magmar"
                                  onClick={() => OptionClicked("magmar")}
                                />
                              
                              
                                <ItemComponent
                                  value="Drowzee"
                                  onClick={() => OptionClicked("drowzee")}
                                />
                              
                            </SubMenu>
                            <SubMenu key="sub112" title="Johto">
                              
                                <ItemComponent
                                  value="Gengar"
                                  onClick={() => OptionClicked("gengar")}
                                />
                              
                              
                                <ItemComponent
                                  value="Slaking"
                                  onClick={() => OptionClicked("slaking")}
                                />
                              
                            </SubMenu>
                          </SubMenu>

                          <SubMenu key="sub12" title="Gen 2">
                            <SubMenu key="sub121" title="Hoen">
                              
                                <ItemComponent
                                  value="Zubat"
                                  onClick={() => OptionClicked("zubat")}
                                />
                              
                              
                                <ItemComponent
                                  value="Bagon"
                                  onClick={() => OptionClicked("bagon")}
                                />
                              
                            </SubMenu>
                            <SubMenu key="sub122" title="Sinnoh">
                              
                                <ItemComponent
                                  value="Taurus"
                                  onClick={() => OptionClicked("taurus")}
                                />
                              
                              
                                <ItemComponent
                                  value="Goldeen"
                                  onClick={() => OptionClicked("goldeen")}
                                />
                              
                            </SubMenu>
                          </SubMenu>
                        </SubMenu>

                        <SubMenu key="sub2" title="Legendary">
                          <SubMenu key="sub21" title="Gen 3">
                            <SubMenu key="sub211" title="Unova">
                              
                                <ItemComponent
                                  value="Mewtwo"
                                  onClick={() => OptionClicked("mewtwo")}
                                />
                              
                              
                                <ItemComponent
                                  value="Latios"
                                  onClick={() => OptionClicked("latios")}
                                />
                              
                            </SubMenu>
                            <SubMenu key="sub212" title="Kalos">
                              
                                <ItemComponent
                                  value="Uxie"
                                  onClick={() => OptionClicked("uxie")}
                                />
                              
                              
                                <ItemComponent
                                  value="Heatran"
                                  onClick={() => OptionClicked("heatran")}
                                />
                              
                            </SubMenu>
                          </SubMenu>

                          <SubMenu key="sub22" title="Gen 4">
                            <SubMenu key="sub221" title="Alola">
                              
                                <ItemComponent
                                  value="Thundurus"
                                  onClick={() => OptionClicked("thundurus")}
                                />
                              
                              
                                <ItemComponent
                                  value="Hooh"
                                  onClick={() => OptionClicked("hooh")}
                                />
                              
                            </SubMenu>
                            <SubMenu key="sub222" title="Galar">
                              
                                <ItemComponent
                                  value="Lugia"
                                  onClick={() => OptionClicked("lugia")}
                                />
                              
                              
                                <ItemComponent
                                  value="Zapdos"
                                  onClick={() => OptionClicked("zapdos")}
                                />
                              
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
                              
                                <ItemComponent
                                  value="Magmar"
                                  onClick={() => OptionClicked("magmar")}
                                />
                              
                              
                                <ItemComponent
                                  value="Drowzee"
                                  onClick={() => OptionClicked("drowzee")}
                                />
                              
                            </SubMenu>
                            <SubMenu key="sub111" title="Johto">
                              
                                <ItemComponent
                                  value="Gengar"
                                  onClick={() => OptionClicked("gengar")}
                                />
                              
                              
                                <ItemComponent
                                  value="Slaking"
                                  onClick={() => OptionClicked("slaking")}
                                />
                              
                            </SubMenu>
                          </SubMenu>

                          <SubMenu key="sub12" title="Gen 2">
                            <SubMenu key="sub121" title="Hoen">
                              
                                <ItemComponent
                                  value="Zubat"
                                  onClick={() => OptionClicked("zubat")}
                                />
                              
                              
                                <ItemComponent
                                  value="Bagon"
                                  onClick={() => OptionClicked("bagon")}
                                />
                              
                            </SubMenu>
                            <SubMenu key="sub122" title="Sinnoh">
                              
                                <ItemComponent
                                  value="Taurus"
                                  onClick={() => OptionClicked("taurus")}
                                />
                              
                              
                                <ItemComponent
                                  value="Goldeen"
                                  onClick={() => OptionClicked("goldeen")}
                                />
                              
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
                            
                              <ItemComponent
                                value="Magmar"
                                onClick={() => OptionClicked("magmar")}
                              />
                            
                            
                              <ItemComponent
                                value="Drowzee"
                                onClick={() => OptionClicked("drowzee")}
                              />
                            
                          </SubMenu>
                          <SubMenu key="sub112" title="Johto">
                            
                              <ItemComponent
                                value="Gengar"
                                onClick={() => OptionClicked("gengar")}
                              />
                            
                            
                              <ItemComponent
                                value="Slaking"
                                onClick={() => OptionClicked("slaking")}
                              />
                            
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "gen 2":
                    return (
                      <div>
                        <SubMenu key="sub12" title="Gen 2">
                          <SubMenu key="sub121" title="Hoen">
                            
                              <ItemComponent
                                value="Zubat"
                                onClick={() => OptionClicked("zubat")}
                              />
                            
                            
                              <ItemComponent
                                value="Bagon"
                                onClick={() => OptionClicked("bagon")}
                              />
                            
                          </SubMenu>
                          <SubMenu key="sub122" title="Sinnoh">
                            
                              <ItemComponent
                                value="Taurus"
                                onClick={() => OptionClicked("taurus")}
                              />
                            
                            
                              <ItemComponent
                                value="Goldeen"
                                onClick={() => OptionClicked("goldeen")}
                              />
                            
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "Hoen":
                    return (
                      <div>
                        <SubMenu key="sub121" title="Hoen">
                          
                            <ItemComponent
                              value="Zubat"
                              onClick={() => OptionClicked("zubat")}
                            />
                          
                          
                            <ItemComponent
                              value="Bagon"
                              onClick={() => OptionClicked("bagon")}
                            />
                          
                        </SubMenu>
                      </div>
                    );

                  case "sinnoh":
                    return (
                      <div>
                        <SubMenu key="sub122" title="Sinnoh">
                          
                            <ItemComponent
                              value="Taurus"
                              onClick={() => OptionClicked("taurus")}
                            />
                          
                          
                            <ItemComponent
                              value="Goldeen"
                              onClick={() => OptionClicked("goldeen")}
                            />
                          
                        </SubMenu>
                      </div>
                    );

                  case "kanto":
                    return (
                      <div>
                        <SubMenu key="sub111" title="Kanto">
                          
                            <ItemComponent
                              value="Magmar"
                              onClick={() => OptionClicked("magmar")}
                            />
                          
                          
                            <ItemComponent
                              value="Drowzee"
                              onClick={() => OptionClicked("drowzee")}
                            />
                          
                        </SubMenu>
                      </div>
                    );

                  case "johto":
                    return (
                      <div>
                        <SubMenu key="sub112" title="Johto">
                          
                            <ItemComponent
                              value="Gengar"
                              onClick={() => OptionClicked("gengar")}
                            />
                          
                          
                            <ItemComponent
                              value="Slaking"
                              onClick={() => OptionClicked("slaking")}
                            />
                          
                        </SubMenu>
                      </div>
                    );

                  case "legendary":
                    return (
                      <div>
                        <SubMenu key="sub2" title="Legendary">
                          <SubMenu key="sub21" title="Gen 3">
                            <SubMenu key="sub211" title="Unova">
                              
                                <ItemComponent
                                  value="Mewtwo"
                                  onClick={() => OptionClicked("mewtwo")}
                                />
                              
                              
                                <ItemComponent
                                  value="Latios"
                                  onClick={() => OptionClicked("latios")}
                                />
                              
                            </SubMenu>
                            <SubMenu key="sub212" title="Kalos">
                              
                                <ItemComponent
                                  value="Uxie"
                                  onClick={() => OptionClicked("uxie")}
                                />
                              
                              
                                <ItemComponent
                                  value="Heatran"
                                  onClick={() => OptionClicked("heatran")}
                                />
                              
                            </SubMenu>
                          </SubMenu>

                          <SubMenu key="sub22" title="Gen 4">
                            <SubMenu key="sub221" title="Alola">
                              
                                <ItemComponent
                                  value="Thundurus"
                                  onClick={() => OptionClicked("thundurus")}
                                />
                              
                              
                                <ItemComponent
                                  value="Hooh"
                                  onClick={() => OptionClicked("hooh")}
                                />
                              
                            </SubMenu>
                            <SubMenu key="sub222" title="Galar">
                              
                                <ItemComponent
                                  value="Lugia"
                                  onClick={() => OptionClicked("lugia")}
                                />
                              
                              
                                <ItemComponent
                                  value="Zapdos"
                                  onClick={() => OptionClicked("zapdos")}
                                />
                              
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
                            
                              <ItemComponent
                                value="Mewtwo"
                                onClick={() => OptionClicked("mewtwo")}
                              />
                            
                            
                              <ItemComponent
                                value="Latios"
                                onClick={() => OptionClicked("latios")}
                              />
                            
                          </SubMenu>
                          <SubMenu key="sub212" title="Kalos">
                            
                              <ItemComponent
                                value="Uxie"
                                onClick={() => OptionClicked("uxie")}
                              />
                            
                            
                              <ItemComponent
                                value="Heatran"
                                onClick={() => OptionClicked("heatran")}
                              />
                            
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "unova":
                    return (
                      <div>
                        <SubMenu key="sub211" title="Unova">
                          
                            <ItemComponent
                              value="Mewtwo"
                              onClick={() => OptionClicked("mewtwo")}
                            />
                          
                          
                            <ItemComponent
                              value="Latios"
                              onClick={() => OptionClicked("latios")}
                            />
                          
                        </SubMenu>
                      </div>
                    );

                  case "kalos":
                    return (
                      <div>
                        <SubMenu key="sub212" title="Kalos">
                          
                            <ItemComponent
                              value="Uxie"
                              onClick={() => OptionClicked("uxie")}
                            />
                          
                          
                            <ItemComponent
                              value="Heatran"
                              onClick={() => OptionClicked("heatran")}
                            />
                          
                        </SubMenu>
                      </div>
                    );

                  case "gen 4":
                    return (
                      <div>
                        <SubMenu key="sub22" title="Gen 4">
                          <SubMenu key="sub221" title="Alola">
                            
                              <ItemComponent
                                value="Thundurus"
                                onClick={() => OptionClicked("thundurus")}
                              />
                            
                            
                              <ItemComponent
                                value="Hooh"
                                onClick={() => OptionClicked("hooh")}
                              />
                            
                          </SubMenu>
                          <SubMenu key="sub222" title="Galar">
                            
                              <ItemComponent
                                value="Lugia"
                                onClick={() => OptionClicked("lugia")}
                              />
                            
                            
                              <ItemComponent
                                value="Zapdos"
                                onClick={() => OptionClicked("zapdos")}
                              />
                            
                          </SubMenu>
                        </SubMenu>
                      </div>
                    );

                  case "alola":
                    return (
                      <div>
                        <SubMenu key="sub221" title="Alola">
                          
                            <ItemComponent
                              value="Thundurus"
                              onClick={() => OptionClicked("thundurus")}
                            />
                          
                          
                            <ItemComponent
                              value="Hooh"
                              onClick={() => OptionClicked("hooh")}
                            />
                          
                        </SubMenu>
                      </div>
                    );

                  case "galar":
                    return (
                      <div>
                        <SubMenu key="sub222" title="Galar">
                          
                            <ItemComponent
                              value="Lugia"
                              onClick={() => OptionClicked("lugia")}
                            />
                          
                          
                            <ItemComponent
                              value="Zapdos"
                              onClick={() => OptionClicked("zapdos")}
                            />
                          
                        </SubMenu>
                      </div>
                    );

                  case "magmar":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Magmar"
                            onClick={() => OptionClicked("magmar")}
                          />
                        
                      </div>
                    );

                  case "drowzee":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Drowzee"
                            onClick={() => OptionClicked("drowzee")}
                          />
                        
                      </div>
                    );

                  case "gengar":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Gengar"
                            onClick={() => OptionClicked("gengar")}
                          />
                        
                      </div>
                    );

                  case "slaking":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Slaking"
                            onClick={() => OptionClicked("slaking")}
                          />
                        
                      </div>
                    );

                  case "zubat":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Zubat"
                            onClick={() => OptionClicked("zubat")}
                          />
                        
                      </div>
                    );

                  case "bagon":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Bagon"
                            onClick={() => OptionClicked("bagon")}
                          />
                        
                      </div>
                    );

                  case "taurus":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Taurus"
                            onClick={() => OptionClicked("taurus")}
                          />
                        
                      </div>
                    );

                  case "goldeen":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Goldeen"
                            onClick={() => OptionClicked("goldeen")}
                          />
                        
                      </div>
                    );

                  case "mewtwo":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Mewtwo"
                            onClick={() => OptionClicked("mewtwo")}
                          />
                        
                      </div>
                    );

                  case "latios":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Latios"
                            onClick={() => OptionClicked("latios")}
                          />
                        
                      </div>
                    );

                  case "uxie":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Uxie"
                            onClick={() => OptionClicked("uxie")}
                          />
                        
                      </div>
                    );

                  case "heatran":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Heatran"
                            onClick={() => OptionClicked("heatran")}
                          />
                        
                      </div>
                    );

                  case "thundurus":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Thundurus"
                            onClick={() => OptionClicked("thundurus")}
                          />
                        
                      </div>
                    );

                  case "hooh":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Hooh"
                            onClick={() => OptionClicked("hooh")}
                          />
                        
                      </div>
                    );

                  case "lugia":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Lugia"
                            onClick={() => OptionClicked("lugia")}
                          />
                        
                      </div>
                    );

                  case "zapdos":
                    return (
                      <div>
                        
                          <ItemComponent
                            value="Zapdos"
                            onClick={() => OptionClicked("zapdos")}
                          />
                        
                      </div>
                    );

                  default:
                    return (
                      <div>
                        <Menu.Item key="NoResults">No Results Found</Menu.Item>
                      </div>
                    );
                }
              }  ) ()  }
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
// nav 1
// nav 2
// nav 3
// </Menu>  */}
