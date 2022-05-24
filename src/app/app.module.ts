import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { Error404Component } from './components/error404/error404.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinkComponent } from './components/drink/drink.component';
import {MaterialExampleModule} from './material.module';
import {MatNativeDateModule} from '@angular/material/core';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FeedbackComponent,
    CadastroComponent,
    Error404Component,
    QuizzComponent,
    NavbarComponent,
    FooterComponent,
    NovoProdutoComponent,
    ModalContentComponent,
    ProdutosComponent,
    ProdutoComponent,
    DrinkComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxMaskModule.forRoot(maskConfig),
    HttpClientModule,
    MatStepperModule,
    MatNativeDateModule,
    MaterialExampleModule,
    MatFormFieldModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
