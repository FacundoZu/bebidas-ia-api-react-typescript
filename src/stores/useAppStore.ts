import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { FavoritesSliceType, createFavouriteSlice } from './favouritesSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'
import { createAISlice, AISlice } from './aiSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavouriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))