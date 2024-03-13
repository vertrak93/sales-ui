import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [ RouterModule, MatListModule, MatIconModule, MatExpansionModule ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  get siteMapItems(){
    return [
      {
          route: '/home',
          title: 'Inicio',
          icon: 'home'
      },
      {
          route: '/sale',
          title: 'Ventas',
          icon: 'shopping_cart'
      },
      {
          route: '/buy',
          title: 'Compras',
          icon: 'storefront',
          children: [
              {
                  route: '/buy/purchase',
                  title: 'Registrar Compra',
              },
              {
                  route: '/buy/vendor',
                  title: 'Proveedores',
              }
          ]
      },
      {
          title: 'Productos',
          icon: 'inventory_2',
          children: [
            {
                route: '/brand',
                title: 'Marcas',
            },
            {
                route: '/category',
                title: 'Categorias',
            },
            {
                route: '/presentation',
                title: 'Presentaciones',
            }
          ]
      },
      {
          title: 'Otros Maestros',
          icon: 'list',
          children: [
              {
                  route: '/brand',
                  title: 'Telefonias',
              },
              {
                  route: '/master/bank',
                  title: 'Bancos',
              }
          ]
      },
      {
          route: '/user',
          title: 'Usuarios',
          icon: 'group'
      },
  ];
  }

}
