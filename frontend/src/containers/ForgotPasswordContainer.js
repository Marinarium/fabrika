import React, {Component} from 'react'


class ForgotPasswordContainer extends Component {

    render() {
        return (
            <React.Fragment>
                <main className="main">
                    <form className="form" action="/">
                        <h1 className="form__title">Password recovery</h1>
                        <div className="form__desc">
                            <p className="form__p">Please, enter your email and we will send you a link to reset it.</p>
                        </div>
                        <div className="form__input-wrap">
                            <label htmlFor="mail" className="form__label">Email</label>
                            <input id="mail" type="email" className="form__input" required placeholder="Enter email"/>
                        </div>
                        <button className="form__btn" type="submit">Reset password</button>
                    </form>
                </main>
            </React.Fragment>
        )
    }
}

export default ForgotPasswordContainer;