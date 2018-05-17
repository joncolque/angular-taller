import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';

import { NgForm } from '@angular/forms'

import { MatCardModule } from '@angular/material'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ParentComponent } from './comu-component/child-to-parent/parent/parent.component';
import { ParentComponent1 } from './comu-component/parent-to-child/parent/parent.component';
import { ChildComponent } from './comu-component/child-to-parent/child/child.component';
import { ChildComponent1 } from './comu-component/parent-to-child/child/child.component';
import { TabComponent } from './tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ComuComponentComponent } from './comu-component/comu-component.component';
import { ShareDataComponentComponent } from './share-data-component/share-data-component.component';
import { Comp1Component } from './share-data-component/comp1/comp1.component';
import { Comp2Component } from './share-data-component/comp2/comp2.component';
import { ChannelService } from './channel.service';
import { ServicesComponent } from './services/services.component'
import { UsersService } from '../app/users.service'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'ngIf', component: NgIfComponent},
  { path: 'ngFor', component: NgForComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'parent-child', component: ComuComponentComponent },
  { path: 'shared-data', component: ShareDataComponentComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', component: NgIfComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    ParentComponent,
    ParentComponent1,
    ChildComponent,
    ChildComponent1,
    TabComponent,
    DataBindingComponent,
    ComuComponentComponent,
    ShareDataComponentComponent,
    Comp1Component,
    Comp2Component,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonToggleModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [
    ChannelService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
