import React from 'react';
import { FaUps, FaFileDownload } from 'react-icons/fa';
import TrackingStatusIcons, { TrackingIcon } from '../TrackingStatusIcons';
import TrackingTimeline, { TimelineEvent } from '../TrackingTimeline';
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

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    avatar: 'https://picsum.photos/id/1074/20/20',
    date: new Date(),
    name: 'Mariana Kopaczs',
  },
  {
    id: '2',
    avatar: 'https://picsum.photos/id/1073/20/20',
    date: new Date(),
    name: 'Mario Fabio Lechka',
  },
];

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

const Tracking: React.FC = () => {
  return (
    <Container>
      <Title>In transit</Title>
      <PackageContainer>
        <PackageImage>
          <FaUps size={24} />
        </PackageImage>
        <div>
          <TrackingCode>000000000000</TrackingCode>
          <PackageInfo>1 Box | 500 gr | Perfume</PackageInfo>
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
