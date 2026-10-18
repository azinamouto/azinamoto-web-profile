import React from 'react';

interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'aside';
}

export const SoftSurface: React.FC<SurfaceProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`bg-[var(--surface-soft)] border border-[var(--border-subtle)] rounded-xl transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const InsetSurface: React.FC<SurfaceProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`shadow-inset rounded-xl transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const DualSurface: React.FC<SurfaceProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`shadow-dual border border-[var(--border-subtle)] rounded-xl transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const ElevatedSurface: React.FC<SurfaceProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`shadow-elevated rounded-2xl transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export const GlassSurface: React.FC<SurfaceProps> = ({
  children,
  className = '',
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={`surface-glass rounded-2xl transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
