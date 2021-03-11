import React from 'react';
import {Card, Button, Container} from 'react-bootstrap'
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import leagueNameCss from './LeagueNames.css'

const LeagueNames = (props) => {
    
    const {strLeague, strSport, idLeague} = props.leagueName;
    const history = useHistory();
    const showLeagueInformation = idLeague => {
        const url = `league/${idLeague}`;
        history.push(url);
    }
    return (
        <div className="col-md-4 ">
            
            <Container className ="fluid league-box">
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        {strSport}
                    </Card.Text>
                    <Button onClick={() => showLeagueInformation(idLeague)} variant="primary" ><strong>View Information  </strong><FontAwesomeIcon icon={faLongArrowAltRight} /></Button>
                </Card.Body>
            </Card>
            </Container>

        </div>
    );
};

export default LeagueNames;