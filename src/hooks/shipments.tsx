import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';
import { Message, Shipment } from '../services/models';

interface ShipmentsContextData {
  shipments: Shipment[];
  loading: boolean;
  postMessage: (shipmentId: number, message: Message) => Promise<void>;
}

const ShipmentsContext = createContext<ShipmentsContextData>(
  {} as ShipmentsContextData,
);

const ShipmentsProvider: React.FC = ({ children }) => {
  const [shipments, setShipments] = React.useState<Shipment[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchShipments = useCallback(async () => {
    setLoading(true);
    if (shipments.length === 0) {
      try {
        const response = await api.get('/shipments');
        setShipments(response.data);
      } catch (err) {
        console.log('Error fetching shipments', err);
      }
    }
    setLoading(false);
  }, [shipments.length]);

  const postMessage = useCallback(
    async (shipmentId: number, message: Message) => {
      setLoading(true);
      try {
        const shipment = shipments.find((s) => s.id === shipmentId);

        if (!shipment) {
          return;
        }

        const newChatData = [...shipment.chat_data];
        newChatData.push(message);

        const response = await api.patch(`/shipments/${shipmentId}`, {
          chat_data: [...newChatData],
        });
        const newShipments = [...shipments];
        const shipmentIndexToUpdate = shipments.indexOf(shipment);
        newShipments[shipmentIndexToUpdate] = response.data;
        setShipments(newShipments);
      } catch (err) {
        console.log('Error fetching shipments', err);
      }

      setLoading(false);
    },
    [shipments],
  );

  useEffect(() => {
    fetchShipments();
  }, [fetchShipments]);

  return (
    <ShipmentsContext.Provider
      value={{
        shipments,
        loading,
        postMessage,
      }}
    >
      {children}
    </ShipmentsContext.Provider>
  );
};

function useShipments(): ShipmentsContextData {
  const context = useContext(ShipmentsContext);

  if (!context) {
    throw new Error('useShipments must be used within an FilmProvider');
  }

  return context;
}

export { useShipments, ShipmentsProvider };
