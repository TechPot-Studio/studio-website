import React from 'react';
export default class LinkBlank extends React.Component {
    render() {
        return (
            <a href={this.props.to} target="_blank" rel="noreferrer noopener">
                {this.props.children}
            </a>
        );
    }
}
