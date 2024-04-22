// import { Routes } from '@angular/router';
import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-page/dashboard-page.component';
import { AccountingComponent } from './pages/accounting-page/accounting-page.component';
import { MembersComponent } from './pages/members-page/members-page.component';
import { MasterComponent } from './layout/master/master.component';
import { DefaultComponent } from './layout/default/default.component';
import { SalesComponent } from './pages/sales-page/sales-page.component';
import { ProjectsComponent } from './pages/projects-page/projects-page.component';
import { CustomersComponent } from './pages/customers-page/customers-page.component';
import { SettingsComponent } from './pages/settings-page/settings-page.component';
import { ChatSupportComponent } from './pages/chat-support-page/chat-support-page.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';



export const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: '', 
                component: LoginComponent, 
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },


    {
        path: 'admin',
        component: MasterComponent,
        children: [
            {
                path: 'dashboard', 
                component: DashboardComponent
            },

            {
                path: 'finance', 
                component: AccountingComponent
            },

            {
                path: 'human-resource', 
                component: MembersComponent
            },

            {
                path: 'sales', 
                component: SalesComponent
            },

            {
                path: 'projects', 
                component: ProjectsComponent
            },

            {
                path: 'customers', 
                component: CustomersComponent
            },

            {
                path: 'settings', 
                component: SettingsComponent
            },

            {
                path: 'chat-support', 
                component: ChatSupportComponent
            },

        ]
    }
];
