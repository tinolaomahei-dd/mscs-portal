import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

class Navigation extends Component {

    state = {
        activeItem: this.props.default,
        items: [
            { name: 'vision', text: 'Vision API', color: 'blue' },
            { name: 'face', text: 'Face API', color: 'green' },
            { name: 'emotion', text: 'Emotion API', color: 'yellow' }
        ]
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                {this.state.items.map((item, i) => <Menu.Item
                    key={item.name}
                    name={item.name}
                    active={activeItem === item.name}
                    onClick={this.handleItemClick}
                    color={item.color}>{item.text}</Menu.Item>)}

                <Menu.Item position='right'>Settings</Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;
