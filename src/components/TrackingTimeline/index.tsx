import React from 'react';

import { Container } from './styles';

export interface TimelineEvent {
  id: string;
  avatar: string;
  name: string;
  date: Date;
}

interface TrackingTimelineProps {
  events: TimelineEvent[];
}

const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ events }) => {
  return (
    <Container>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <img width="20" height="20" src={event.avatar} alt="Avatar" />
            <div className="info">
              <p className="eventName">{event.name}</p>
              <p className="eventDate">
                {event.date.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default TrackingTimeline;
