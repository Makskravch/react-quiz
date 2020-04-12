import React, { Component } from 'react';
import classes from './Auth.module.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'

export default class Auth extends Component {

    loginHandler = () => {
        
    }

    registerHandler = () => {

    }

    sumbitHandler = event => {
        event.preventDefault()
    }
    
    render() {
        return(
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизація</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        
                        <Input 
                            label="Email"
                        />
                        
                        <Input 
                            label="Password"
                            errorMessage={'TEST'}
                        />

                        <Button 
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Вхід
                        </Button>
                        <Button 
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Реєстрація
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}