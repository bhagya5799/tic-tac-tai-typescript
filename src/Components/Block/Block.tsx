import React from 'react'
import './Block.css'

interface blockProps {
  value: string | null;
  onClick: () => void;
}

const Block: React.FC<blockProps> = ({ value, onClick }) => {
  return (
    <div className="block" onClick={onClick}>
      {value}
    </div>
  );
};

export default Block