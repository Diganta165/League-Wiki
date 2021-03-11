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
        
    },[idLeague])
    const {strBadge,intFormedYear,strCountry,strSport,strGender,strFanart4,strDescriptionEN,strFacebook,strTwitter,strYoutube} =leagueDetails;
    
    return (
    
        
        <div className="container">
            <section className= "banar-and-logo w-100">
            
        <section className='hero-header-text'>
            <img height={200}  src={strBadge} alt=""/>
            
        </section>
        
            </section>

            <div className="information-box "  >
            <Media className="col-md-12 ">
          <Media.Body>
            <h1>{leagueDetails.strLeague}</h1>
            <p><FontAwesomeIcon icon={faPenFancy} /> Founded in {intFormedYear}</p>
                 <p><FontAwesomeIcon icon={faFlag} /><strong> Country:</strong> {strCountry}</p>
                 <p><FontAwesomeIcon icon={faRunning} /><strong> Sport Type:</strong> {strSport}</p>
                 <p><FontAwesomeIcon icon={faMars} /><strong> Gender:</strong> {strGender}</p>
          </Media.Body>
          {
              leagueDetails.strGender === 'Male'
              ?<img className="img-fluid"
              width={600}
              height={300}
              className="ml-4"
              src={strFanart4}
              alt="Generic placeholder"
              />
              :<img className="img-fluid"
              width={600}
              height={300}
              className="ml-3"
              src={strFanart4}
              alt="Generic placeholder"
              />
          }
          
        </Media>
            </div>
            <p>{strDescriptionEN}</p>

            <footer className="footer">
            <a href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} /></a>
            <a href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutubeSquare} /></a>
            </footer>
                

            
            
        </div>
        


    );
};

export default LeagueDetail;