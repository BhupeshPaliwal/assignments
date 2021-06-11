import React from "react";
import { inject, observer } from "mobx-react";
import {addSubmenuSelected, removeSubmenuSelected} from '../utils/common';
import {Layout, Menu, Icon, Input, Select} from "antd";
import { ContextMenuTrigger } from "react-contextmenu";
import '../assets/css/tree.css';
import Form1 from '../forms/form1'
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
var varForm = "hello all";

/*Flat list of organization nodes*/
let dataList = [];

/* List of parent nodes */
let parentList = [];

const generateList = (data) => {
    for (let i = 0; i < data.length; i++) {
        const node = data[i];
        const nodeId = node.nodeId;
        dataList.push({nodeId, name: node.name, parentNodeId: node.parentNodeId});
        if (node.children.length > 0) {
            generateList(node.children);
        }
    }
};

const getParentKey = (nodeId, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children.length > 0) {
            if (node.children.some(item => item.nodeId === nodeId)) {
                parentKey = node.nodeId;
            } else if (getParentKey(nodeId, node.children)) {
                parentKey = getParentKey(nodeId, node.children);
            }
        }
    }
    return parentKey;
};

const getAllParentKey = (parentIds) => {
    if (parentIds.length === 0) {
        return;
    }
    let ids = [];
    parentIds.forEach(item => {
        if (!parentList.includes(item)) {
            parentList.push(item);
        }
        dataList.forEach(node => {
            if (node.nodeId === item) {
                if (node.parentNodeId !== null && !ids.includes(node.parentNodeId)) {
                    ids.push(node.parentNodeId);
                }
            }
        });
    });
    return getAllParentKey(ids);
};

const getDatasetNode = (currentNode) => {
    let current = currentNode;
    while (current.nodeName !== 'LI') {
        current = current.parentNode;
    }
    return current;
};

/*Incremental mark of node*/
let count = 10;

@inject("rootStore")
@observer
class Tree extends React.Component {
    state = {
        searchValue: "",
        selectedKeys: [],
        openKeys: [],
        rightClickNode: null
    };

    componentDidMount() {
        document.querySelector('.react-contextmenu-wrapper').addEventListener('contextmenu', this.handleRightClick);
    }

    componentWillUnmount() {
        document.querySelector('.react-contextmenu-wrapper').removeEventListener('contextmenu', this.handleRightClick);
    }

    renderIcon = (type, flag) => {
        switch (type) {
            case 'ROOT':
                return (
                    <Icon type="home" style={ flag === 1? {color: '#00EE76'} : {}} />
                );
            case 'GROUP':
                return (
                    <Icon type="usergroup-add" style={ flag === 1? {color: '#61DBFB'} : {}} />
                );
            case 'BUSINESS':
                return (
                    <Icon type="bank" style={ flag === 1? {color: '#61DBFB'} : {}} />
                );
            case 'LOADING':
            return (
                <Icon type="loading" style={flag === 1? {color: '#61DBFB'} : {}}></Icon>
            );
            default:
                return (
                    <Icon type="team" style={ flag === 1? {color: '#61DBFB'} : {}} />
                );
        }
    };
    loop_searchYield = data => data.map(item => {
        let {searchValue} = this.state;
        const index = item.name.indexOf(searchValue);
        const beforeStr = item.name.substr(0, index);
        const afterStr = item.name.substr(index + searchValue.length);
        const title = index > -1 ? (
            <span>
                {this.renderIcon(item.nodeType, searchValue? 1 : 2)}
                {beforeStr}
                <span style={{color: '#61DBFB'}}>{searchValue}</span>
                {afterStr}
            </span>
        ) : <span>
                {this.renderIcon(item.nodeType, 2)}
                <span>{item.name}</span>
            </span>;

        if (item.canDeploy && this.loop_searchYield(item.children).includes(true)){
            return( true );
        }
        else if (item.canDeploy && item.name.includes(searchValue)) {
            //console.log(this.ParentNode === this.ParentNode);
            return (true);
            
        }        
        else if (item.canDeploy)
        {
            return(false);
        }

        if(item.name.includes(searchValue) )
        { 
        
            return (true);
     
            }
        else{
            return(false);
        }
        
    });
    loop_yieldInsideSearch = data => data.map(item => {
        let {searchValue} = this.state;
        const index = item.name.indexOf(searchValue);
        const beforeStr = item.name.substr(0, index);
        const afterStr = item.name.substr(index + searchValue.length);
        const title = index > -1 ? (
            <span>
                {this.renderIcon(item.nodeType, searchValue? 1 : 2)}
                {beforeStr}
                <span style={{color: '#61DBFB'}}>{searchValue}</span>
                {afterStr}
            </span>
        ) : <span>
                {this.renderIcon(item.nodeType, 2)}
                <span>{item.name}</span>
            </span>;

       if (item.canDeploy) {
            return (
                <SubMenu
                    key={item.nodeId}
                    data-id={item.nodeId}
                    data-privilege={item.privilege}
                    onTitleClick={this.handleTitleClick(item)}
                    title={title}
                >
                    {this.loop_yieldInsideSearch(item.children)}
                </SubMenu>
            );
            
        }     
 
        
            return (
                <Menu.Item key={item.nodeId} data-id={item.nodeId} data-privilege={item.privilege}>
                    {title}
                </Menu.Item>
            );
     
        
    });

