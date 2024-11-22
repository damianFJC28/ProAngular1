import { Routes } from '@angular/router';


export const routes: Routes = [
    
    {
        path:'card',
        loadComponent: () => import('./components/card/card.component').then(m => m.CardComponent)
    },

    {
        path:'lista',
        loadComponent: () => import('./components/lista/lista.component').then(m => m.ListaComponent)
    }


];

