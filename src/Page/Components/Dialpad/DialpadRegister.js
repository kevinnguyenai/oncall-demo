/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { 
    Input, 
    Button, 
    Label, 
    Icon 
} from 'semantic-ui-react';

export class DialpadRegister extends Component {
    static propTypes = {
        sdk: PropTypes.object,
        error: PropTypes.string,
        regisErrors: PropTypes.object,
        regisStatus: PropTypes.string,
        rstatus: PropTypes.string.isRequired,
        account: PropTypes.object.isRequired,
        onSubmit: PropTypes.func.isRequired,
        onInputUpdate: PropTypes.func.isRequired
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
        this.props.onSubmit(account, this.props.rstatus);
    }

    onInputChange = (evt) => {
        const fields = this.state.fields;
        fields[evt.target.name] = evt.target.value;
        this.setState({
            fields: fields
        })
        this.props.onInputUpdate();
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
                    <div>
                    <Input
                        error={this.validate()?true:false}
                        type='text'
                        placeholder='Account Name'
                        name='username'
                        value={this.state.fields.username}
                        onChange={this.onInputChange}
                    />
                    <span style={{color: 'red'}}>{this.props.regisErrors.username}</span>
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
                    <span style={{color: 'red'}}>{this.props.regisErrors.password}</span>
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
                    <span style={{color: 'red'}}>{this.state.fieldErrors.domain}</span>
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
                    <span style={{color: 'red'}}>{this.state.fieldErrors.url}</span>
                    </div>
                
                <br/>
                <Button type="submit"  disabled={this.validate()}>{this.props.rstatus}</Button>
                
                {
                    {
                        CONNECTED: (
                            <Label>
                                <Icon name='phone' color='green'/><span >{this.props.regisStatus}</span>
                            </Label>
                            ),
                        CONNECTING: (
                            <Label>
                                <Icon name='phone' color='yellow'/><span >{this.props.regisStatus}</span>
                            </Label>
                            ),
                        UNCONNECTING: (
                            <Label>
                                <Icon name='phone' color='yellow'/><span >{this.props.regisStatus}</span>
                            </Label>                            
                        ),
                        UNCONNECT: (
                            <Label>
                                <Icon name='phone' color='red'/><span >{this.props.regisStatus}</span>
                            </Label>
                            )
                    }[status]
                }
                </form>
                <br/>
            </div>
        )
    }
}

export default DialpadRegister
