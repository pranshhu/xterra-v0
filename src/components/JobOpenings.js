import React from 'react';

function JobOpenings() {
  const email = 'careers@xterrarobotics.com';

  return (
    <div className="container mx-auto p-4 my-8 sm:my-16 md:my-24 lg:my-32">
      <div className="font-poppins text-3xl sm:text-4xl md:text-5xl text-center max-w-5xl mx-auto">
        Don't see any job openings
        <br className="hidden sm:inline" /> 
        that might fit you?
        <br className="hidden sm:inline" />
        {' '}Email us at{' '}
        <br className="hidden sm:inline" />
        <a 
          href={`mailto:${email}`}
          className="text-[#4E148C] hover:underline cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          {email}
        </a>
      </div>
    </div>
  );
}

export default JobOpenings;