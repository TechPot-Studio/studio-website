import React from 'react';
export default class Box extends React.Component {
    render() {
        return (
            <div
                style={
                    {
                        ...(this.props.width ? {
                             width: this.props.width
                        } : {}),
                        ...(this.props.height ? {
                             height: this.props.height
                        } : {}),
                        ...((this.props.alignItems && this.props.justifyContent) ? {
                            display: 'flex',
                            justifyContent: this.props.justifyContent,
                            alignItems: this.props.alignItems
                        } : {})
                    }
                }
            >
                {this.props.children}
            </div>
        )
    }
}
