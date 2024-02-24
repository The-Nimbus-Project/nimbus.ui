import React from 'react';
import { SortableItem } from "./interfaces";
import { OrderBy } from "./enums";

export const generateCards = <T extends SortableItem>(
    items: T[],
    Component: React.ComponentType<{ item: T }>, // Component that accepts an item of type T
    order: OrderBy,
    useLimit: boolean,
    limitAmount: number
) => {
    const relevantData: T[] = [...items];

    switch(order)
    {
        case OrderBy.Ascending:
            relevantData.sort((a, b) => b.lastAccess.getTime() + a.lastAccess.getTime());
            break;

        case OrderBy.Descending:
            relevantData.sort((a, b) => b.lastAccess.getTime() - a.lastAccess.getTime());
            break;

        default:
            break;
    }

    if (!useLimit) {
        return relevantData.map((item: T) => {
            return <Component key={item.id} item={item} />
        })
    } else {
        return relevantData.map((item: T, index: number) => {
            if (index > limitAmount) {
                return null;
            } else {
                return <Component key={index} item={item} />
            }
        });
    }
}