    loop = data => data.map(item => {
        let {searchValue} = this.state;
        const index = item.name.indexOf(searchValue);
        const beforeStr = item.name.substr(0, index);
        const afterStr = item.name.substr(index + searchValue.length);
        const title = index > -1 ? (
            <span>
                {this.renderIcon(item.nodeType, searchValue? 1 : 2)}
                {beforeStr}
                <span style={{color: '#61DBFB'}}>{searchValue}</span>
                {afterStr}
            </span>
        ) : <span>
                {this.renderIcon(item.nodeType, 2)}
                <span>{item.name}</span>
            </span>;

       if (item.canDeploy && item.name.includes(searchValue))
       {
        return (
            <SubMenu
                key={item.nodeId}
                data-id={item.nodeId}
                data-privilege={item.privilege}
                onTitleClick={this.handleTitleClick(item)}
                title={title}
            >
                {this.loop_yieldInsideSearch(item.children)}
            </SubMenu>
        );
       }

       else if (item.canDeploy && this.loop_searchYield(item.children).includes(true)) {
            return (
                <SubMenu
                    key={item.nodeId}
                    data-id={item.nodeId}
                    data-privilege={item.privilege}
                    onTitleClick={this.handleTitleClick(item)}
                    title={title}
                >
                    {this.loop(item.children)}
                </SubMenu>
            );
        }

        if(item.name.includes(searchValue))
        { 
        
            return (
                <Menu.Item key={item.nodeId} data-id={item.nodeId} data-privilege={item.privilege}>
                    {title}
                </Menu.Item>
            );
     
            }
        
    });

