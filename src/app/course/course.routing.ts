import { Routes } from '@angular/router';
import { MedComponent } from './med/med.component';

export const CourseRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'med',
        component: MedComponent
    },
    ]
}];
