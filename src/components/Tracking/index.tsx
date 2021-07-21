import React from 'react';
import { FaUps, FaFileDownload } from 'react-icons/fa';
import { Shipment } from '../../services/models';
import TrackingStatusIcons, { TrackingIcon } from '../TrackingStatusIcons';
import TrackingTimeline from '../TrackingTimeline';
import {
  Container,
  Title,
  PackageContainer,
  PackageImage,
  TrackingCode,
  PackageInfo,
  ArchiveContainer,
  ArchiveButton,
} from './styles';

const trackingIcons: TrackingIcon[] = [
  {
    id: '1',
    name: 'dollar',
  },
  {
    id: '2',
    name: 'file',
  },
  {
    id: '3',
    name: 'share',
  },
  {
    id: '4',
    name: 'barChart',
  },
  {
    id: '5',
    name: 'trash',
  },
];

interface TrackingProps {
  shipment?: Shipment;
}

const Tracking: React.FC<TrackingProps> = ({ shipment }) => {
  if (!shipment) {
    return null;
  }

  const timelineEvents = [
    {
      id: `${shipment.parcel_booking_uuid}-sender`,
      name: shipment.sender.full_name,
      avatar: `https://i.pravatar.cc/150?u=${shipment.recipient.id}`,
      date: new Date(),
    },
    {
      id: `${shipment.parcel_booking_uuid}-recipient`,
      name: shipment.recipient.full_name,
      avatar: `https://i.pravatar.cc/150?u=${shipment.sender.id}`,
      date: new Date(),
    },
  ];

  return (
    <Container>
      <Title>{shipment.status}</Title>
      <PackageContainer>
        <PackageImage>
          <FaUps size={24} />
        </PackageImage>
        <div>
          <TrackingCode>{shipment.tracking_number}</TrackingCode>
          <PackageInfo>
            {shipment.box.quantity} Box | {shipment.box.weight} gr |{' '}
            {shipment.box.description}
          </PackageInfo>
        </div>
      </PackageContainer>
      <TrackingTimeline events={timelineEvents} />
      <TrackingStatusIcons icons={trackingIcons} />
      <ArchiveContainer>
        <ArchiveButton>
          <FaFileDownload size={22} color="#748EB5" />
          Archive
        </ArchiveButton>
      </ArchiveContainer>
    </Container>
  );
};

export default Tracking;
