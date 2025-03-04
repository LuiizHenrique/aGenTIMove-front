import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CadprodutosComponent } from './cadprodutos/cadprodutos.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { DetalheprodutoComponent } from './detalheproduto/detalheproduto.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    LoginComponent,
    CadastroComponent,
    InicioComponent,
    ProdutosComponent,
    CategoriasComponent,
    CadprodutosComponent,
    ProdutosEditComponent,
    DetalheprodutoComponent,
    ProdutosDeleteComponent,
    UsuarioEditComponent,
    CarrinhoComponent,
    TrabalheConoscoComponent,
    SobrenosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
