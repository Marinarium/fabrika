import React, {Component} from 'react'


class Input extends Component {
    static defaultProps = {
        type: 'text'
    };

    render() {
        return (
            <React.Fragment>
                <div className="form__input">
                    <div className="label-input">
                        {this.props.label}
                    </div>
                    <input onInput={this.maxLengthCheck} type={this.props.type} className={this.props.className}
                           name={this.props.name} value={this.props.value} onChange={this.props.onChange}/>
                    <div className="label-error">
                        {!this.props.isValid && this.props.validationMessageLength && this.props.validationMessageText}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Input