import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Message, Button } from 'semantic-ui-react';

export class Dialpad extends Component {
    static proptTypes = {
        sdk: PropTypes.object,
        regisStatus: PropTypes.string,
        fields: PropTypes.object,
        onSubmit: PropTypes.func.isRequired
    }

    state =  {
        fields: {
            username: '',
            password: '',
            domain: '',
            url: '',
        },
        fieldErrors: {}
    }

    onSubmit = evt => {
    }

    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({
            fields: fields
        })
    }

    validate = () => {
        return false
    }


    render() {
        let status = this.props.regisStatus;
        return (
            <div>
                <p>OnCall Login Settings</p>
                <form onSubmit={this.onSubmit}>
                    <Input
                        error={this.validate()?true:false}
                        type='text'
                        placeholder='Account Name'
                        name='username'
                        value={this.state.fields.username}
                        onChange={this.onInputChange}
                    />
                    <span type={{color: 'red'}}>{this.state.fieldErrors.username}</span>
                    <br/>
                    <Input
                        error={this.validate()?true:false}
                        type='text'
                        placeholder='Password'
                        name='password'
                        value={this.state.fields.password}
                        onChange={this.onInputChange}
                    />
                    <span type={{color: 'red'}}>{this.state.fieldErrors.password}</span>
                    <br/>
                    <Input 
                        error={this.validate()?true:false}
                        type='text'
                        placeholder='Domain'
                        name='domain'
                        value={this.state.fields.domain}
                        onChange={this.onInputChange}
                    />
                    <span type={{color: 'red'}}>{this.state.fieldErrors.domain}</span>
                    <br/>
                    <Input
                        error={this.validate()?true:false}
                        type='text'
                        placeholder='URL'
                        name='url'
                        value={this.state.fields.url}
                        onChange={this.onInputChange}
                    />
                    <span type={{color: 'red'}}>{this.state.fieldErrors.url}</span>
                </form>
                <br/>
                <Button type="submit"  disabled={this.validate()}>REGISTER</Button>
                
                {
                    {
                        CONNECTED: (
                            <Message>
                                <Message.Header>Connection Status</Message.Header>
                                <p>
                                    CONNECTED 
                                </p>
                            </Message>),
                        CONNECTING: (
                            <Message>
                                <Message.Header>Connection Status</Message.Header>
                                <p>
                                    CONNECTING
                                </p>
                            </Message>),
                        DISCONNECTED: (
                            <Message>
                                <Message.Header>Connection Status</Message.Header>
                                <p>
                                    UNCONNECTED
                                </p>
                            </Message>)
                    }[status]
                }

            </div>
        )
    }
}

export default Dialpad
