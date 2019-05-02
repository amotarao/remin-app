import React from 'react';

export interface CallbackProps {
  className?: string;
}

export const Callback: React.FC<CallbackProps> = ({ className }) => {
  return <p className={className}>ログイン中</p>;
};
