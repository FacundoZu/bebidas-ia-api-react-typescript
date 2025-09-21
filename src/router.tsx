import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import GenerateAI from './views/GenerateAI'

const FavouritesPage = lazy(() => import('./views/FavouritesPage'))
const IndexPage = lazy(() => import('./views/IndexPage'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={
                        <Suspense fallback='Cargando...'>
                            <IndexPage />
                        </Suspense>
                    } index />
                    <Route path='/favoritos' element={
                        <Suspense fallback='Cargando...'>
                            <FavouritesPage />
                        </Suspense>
                    } />
                    <Route path='/generate' element={
                        <Suspense fallback='Cargando...'>
                            <GenerateAI />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
