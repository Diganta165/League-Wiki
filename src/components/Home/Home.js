import React, { useEffect, useState } from 'react';
import LeagueNames from '../LeagueNames/LeagueNames';
import home from './Home.css'

const Home = () => {
    const [leagueNames,setLeagueNames] = useState([]);
    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueNames(data.leagues))
        
    },[])
    return (
        <div>
            <header className="w-100">
        <section className='hero-header-text'>
            <h1>Leaguepedia</h1>
            
        </section>
        </header>
            
            <div className="container">
                <div className="row">
                    {
                    leagueNames && leagueNames.map(leagueName => <LeagueNames leagueName={leagueName}></LeagueNames>)
                    }
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;