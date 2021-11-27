/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { 
    Input, 
    Message, 
    Button, 
    Label, 
    Icon 
} from 'semantic-ui-react';

export class Dialpad extends Component {
    static propTypes = {
        sdk: PropTypes.object,
        regisStatus: PropTypes.string,
        account: PropTypes.object.isRequired,
        onSubmit: PropTypes.func.isRequired
    };

    state =  {
        fields: this.props.account || {
            username: '',
            password: '',
            domain: '',
            url: '',
        },
        fieldErrors: {}
    }

    onSubmit = evt => {
        const account = this.state.fields
        const sdk = this.props.sdk
        evt.preventDefault();
        if(this.validate()) return;
        this.props.onSubmit(account)
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
        if(status === 'UNCONNECT') status = 'UNCONNECT';

        return (
            <div>
                <p>OnCall Login Settings</p>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <Input
                        error={this.validate()?true:false}
                        type='text'
                        placeholder='Account Name'
                        name='username'
                        value={this.state.fields.username}
                        onChange={this.onInputChange}
                    />
                    <span type={{color: 'red'}}>{this.state.fieldErrors.username}</span>
                    </div>
                    <br/>
                    <div>
                    <Input
                        error={this.validate()?true:false}
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={this.state.fields.password}
                        onChange={this.onInputChange}
                    />
                    <span type={{color: 'red'}}>{this.state.fieldErrors.password}</span>
                    </div>
                    <br/>
                    <div>
                    <Input 
                        error={this.validate()?true:false}
                        type='text'
                        list='domains'
                        placeholder='Domain'
                        name='domain'
                        value={this.state.fields.domain}
                        onChange={this.onInputChange}
                    />
                    <datalist id='domains'>
                        <option value='sdc.dev'></option>
                    </datalist>
                    <span type={{color: 'red'}}>{this.state.fieldErrors.domain}</span>
                    </div>
                    <br/>
                    <div>
                    <Input
                        error={this.validate()?true:false}
                        type='text'
                        placeholder='URL'
                        name='url'
                        value={this.state.fields.url}
                        onChange={this.onInputChange}
                    />
                    <span type={{color: 'red'}}>{this.state.fieldErrors.url}</span>
                    </div>
                
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
                </form>
                <br/>
                <div>
                    <Label>
                        <Icon name='mail'/><span type={{color: 'blue'}}>{this.props.regisStatus}</span>
                    </Label>
                </div>
            </div>
        )
    }
}

export default Dialpad
