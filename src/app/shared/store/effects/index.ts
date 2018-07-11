import { ApparelEffect } from './apparel.shop.effect';
import { CartEffect } from './apparel.cart.effect';
import { UserEffect } from './user.auth.effect';

export * from './apparel.shop.effect';
export * from './apparel.cart.effect';
export * from './user.auth.effect';

export const shopEffects: any[] = [ApparelEffect];
export const cartEffects: any[] = [CartEffect];
export const authEffects: any[] = [UserEffect];
