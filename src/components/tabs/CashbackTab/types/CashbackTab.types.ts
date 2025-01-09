import { CashbackCardData } from './CashbackCard/types/CashbackCardData.type';

export type cardInfo = Omit<CashbackCardData, 'color'>;
