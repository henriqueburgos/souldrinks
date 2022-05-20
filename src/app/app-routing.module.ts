import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { Error404Component } from './components/error404/error404.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { QuizzComponent } from './components/quizz/quizz.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produto', component: ProdutoComponent},
  { path: 'error404', component: Error404Component},
  { path: 'quizz', component: QuizzComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
