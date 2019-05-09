import { NgModule } from '@angular/core';

//Pipes
import { KeysPipe } from './pipes/keys.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';

@NgModule({
  declarations: [
    KeysPipe,
    FileSizePipe,
    SortByPipe,

  ],
  exports: [
    KeysPipe,
    FileSizePipe,
    SortByPipe,
  ],
  imports: [
  ],
  providers: [
  ],
  bootstrap: []
})
export class PipeModule { }
