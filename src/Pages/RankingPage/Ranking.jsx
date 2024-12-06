import React, { useState, useEffect } from 'react';

import userService from '../../services/users.services';
import styled from 'styled-components';


const Ranking = () => {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        fetchRanking();
        const interval = setInterval(fetchRanking, 30000);
        return () => clearInterval(interval);
    }, []);

    const fetchRanking = async () => {
        try {
            const response = await userService.getUserByPoints();
            setRanking(response.data);
        } catch (error) {
            console.error("Error fetching ranking data:", error);
        }
    };

    return (
        <RankingMain>
            <h1>Top 10 Users Ranking</h1>
            <table >
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>Username</th>
                        <th>Points</th>
                        <th>Watches</th>
                    </tr>
                </thead>
                <tbody>
                    {ranking.map(user => (
                        <tr key={user.position}>
                            <td>{user.position}</td>
                            <td>{user.username}</td>
                            <td>{user.points}</td>
                            <td>{user.watchesCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </RankingMain>
    );
};

export default Ranking;


const RankingMain = styled.main`
     padding: 20px;
     text-align: center;
   
    color: white;
    
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
     td {
        padding: 10px;
        border: 1px solid #ddd;
        text-align:center ;
    }
   
    



`


