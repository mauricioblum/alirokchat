import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h3`
  color: #3a99ff;
  margin-bottom: 24px;
`;

export const PackageContainer = styled.div`
  display: flex;
`;

export const PackageImage = styled.div`
  margin-right: 16px;
`;

export const TrackingCode = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 6px;
`;

export const PackageInfo = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ArchiveContainer = styled.div`
  margin-top: auto;
  padding: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArchiveButton = styled.button`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  min-height: 25px;

  svg {
    margin-right: 20px;
  }
`;
