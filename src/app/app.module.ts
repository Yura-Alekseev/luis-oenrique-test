import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent} from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { ServicesComponent } from './services/services.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    KnowMoreComponent,
    ServicesComponent,
    MySkillsComponent,
    PortfolioComponent,
    TestimonialsComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    ReactiveFormsModule,
    AnimateOnScrollModule.forRoot(),
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
