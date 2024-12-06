import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import watchService from '../../services/watch.services';
import { useAuth } from '../../Providers/AuthProvider';
import salesService from '../../services/sales.services';


const SellModal = ({ closeModal }) => {
    const [myWatches, setMyWatches] = useState([]);
    const [selectedWatch, setSelectedWatch] = useState('');
    const [points, setPoints] = useState('');
    const { userId } = useAuth();

    useEffect(() => {
        const fetchWatches = async () => {
            if (userId) {
                try {
                    const response = await watchService.getMyWatchsById(userId);

                    setMyWatches(response.data || []);
                } catch (error) {
                    console.error("Error fetching watches:", error);
                }
            }
        };

        fetchWatches();
    }, [userId]);

    const handleSubmit = () => {
        salesService.sellWatch(userId, selectedWatch, points)
            .then(response => {

                closeModal();
            })
            .catch(error => console.error('Error selling watch:', error));
    };

    return (
        <ModalContainer>
            <ModalContent>
                <h2>Vender Reloj</h2>
                <select value={selectedWatch} onChange={e => setSelectedWatch(e.target.value)}>
                    <option value="" disabled>Selecciona un reloj</option>
                    {myWatches.length > 0 ? (
                        myWatches.map(watch => (
                            <option key={watch._id} value={watch._id}>{watch.brand} - {watch.model}</option>
                        ))
                    ) : (
                        <option value="" disabled>No tienes relojes disponibles.</option>
                    )}
                </select>
                <input
                    type="number"
                    placeholder="Puntos"
                    value={points}
                    onChange={e => setPoints(e.target.value)}
                />
                <button onClick={handleSubmit}>Vender</button>
                <button onClick={closeModal}>Cancelar</button>
            </ModalContent>
        </ModalContainer>
    );
};

export default SellModal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  select, input {
    display: block;
    margin: 10px auto;
    padding: 10px;
    width: 80%;
  }

  button {
    margin: 10px 5px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:first-of-type {
    background-color: #ff4500;
    color: white;
  }

  button:last-of-type {
    background-color: #ff4500;
  }
`;
