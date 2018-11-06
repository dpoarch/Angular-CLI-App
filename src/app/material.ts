import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule],
	exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule],
})
export class MaterialModule { }