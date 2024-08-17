import React from 'react';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    // to buttons with links the /military and /tech
    <div className="flex flex-col p-5 gap-3">
      <Link href={'/military'} className="text-center border">
        Military
      </Link>
      <Link href={'/tech'} className="text-center border">
        Tech
      </Link>
    </div>
  );
};

export default LandingPage;
