import { useContext } from 'react';
import BrandContext from './BrandContext';

export enum BrandActionKind {
  SET = 'SET',
}

export const useBrandValue = () => {
  const brandAndDispatch = useContext(BrandContext);
  return brandAndDispatch.state;
};

export const useBrandDispatch = () => {
  const brandAndDispatch = useContext(BrandContext);
  return brandAndDispatch.dispatch;
};
