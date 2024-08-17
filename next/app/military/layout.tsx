import React from 'react';
import { ReactNode } from 'react';
import Header from '../components/Header'; // Adjust the import path as necessary
import Footer from '../components/Footer'; // Adjust the import path as necessary

interface MilitaryLayoutProps {
  children: ReactNode;
}

const MilitaryLayout: React.FC<MilitaryLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MilitaryLayout;
