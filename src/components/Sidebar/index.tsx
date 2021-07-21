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
      <div>
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
      </div>
      <div className="profile">
        <img
          alt="Avatar"
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Blank&hairColor=Red&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Twinkle&skinColor=Yellow"
        />
      </div>
    </Container>
  );
};

export default Sidebar;
