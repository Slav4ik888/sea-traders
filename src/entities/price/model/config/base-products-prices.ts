import { ProductId, ProductName } from 'entities/products';
import { PriceItem } from '../types';

// Base prise list
// Port Royale 3 offers two settings that affect the prices during the game. 
// The normal setting will offer higher profit margins than the advanced one.
// Port Royale 3 предлагает две настройки, влияющие на цены во время игры. 
// Обычная настройка предлагает более высокую прибыль, чем расширенная.



export interface ProductPrice {
  price: [
    PriceItem, // GameLevel = Normal    [sell, purchase]
    PriceItem  // GameLevel = Advanced
  ] 
}


export const BASE_PRODUCTS_PRISE: Record<ProductId, ProductPrice> = {
  [ProductName.Wood]: {
    price: [[57, 40], [46, 36]] 
  },
  [ProductName.Bricks]: {
    price: [[57, 40], [46, 36]] 
  },
  [ProductName.Wheat]: {
    price: [[57, 40], [46, 36]] 
  },
  [ProductName.Fruits]: {
    price: [[85,	60],	[70,	55]] 
  },
  [ProductName.Corn]: {
    price: [[85,	60],	[70,	55]] 
  },
  [ProductName.Sugar]: {
    price: [[85,	60],	[70,	55]] 
  },
  [ProductName.Hemp]: {
    price: [[85,	60],	[70,	55]] 
  },
  [ProductName.Textiles]: {
    price: [[250,	200],	[210,	165]] 
  },
  [ProductName.Metal]: {
    price: [[130,	95],	[116,	91]] 
  },
  [ProductName.Cotton]: {
    price: [[85,	60],	[70,	55]] 
  },
  [ProductName.Tools]: {
    price: [[350,	255],	[280,	220]] 
  },
  [ProductName.Dyes]: {
    price: [[170,	125],	[140,	110]] 
  },
  [ProductName.Coffee]: {
    price: [[250,	180],	[196,	154]] 
  },
  [ProductName.Cacao]: {
    price: [[250,	180],	[196,	154]] 
  },
  [ProductName.Tobacco]: {
    price: [[170,	125],	[140,	110]] 
  },
  [ProductName.Meat]: {
    price: [[500,	370],	[420,	330]] 
  },
  [ProductName.Clothing]: {
    price: [[800,	555],	[630,	495]] 
  },
  [ProductName.Ropes]: {
    price: [[260,	190],	[210,	164]] 
  },
  [ProductName.Rum]: {
    price: [[450,	335],	[373,	293]] 
  },
  [ProductName.Bread]: {
    price: [[250,	180],	[199,	156]] 
  },
}
