import React from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import { AiOutlineBlock } from 'react-icons/ai';
import { FiBox } from 'react-icons/fi';
import { MdPeopleOutline } from 'react-icons/md';

import { Container, SidebarItem } from './styles';

const Sidebar: React.FC = () => {
  const iconProperties = {
    color: '#fff',
    size: 30,
  };

  return (
    <Container>
      <SidebarItem>
        <CgMenuLeft color={iconProperties.color} size={iconProperties.size} />
      </SidebarItem>
      <SidebarItem>
        <AiOutlineBlock
          color={iconProperties.color}
          size={iconProperties.size}
        />
      </SidebarItem>
      <SidebarItem isActive>
        <FiBox color={iconProperties.color} size={iconProperties.size} />
      </SidebarItem>
      <SidebarItem>
        <MdPeopleOutline
          color={iconProperties.color}
          size={iconProperties.size}
        />
      </SidebarItem>
    </Container>
  );
};

export default Sidebar;
