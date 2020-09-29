import { Component, OnInit } from '@angular/core';
import { DmsService } from '@yuuvis/framework';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  file: File;
  title: string;
  busy: boolean;

  constructor(private dmsService: DmsService) {}

  ngOnInit(): void {}

  onFileDropped(files: File[]) {
    this.file = files[0];
  }

  create() {
    this.busy = true;
    const objectTypeID = 'appClient:minidoc';
    const data = {};
    data['appClient:clienttitle'] = this.title;
    data['appClient:clientdescription'] = '...';

    this.dmsService.createDmsObject(objectTypeID, data, [this.file]).subscribe(
      res => {
        this.file = null;
        this.busy = false;
      }
    )
  }
}
