import React from 'react';
export default class Font extends React.Component {
    render() {
        return (
            <span
                style={{
                    fontSize: this.props.size,
                    fontWeight: this.props.weight,
                    textAlign: this.props.align
                }}
            >
                {this.props.children}
            </span>
        );
    }
}
