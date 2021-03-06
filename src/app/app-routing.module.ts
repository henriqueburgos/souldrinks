import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DrinkComponent } from './components/drink/drink.component';
import { Error404Component } from './components/error404/error404.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { QuizzComponent } from './components/quizz/quizz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produto', component: ProdutoComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'error404', component: Error404Component},
  { path: 'quizz2', component: QuizzComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'novo-produto', component: NovoProdutoComponent},
  { path: 'drink', component: DrinkComponent},
  { path: '**', component: Error404Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
