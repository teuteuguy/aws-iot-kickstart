import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
// Components
import { TableModule } from '../../modules/table/table.module'
import { DeviceTypeComponent } from './device-type.component'
import { DeviceTypesComponent } from './device-types.component'
// Pipes
import { PipesModule } from '../../pipes/pipes.module'
import { PrettyJsonModule } from '../../modules/pretty-json/pretty-json.module'

@NgModule({
	declarations: [DeviceTypeComponent, DeviceTypesComponent],
	exports: [RouterModule, DeviceTypeComponent, DeviceTypesComponent],
	imports: [
		CommonModule,
		FormsModule,

		// Modules
		PrettyJsonModule,
		TableModule,

		// Pipes
		PipesModule,
	],
})
export class DeviceTypesModule {}
