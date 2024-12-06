import packService from "../../services/packs.services";

import { useAuth } from "../../Providers/AuthProvider";
import { usePoints } from "../../Providers/PointsProvider";
import { useState } from "react";
import { motion } from "framer-motion";
import WatchCard from "../watchs";
import styled from "styled-components";
import userService from "../../services/users.services";

const OpenPack = () => {
  const { userId } = useAuth();
  const { updatePoints } = usePoints();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [watches, setWatches] = useState([]);
  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const images = [
    { url: "https://res.cloudinary.com/dhqmsb9vm/image/upload/v1731064846/luxury_box_with_premium_with_20_watches_inside_b9iiv7wnzarbm4v34b83_1_ou1s9w.png", type: "daily" },
    { url: "https://res.cloudinary.com/dhqmsb9vm/image/upload/v1731064977/luxury_box_with_premium_with_five_watches_inside_4a6hbhj3mm25b6frdyag_2_rpfymr.png", type: "basic", cost: 3000 },
    { url: "https://res.cloudinary.com/dhqmsb9vm/image/upload/v1731064851/premium_luxury_chest_with_watches_inside_n0oa037valk4420dvw9n_0_koxkhp.png", type: "medium", cost: 7000 },
    { url: "https://res.cloudinary.com/dhqmsb9vm/image/upload/v1731064922/luxury_box_with_premium_withone_watch_inside_smb3pon4r9xhtm7xe7j7_1_pimlo5.png", type: "premium", cost: 14000 },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleBuyPack = async () => {
    const packType = images[currentIndex].type;
    const packCost = images[currentIndex].cost || 0;

    try {
      let response;

      switch (packType) {
        case "daily":
          response = await packService.getDailyPack();
          break;
        case "basic":
          response = await packService.getBasicPack();
          break;
        case "medium":
          response = await packService.getMediumPack();
          break;
        case "premium":
          response = await packService.getPremiumPack();
          break;
        default:
          throw new Error("Tipo de paquete inválido");
      }


      const receivedWatches = response.data.newWatches || [];
      setMessage(response.data.message || "Mensaje no disponible");
      setIsMessageVisible(true);
      setTimeout(() => setIsMessageVisible(false), 2000);
      setWatches(receivedWatches);
      setIsModalOpen(true);


      const userData = await userService.getUserById(userId); updatePoints(userData.data.points);

    } catch (error) {
      if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error al abrir el paquete");
      }
      setIsMessageVisible(true);
      setTimeout(() => setIsMessageVisible(false), 2000);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <OpenPackMain>
      <div className="carouselDiv">
        <img src={images[currentIndex].url} alt="Producto" />
      </div>
      <div className="buttonDiv">
        <button className="buttons" onClick={handleBuyPack}>
          {images[currentIndex].type === "daily" ? "Abrir Paquete Diario" : `${images[currentIndex].cost} puntos`}
        </button>
        <button className="buttons" onClick={handleNext}>Siguiente</button>
      </div>

      {isMessageVisible && <p className="pmessage">{message}</p>}

      {isModalOpen && (
        <BlurOverlay onClick={closeModal}>
          <CardsContainer onClick={(e) => e.stopPropagation()}>
            <h2>Relojes que has obtenido:</h2>
            <div className="watchesContainer">
              {watches.map((watch, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                  key={watch._id}
                >
                  <WatchCard watch={watch} />
                </motion.div>
              ))}
            </div>
          </CardsContainer>
        </BlurOverlay>
      )}
    </OpenPackMain>
  );
};

export default OpenPack;


const OpenPackMain = styled.main`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .carouselDiv {
    position: relative;
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  
  .buttonDiv {
    display: flex;
    justify-content: center;
    gap: 10px;

    .buttons {
      background-color: #333;
      color: white;
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
      border-radius: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #444;
      }
    }
  }
`;

const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .watchesContainer {
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-top: 20px;
  }

  .pmessage {
    margin-top: 15px;
    color: white;
    font-size: 16px;
  }
`