import React from "react"
import { useHistory } from 'react-router-dom';
import Template from "../../components/Template/Template"
import Button from "../../components/Button/Button"
import "./Welcome.css"

const Welcome = () => {
    const history = useHistory();
    return (
        <Template>
            <div class="welcome-page">
                <h1>Welcome</h1>
                <h2>We believe that everyone is <span>creative</span> </h2>
                <Button
                    primary
                    onClick={() => history.push('/personal')}
                >
                    REGISTER FOR FREE
                </Button>
            </div>
        </Template>
    )
}

export default Welcome