import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GenerateComponent } from './generate/generate.component';

const routes: Routes = [
  { path: 'generate', component: GenerateComponent },
  { path: '**', component: GenerateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
