import { ReactNode } from 'react';

export const PageTransition = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <div className="animate-fade-up">{children}</div>;
};
