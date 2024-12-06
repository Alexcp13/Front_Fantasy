import React, { useState, useEffect } from 'react';
import watchService from '../../services/watch.services';
import { useAuth } from '../../Providers/AuthProvider';
import styled from 'styled-components';
import WatchCard from '../../Components/watchs';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';

const MyWatchsPage = () => {
    const [watches, setWatches] = useState([]);
    const { userId } = useAuth();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWatches = async () => {
            setLoading(true);
            if (userId) {
                try {
                    const response = await watchService.getMyWatchsById(userId);
                    setWatches(response.data);
                } catch (error) {
                    console.error("Error fetching watches:", error);
                }
            }
            setTimeout(() => setLoading(false), 400);
        };

        fetchWatches();
    }, [userId]);

    return (
        <MyWatchsMain>
            <LoadingSpinner loading={loading} />
            <CardsDiv>
                {!loading && watches.length > 0 ? (
                    watches.map((watch) => (
                        <WatchCard key={watch._id} watch={watch} />
                    ))
                ) : (
                    !loading && <p>Abre cofres para conseguir tus primeros relojes.</p>
                )}
            </CardsDiv>
        </MyWatchsMain>
    );
};

export default MyWatchsPage;

const MyWatchsMain = styled.main`
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;
