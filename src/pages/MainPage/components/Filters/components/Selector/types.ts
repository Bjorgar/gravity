import { Dispatch, SetStateAction } from 'react';

import { FilterData } from '../../types';

export interface SelectorProps {
  setFilterData: Dispatch<SetStateAction<FilterData>>;
}

export interface IsActiveValue {
  isActive: boolean;
}
