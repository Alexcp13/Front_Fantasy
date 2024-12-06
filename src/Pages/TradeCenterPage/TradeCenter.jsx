import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import salesService from '../../services/sales.services';
import SellModal from '../../Components/SellModal/SellModal';
import { useAuth } from '../../Providers/AuthProvider';

const TradeCenterPage = () => {
    const [sales, setSales] = useState([]);
    const [showSellModal, setShowSellModal] = useState(false);
    const { userId } = useAuth();

    useEffect(() => {
        salesService.getWatchesForSale()
            .then(response => setSales(response.data.sales))
            .catch(error => console.error('Error fetching sales:', error));
    }, []);

    const handleBuy = (sale) => {
        salesService.buyWatch(userId, sale._id)
            .then(response => {
                alert(`Has comprado el reloj ${response.data.watch.model} exitosamente.`);

                setSales(prevSales => prevSales.filter(s => s._id !== sale._id));
            })
            .catch(error => console.error('Error buying watch:', error));
    };

    return (
        <TradeCenterMain>
            <h1>MarketPlace de Relojes</h1>
            <button onClick={() => setShowSellModal(true)}>Vender Reloj</button>
            <MarketplaceTable>
                <thead>
                    <tr>
                        <th>Vendedor</th>
                        <th>Imagen del Reloj</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Puntos</th>
                        <th>Comprar</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale._id}>
                            <td>{sale.seller.username}</td>
                            <td><img src={sale.watch.watchImg} alt="Reloj" width="50" /></td>
                            <td>{sale.watch.brand}</td>
                            <td>{sale.watch.model}</td>
                            <td>{sale.points}</td>
                            <td>
                                {sale.seller._id !== userId && (
                                    <BuyButton onClick={() => handleBuy(sale)}>Comprar</BuyButton>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </MarketplaceTable>
            {showSellModal && <SellModal closeModal={() => setShowSellModal(false)} />}
        </TradeCenterMain>
    );
};

export default TradeCenterPage;

const TradeCenterMain = styled.main`
  padding: 20px;
  color: white;
  text-align: center;

  button {
    padding: 10px 20px;
    background-color: #ff4500;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #e63e00;
    }
  }
`;

const MarketplaceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
  }
`;

const BuyButton = styled.button`
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
