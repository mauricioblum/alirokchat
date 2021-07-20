import React from 'react';
import {
  FiDollarSign,
  FiFilePlus,
  FiShare2,
  FiBarChart,
  FiTrash2,
  FiCircle,
} from 'react-icons/fi';
import { Container, IconContainer } from './styles';

export interface TrackingIcon {
  id: string;
  name: string;
}

interface TrackingStatusIconsProps {
  icons: TrackingIcon[];
}

const TrackingIconComponent = ({ name }: { name: string }) => {
  const iconSize = 18;
  const iconColor = '777#fff';

  switch (name) {
    case 'dollar': {
      return <FiDollarSign size={iconSize} color={iconColor} />;
    }
    case 'file': {
      return <FiFilePlus size={iconSize} color={iconColor} />;
    }
    case 'share': {
      return <FiShare2 size={iconSize} color={iconColor} />;
    }
    case 'barChart': {
      return <FiBarChart size={iconSize} color={iconColor} />;
    }
    case 'trash': {
      return <FiTrash2 size={iconSize} color={iconColor} />;
    }
    default: {
      return <FiCircle size={iconSize} color={iconColor} />;
    }
  }
};

const TrackingStatusIcons: React.FC<TrackingStatusIconsProps> = ({ icons }) => {
  return (
    <Container>
      {icons.map((icon) => (
        <IconContainer key={icon.id}>
          <TrackingIconComponent name={icon.name} />
        </IconContainer>
      ))}
    </Container>
  );
};

export default TrackingStatusIcons;
