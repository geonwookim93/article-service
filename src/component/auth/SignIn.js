import React, {Component, Fragment} from 'react'
import {Button, Icon } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import styled from 'styled-components'
import { bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as authActions from '../../module/auth/actions'


const StyledButton = styled(Button)`
    &&&{
        margin: 8px 0;
    }
`

class SignIn extends Component{

    goToEmailLoginPage = e =>{
        this.props.history.push('/sign-in/email')
    }

    onFacebookLogin = e =>{
        this.props.authActions.signInWithFacebook();
    }
    onGoogleLogin = e =>{
        this.props.authActions.signInWithGoogle();
    }

    render(){
        const {isFacebookLoading, isGoogleLoading} = this.props;

        return(
            <Fragment>
                <StyledButton   
                    fluid
                    onClick={this.goToEmailLoginPage}>
                    <Icon name="mail" />이메일로 시작하기
                </StyledButton>
                <StyledButton
                    fluid
                    loading={isFacebookLoading}
                    color="facebook"
                    onClick={this.onFacebookLogin}>
                    <Icon name="facebook" />페이스북으로 시작하기
                </StyledButton>
                <StyledButton
                    fluid
                    loading={isGoogleLoading}
                    color="google plus"
                    onClick={this.onGoogleLogin}>
                    <Icon name="google plus" />구글로 시작하기
                </StyledButton>
                
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isFacebookLoading: state.auth.signInWithFacebook.isLoading,
        isGoogleLoading: state.auth.signInWithGoogle.isLoading,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        authActions: bindActionCreators(authActions,dispatch),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SignIn));