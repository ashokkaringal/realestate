import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = '7xl',
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  };
  
  const baseClasses = 'mx-auto px-4 sm:px-6 lg:px-8';
  const classes = `${baseClasses} ${maxWidthClasses[maxWidth]} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Container; 