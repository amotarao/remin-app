import React from 'react';

export interface EditItemProps {
  className?: string;
}

export const EditItem: React.FC<EditItemProps> = ({ className }) => {
  return <p className={className}>EditItem</p>;
};
