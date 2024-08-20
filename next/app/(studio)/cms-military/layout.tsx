import React from 'react';
import { ReactNode } from 'react';

interface MilitaryLayoutProps {
  children: ReactNode;
}

const MilitaryLayout: React.FC<MilitaryLayoutProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default MilitaryLayout;
