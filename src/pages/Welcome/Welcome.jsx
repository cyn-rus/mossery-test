import React from "react"
import { useHistory } from 'react-router-dom';

import "./Welcome.css"

import Template from "../../components/Template/Template"
import Button from "../../components/Button/Button"

const Welcome = () => {
    const history = useHistory();
    return (
        <Template>
            <div class="welcome-page">
                <h1>Welcome</h1>
                <h2>We believe that everyone is <span>creative</span> </h2>
                <Button onClick={() => history.push('/personal')}>
                    Register for Free
                </Button>
            </div>
        </Template>
    )
}

export default Welcome