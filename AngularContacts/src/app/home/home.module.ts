import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import {
  MatToolbarModule, MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
  MatNativeDateModule, MatTooltipModule, MatIconModule, MatDialogModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from '../contact/contact.component';
// import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    // ToastrModule.forRoot(),
  ],
  entryComponents: [
  ]
})
export class HomeModule { }
