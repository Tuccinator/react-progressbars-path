import React from 'react';

const ProgressBar = require('progressbar.js');

export default class Path extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.bar = new ProgressBar.Path(this.pathway, {
            easing: 'easeInOut',
            duration: 1500
        });

        this.bar.set(0);
        this.bar.animate(this.props.itemCount / 50);

        this.setState({ count: this.props.itemCount });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.props.itemCount) {
            this.setState({ count: this.props.itemCount });
            this.bar.animate(this.props.itemCount / 50);
        }
    }

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="90%" height="90%" viewBox="0 0 610 580">
                <path d="M294,3 574.246118,214.602691 474,556.983037 114,556.983037 10.753882,214.602691z" stroke="#ecedf1" strokeWidth="5" fill="none"/>
                <path ref={ pathway => this.pathway = pathway } d="M294,3 574.246118,214.602691 474,556.983037 114,556.983037 10.753882,214.602691z" stroke="#30A9DE" strokeWidth="15" fill="none"/>
            </svg>
        );
    }
}
