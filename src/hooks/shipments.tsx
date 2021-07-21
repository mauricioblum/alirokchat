import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';
import { Shipment } from '../services/models';

interface ShipmentsContextData {
  shipments: Shipment[];
  loading: boolean;
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

  useEffect(() => {
    fetchShipments();
  }, [fetchShipments]);

  return (
    <ShipmentsContext.Provider
      value={{
        shipments,
        loading,
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
