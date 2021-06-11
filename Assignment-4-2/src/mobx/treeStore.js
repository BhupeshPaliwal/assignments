import {observable, action} from 'mobx';

class TreeStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable treeData = [{
        name: 'parent1',
        nodeId: '1',
        nodeType: 'ROOT',
        canDeploy: true,
        privilege: '7',
        parentNodeId: null,
        children: [
            {
                name: 'parent2',
                nodeId: '2',
                nodeType: 'GROUP',
                canDeploy: true,
                parentNodeId: '1',
                privilege: '0',
                children: [
                    {
                        name: 'parent21',
                        nodeId: '3',
                        parentNodeId: '2',
                        nodeType: 'GROUP',
                        canDeploy: true,
                        privilege: '7',
                        children: [
                            {
                                name: 'leaf52',
                                nodeId: '10',
                                parentNodeId: '3',
                                nodeType: 'GROUP',
                                canDeploy: false,
                                privilege: '7',
                                children: []
                            }]
                    },
                    {
                        name: 'leaf2',
                        nodeId: '4',
                        parentNodeId: '2',
                        nodeType: 'BUSINESS',
                        canDeploy: false,
                        children: [],
                        privilege: '7'
                    },
                    {
                        name: 'parent22',
                        nodeId: '5',
                        parentNodeId: '2',
                        privilege: '7',
                        nodeType: 'TEAM',
                        canDeploy: true,
                        children: [{
                            name: 'parent221',
                            nodeId: '13',
                            parentNodeId: '5',
                            nodeType: 'GROUP',
                            canDeploy: true,
                            privilege: '7',
                            children: [{
                                name: 'leaf555',
                                nodeId: '15',
                                parentNodeId: '13',
                                nodeType: 'GROUP',
                                canDeploy: false,
                                privilege: '7',
                                children: []
                            },
                            {
                                name: 'leaf553',
                                nodeId: '16',
                                parentNodeId: '13',
                                nodeType: 'GROUP',
                                canDeploy: false,
                                privilege: '7',
                                children: []
                            },
                            {
                                name: 'leaf5554',
                                nodeId: '17',
                                parentNodeId: '13',
                                nodeType: 'GROUP',
                                canDeploy: false,
                                privilege: '7',
                                children: []
                            },
                            {
                                name: 'leaf5555',
                                nodeId: '18',
                                parentNodeId: '13',
                                nodeType: 'GROUP',
                                canDeploy: false,
                                privilege: '7',
                                children: []
                            }]
                        },
                        {
                            name: 'leaf63',
                            nodeId: '14',
                            parentNodeId: '5',
                            nodeType: 'GROUP',
                            canDeploy: false,
                            privilege: '7',
                            children: []
                        }]
                    }
                ]
            },
            {
                name: 'parent3',
                nodeId: '6',
                parentNodeId: '1',
                nodeType: 'GROUP',
                canDeploy: true,
                privilege: '7',
                children: [
                    {
                        name: 'parent31',
                        nodeId: '7',
                        parentNodeId: '6',
                        privilege: '7',
                        nodeType: 'GROUP',
                        canDeploy: true,
                        children: [
                            {
                                name: 'leaf52',
                                nodeId: '11',
                                parentNodeId: '7',
                                nodeType: 'GROUP',
                                canDeploy: false,
                                privilege: '7',
                                children: []
                            },
                            {
                                name: 'leaf53',
                                nodeId: '12',
                                parentNodeId: '7',
                                nodeType: 'GROUP',
                                canDeploy: false,
                                privilege: '7',
                                children: []
                            }]
                    },
                    {
                        name: 'leaf5',
                        nodeId: '8',
                        parentNodeId: '6',
                        nodeType: 'BUSINESS',
                        privilege: '7',
                        children: []
                    },
                    {
                        name: 'leaf6',
                        nodeId: '9',
                        parentNodeId: '6',
                        nodeType: 'TEAM',
                        privilege: '0',
                        children: []
                    }
                ]
            },
        ]
    }];

    /*Update tree, this method is not used*/
    @action updateTree(treeData) {
        this.treeData = treeData;
    }
}

export default TreeStore;