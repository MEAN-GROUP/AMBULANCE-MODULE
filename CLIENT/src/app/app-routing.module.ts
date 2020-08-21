import { TraceAmbulanceComponent } from './trace-ambulance/trace-ambulance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDetailsComponent } from './hospital-details/hospital-details.component';
import { AmbulanceDetailsComponent } from './ambulance-details/ambulance-details.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { AddAmbulanceComponent } from './ambulance/add-ambulance/add-ambulance.component';
import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { AddBookindataComponent } from './book-ambulance/add-bookindata/add-bookindata.component';
import { AddHospitalComponent } from './hospital/add-hospital/add-hospital.component';
import { UpdateHospitaldetailsComponent } from './hospital-details/update-hospitaldetails/update-hospitaldetails.component';
import { AmbulanceUpdateComponent } from './ambulance-details/ambulance-update/ambulance-update.component';
import { UpdateBookingDataComponent } from './booking-details/update-booking-data/update-booking-data.component';
import { UpdateDriverDataComponent } from './driver-details/update-driver-data/update-driver-data.component';


const routes: Routes = [
  {
    path:"addHospital", component: AddHospitalComponent
  },
  {
    path:"addAmbulance", component: AddAmbulanceComponent
  },
  {
    path:"addDriver", component: AddDriverComponent
  },
  {
    path:"bookAmbulance", component: AddBookindataComponent
  },
  {
    path:"hospitalDetails", component: HospitalDetailsComponent
  },
  {
    path:"hospitalUpdateDetails", component: UpdateHospitaldetailsComponent
  },
  {
     path:"ambulanceDetails", component: AmbulanceDetailsComponent
  },
  {
    path:"ambulanceUpdateDetails", component: AmbulanceUpdateComponent
  },
  {
    path:"bookingList", component: BookingDetailsComponent
  },
  {
    path:"updateBookingDetails", component: UpdateBookingDataComponent
  },
  {
    path:"driverDetails", component: DriverDetailsComponent
  },
  {
    path:"updateDriverDetails", component: UpdateDriverDataComponent
  },
  {
    path:"traceAmbulance", component: TraceAmbulanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rootcomp = [
  AddHospitalComponent, 
  AddAmbulanceComponent, 
  AddDriverComponent, 
  AddBookindataComponent, 
  HospitalDetailsComponent,
  UpdateHospitaldetailsComponent, 
  BookingDetailsComponent, 
  AmbulanceDetailsComponent, 
  DriverDetailsComponent,
  AmbulanceUpdateComponent, 
  UpdateBookingDataComponent, 
  UpdateDriverDataComponent,
  TraceAmbulanceComponent
];