    handleChange = (e) => {
        const value = e.target.value;
        let {treeData} = this.props.rootStore.treeStore;
                 /* Get all the node keys containing the search content */
        let openKeys = dataList.map((item) => {
            if (item.name.indexOf(value) > -1) {
                return getParentKey(item.nodeId, treeData);
            }
            return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);
                 /* Reset the parent node id to be expanded */
        parentList = [];
                 /* Write all parent node ids of the node ids of the selected content to parentList */
        getAllParentKey(openKeys);
        openKeys = parentList;
        this.setState({
            openKeys,
            searchValue: value,
        });
    };

    handleClick = e => {
                 /* Each menuItem is bound to a click event */
        console.log("click ", e.key);
        if(e.key === '4')
        {
            varForm = <Form1 />
        }
        else
        {
            varForm = "form key number " + e.key+ " not added yet"
        }
    };

    handleOpenChange = (openKeys) => {
                 /* You can get the key list of all currently opened panels */
        // console.log(openKeys);
        this.setState({
            openKeys
        });
    };

    handleAsyncLoadData = (treeNode) => {
        let nodeTypeTemp = treeNode.nodeType;
        treeNode.nodeType = 'LOADING';
        return new Promise((resolve) => {
            if (treeNode.children.length > 0) {
                treeNode.nodeType = nodeTypeTemp;
                resolve();
                return;
            }
            setTimeout(() => {
                treeNode.nodeType = nodeTypeTemp;
                treeNode.children = [
                    { name: 'Child' + count, nodeId: (count++ + ''), parentNodeId: treeNode.nodeId, nodeType: 'GROUP', children: [], canDeploy: true, privilege: 7 },
                    { name: 'Child' + count, nodeId: (count++ + ''), parentNodeId: treeNode.nodeId, nodeType: 'GROUP', children: [], canDeploy: false, privilege: 7 },
                ];
                resolve();
            }, 2000);
        });
    };

    handleTitleClick = (treeNode) => ({key, domEvent}) => {
        // console.log(key);
        addSubmenuSelected(domEvent);
        this.setState({
            selectedKeys: []
        });
        this.handleAsyncLoadData(treeNode);
    };

    handleSelect = ({ item, key, selectedKeys }) => {
                 /* Only menuItem can be selected, the function will be executed when selected */
        console.log(item, key, selectedKeys);
        removeSubmenuSelected();
        this.setState({
            selectedKeys
        });
    };

    loopAdd = (node, data) => {
        data.forEach((item) => {
            if (node.parentNodeId === item.nodeId) {
                console.log(item);
                item.canDeploy = true;
                item.children.push(node);
                /* this.setState({
                    openKeys: this.state.openKeys.concat(item.nodeId)
                }); */
                return 1;
            } else {
                if (item.children.length > 0) {
                    return this.loopAdd(node, item.children);
                }
            }
        });
    };

    loopEdit = (node, data) => {
        data.forEach((item) => {
            if (node.nodeId === item.nodeId) {
                Object.keys(node).forEach(key => {
                    if (key !== 'children') {
                        item[key] = node[key];
                    }
                });
                return 1;
            } else {
                if (item.children.length > 0) {
                    return this.loopEdit(node, item.children);
                }
            }
        });
    };

    loopDelete = (parentId, nodeId, data) => {
        console.log(parentId, nodeId);
        data.forEach((item) => {
            if (parentId === item.nodeId) {
                let index = 0;
                item.children.forEach((child, key) => {
                    if (child.nodeId === nodeId) {
                        index = key;
                    }
                });
                // this.props.rootStore.accountStore.updateSelectedNode(item);
                item.children.splice(index, 1);
                return 1;
            } else {
                if (item.children.length > 0) {
                    return this.loopDelete(parentId, nodeId, item.children);
                }
            }
        });
    };

         /* Right click processing */
    handleMenuItemClick = (e, data) => {
        e.preventDefault();
        let {treeData} = this.props.rootStore.treeStore;
        console.log(data);
        switch (data.status) {
            case 0:
                                 /* Add node */
                this.loopAdd({
                    name: 'Child' + count,
                    nodeId: (count++ + ''),
                    parentNodeId: data.nodeId, 
                    nodeType: 'GROUP', 
                    children: [],
                    privilege: '1', 
                    canDeploy: true
                }, treeData);
                break;
            case 1: 
                this.loopEdit({
                    name: 'edit' + count,
                    nodeId: data.nodeId,
                    parentNodeId: data.nodeId, 
                    nodeType: 'GROUP', 
                    children: [],
                    privilege: '1', 
                    canDeploy: true
                }, treeData);
                break;
            case 2:
                this.loopDelete('2', data.nodeId, treeData);
                break;
            default:
                return;
        }
                 // After the right key is processed, reset the right-click node data
        this.setState({
            rightClickNode: null
        });
    };

    handleRightClick = (event) => {
        // console.log(event.target);
        let dataNode = getDatasetNode(event.target);
        this.setState({
            rightClickNode: dataNode.dataset
        });
        // console.log(dataNode.dataset);
    };

    render() {
        let { treeData } = this.props.rootStore.treeStore;
        let {selectedKeys, searchValue, openKeys, rightClickNode} = this.state;
                 /* Flattening of nodes */
        dataList = [];
        generateList(treeData);
        return (
            <Layout style={{ minHeight: '100vh' }}>
    <Header className="header"></Header>
    <Layout className="site-layout-background" >
        <Sider className="site-layout-background" width={250}>
                <Input style={{marginBottom: '50px'}} placeholder="search value" value={searchValue} onChange={this.handleChange} />
                <ContextMenuTrigger id="context-menu" holdToDisplay={1000}>
                    <Menu
                        onClick={this.handleClick}
                        style={{ width: "100%" }}
                        onOpenChange={this.handleOpenChange}
                        mode="inline"
                        theme="dark"
                        openKeys={openKeys}
                        selectedKeys={selectedKeys}
                        onSelect={this.handleSelect}
                    >
                        {this.loop(treeData)}
                    </Menu>
                    </ContextMenuTrigger>
                    </Sider>
                    <Content style={{ padding: '0 24px' }}>{varForm}</Content>
                    </Layout>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Shayan Majumder</Footer>
                    </Layout>
                
            
        );
    }
}

export default Tree;