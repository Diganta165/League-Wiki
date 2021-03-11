import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Media } from 'react-bootstrap';
import {useParams} from "react-router";
import LeagueDetails from './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faMars, faPenFancy, faRunning } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';


const LeagueDetail = () => {
    const {idLeague} = useParams();
    const [leagueDetails,setLeagueDetails] = useState({});
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetails(data.leagues[0]) )
        
    },[])
    
    return (
        
        <div className="container">
            <section className= "banar-and-logo w-100">
            
        <section className='hero-header-text'>
            <img height={200}  src={leagueDetails.strBadge} alt=""/>
            
        </section>
        
            </section>

            <div className="information-box "  >
            <Media className="col-md-12 ">
          <Media.Body>
            <h1>{leagueDetails.strLeague}</h1>
            <p><FontAwesomeIcon icon={faPenFancy} /> Founded in {leagueDetails.intFormedYear}</p>
                 <p><FontAwesomeIcon icon={faFlag} /><strong> Country:</strong> {leagueDetails.strCountry}</p>
                 <p><FontAwesomeIcon icon={faRunning} /><strong> Sport Type:</strong> {leagueDetails.strSport}</p>
                 <p><FontAwesomeIcon icon={faMars} /><strong> Gender:</strong> {leagueDetails.strGender}</p>
          </Media.Body>
          {
              leagueDetails.strGender === 'Male'
              ?<img className="img-fluid"
              width={600}
              height={300}
              className="ml-4"
              src={leagueDetails.strFanart4}
              alt="Generic placeholder"
              />
              :<img className="img-fluid"
              width={600}
              height={300}
              className="ml-3"
              src={leagueDetails.strFanart4}
              alt="Generic placeholder"
              />
          }
          
        </Media>
            </div>
            <p>{leagueDetails.strDescriptionEN}</p>

            <footer className="footer">
            <a href={`https://${leagueDetails.strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href={`https://${leagueDetails.strTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href={`https://${leagueDetails.strYoutube}`}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
            </footer>
                

            
            
        </div>
        


    );
};

export default LeagueDetail;