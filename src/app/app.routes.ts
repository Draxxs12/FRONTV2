// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LayoutComponent } from './Pages/layout/layout.component';
import { authGuard } from './Guards/auth.guard';
import { rolGuard } from './Guards/rol.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./Pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'perfil',
        loadComponent: () =>
          import('./Pages/perfil/perfil.component').then(m => m.PerfilComponent),
        data: { titulo: 'Mi perfil' }
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./Pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Dashboard' }
      },
      {
        path: 'punto-de-venta',
        loadComponent: () =>
          import('./Pages/punto-venta/punto-venta.component').then(m => m.PuntoVentaComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Ventas' }
      },
      {
        path: 'historial-ventas',
        loadComponent: () =>
          import('./Pages/ventas/ventas.component').then(m => m.VentasComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Ventas' }
      },
      {
        path: 'devoluciones',
        loadComponent: () =>
          import('./Pages/devoluciones/devoluciones.component').then(m => m.DevolucionesComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Ventas' }
      },
      {
        path: 'caja',
        loadComponent: () =>
          import('./Pages/caja/caja.component').then(m => m.CajaComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Caja' }
      },
      {
        path: 'productos',
        loadComponent: () =>
          import('./Pages/productos/productos.component').then(m => m.ProductosComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Inventario' }
      },
      {
        path: 'categorias',
        loadComponent: () =>
          import('./Pages/categorias/categorias.component').then(m => m.CategoriasComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Inventario' }
      },
      {
        path: 'stock',
        loadComponent: () =>
          import('./Pages/stock/stock.component').then(m => m.StockComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Inventario' }
      },
      {
        path: 'compras',
        loadComponent: () =>
          import('./Pages/compras/compras.component').then(m => m.ComprasComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Abastecimiento' }
      },
      {
        path: 'proveedores',
        loadComponent: () =>
          import('./Pages/proveedores/proveedores.component').then(m => m.ProveedoresComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Abastecimiento' }
      },
      {
        path: 'clientes',
        loadComponent: () =>
          import('./Pages/clientes/clientes.component').then(m => m.ClientesComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Clientes' }
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./Pages/reportes/reportes.component').then(m => m.ReportesComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Reportes' }
      },
      {
        path: 'usuarios',
        loadComponent: () =>
          import('./Pages/usuarios/usuarios.component').then(m => m.UsuariosComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Administración' }
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import('./Pages/configuracion/configuracion.component').then(m => m.ConfiguracionComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Administración' }
      },
      {
        path: 'mantenimiento',
        loadComponent: () =>
          import('./Pages/mantenimiento/mantenimiento.component').then(m => m.MantenimientoComponent),
        canActivate: [rolGuard],
        data: { titulo: 'Administración' }
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
