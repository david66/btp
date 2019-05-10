import { Injectable } from '@angular/core';

// Global Aspera object
declare var AW4: any;

@Injectable()
export class AsperaService {

  // Settings for Aspera
  asperaWeb: any;
  connectSettings = {
    allow_dialogs: 'yes'
  };
  connectInstaller: '//d3gcli72yxqn2z.cloudfront.net/connect/v4';

  constructor() { this.initAspera(); }

  initAspera() {
         // Aspera initialization
         const asperaInstaller = new AW4.ConnectInstaller({ sdkLocation: this.connectInstaller });
         const statusEventListener = function (eventType, data) {
           if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.INITIALIZING) {
             asperaInstaller.showLaunching();
           } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.FAILED) {
             asperaInstaller.showDownload();
           } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.OUTDATED) {
             asperaInstaller.showUpdate();
           } else if (eventType === AW4.Connect.EVENT.STATUS && data === AW4.Connect.STATUS.RUNNING) {
             asperaInstaller.connected();
           }
         };

         this.asperaWeb = new AW4.Connect({ sdkLocation: this.connectInstaller, minVersion: '3.7.0' });
         this.asperaWeb.addEventListener(AW4.Connect.EVENT.STATUS, statusEventListener);
         //console.log('Connect init App_ID: ', this.asperaWeb.initSession() );
         // Initialice session
         this.asperaWeb.initSession();
         console.log('Aspera initilized');
         this.asperaWeb.addEventListener('transfer', this.handleTransferEvents);
         //End Aspera initialization

         return this.asperaWeb;
  }

   /**
    * Aspera methods
    */
   handleTransferEvents(event, obj) {
       switch (event) {
         case 'transfer':
           // this.log.info('transfer: ', obj);
           break;
       }
   }

   getStorageFolder(data) {
       var files = data.dataTransfer.files;
       var destPath = null;
       if (!(files == null || typeof files === "undefined" || files.length === 0)) {
           for (var i = 0, length = files.length; i < length; i +=1) {
               destPath = files[i].name;
           }
       }
       return destPath;
   }

   downloadFile(file, original_filename, data, resource_type) {
       let destPath = this.getStorageFolder(data);

       if ('video' == resource_type) {
         // TODO: Have this URL segment to replace defined in the config file
         file = file.replace('https://cms.obs.tv/cms/','');
         original_filename = original_filename.replace(/[\\/:"*?<>|]+/g,'');
       } else if ('image' == resource_type) {
         // TODO: Have this URL segment to replace defined in the config file
         file = file.replace('https://www.obs.tv/photolibrary/','');
         original_filename = original_filename.replace('https://www.obs.tv/photolibrary/','').replace(/[\\/:"*?<>|]+/g,'');
       }


       this.startTransfer(file, original_filename, destPath, resource_type);
   }

   downloadMultipleFile(filesObject, data, resource_type) {
       let destPath = this.getStorageFolder(data);
       let file = '';
       let original_filename = '';
       let transferPath = [];
       // Transfer selected resources
       for (let i in filesObject) {
         if ('video' == resource_type) {
           // TODO: Have this URL segment to replace defined in the config file
           file = filesObject[i].download_uri.replace('https://cms.obs.tv/cms/','');
           original_filename = filesObject[i].original_filename.replace(/[\\/:"*?<>|]+/g,'');
         } else if ('image' == resource_type) {
           // TODO: Have this URL segment to replace defined in the config file
           file = filesObject[i].download_uri.replace('https://www.obs.tv/photolibrary/','');
           original_filename = filesObject[i].original_filename.replace('https://www.obs.tv/photolibrary/','').replace(/[\\/:"*?<>|]+/g,'');
         }

         let transferFile = {"source": file, "destination": original_filename};
         transferPath.push(transferFile);
       }
       this.startMultipleTransfer(transferPath, resource_type, destPath);
   }

   // Request the transfer through Aspera
   // TODO: Have the these parameters in a config file
   startTransfer(file, original_filename, destPath, resource_type) {
      let transferSpec = {
        "paths": [{"source":file}],
        "remote_host": "81.19.100.154",
        "ssh_port":33001,
        "fasp_port":33001,
        "remote_user": '',
        "remote_password": '',
        "direction": "receive",
        "target_rate_kbps" : 5000,
        "allow_dialogs" : false,
        "resume" : "sparse_checksum",
        "save-before-overwrite": true,
        "destination_root" : destPath + "\\" + original_filename
      };

      switch (resource_type) {
        case "document":
          transferSpec.remote_user = 'OBS\\AsperaWebsiteUser';
          transferSpec.remote_password = 'WqapoL2015';
          break;
        case "video":
          transferSpec.remote_user = 'OBS\\TebasUser';
          transferSpec.remote_password = 'T3ch3xn0m0r3';
          break;
        case "image":
          transferSpec.remote_user = 'AsperaPhotosTransfer';
          transferSpec.remote_password = 'NgSECa5RMrM3jn5x';
          break;

        default:
          return false;
      }

      let connectSettings = {
        "allow_dialogs": true,
        "use_absolute_destination_path": true
      };
      this.asperaWeb.startTransfer(transferSpec, connectSettings);
   }

   startMultipleTransfer(transferPath, resource_type, destPath) {
      let transferSpec = {
        "paths": transferPath,
        "remote_host": "81.19.100.154",
        "ssh_port":33001,
        "fasp_port":33001,
        "remote_user": '',
        "remote_password": '',
        "direction": "receive",
        "target_rate_kbps" : 5000,
        "allow_dialogs" : false,
        "resume" : "sparse_checksum",
        "destination_root" : destPath
      };

      switch (resource_type) {
        case "document":
          transferSpec.remote_user = 'OBS\\AsperaWebsiteUser';
          transferSpec.remote_password = 'WqapoL2015';
          break;
        case "video":
          transferSpec.remote_user = 'OBS\\TebasUser';
          transferSpec.remote_password = 'T3ch3xn0m0r3';
          break;
        case "image":
          transferSpec.remote_user = 'AsperaPhotosTransfer';
          transferSpec.remote_password = 'NgSECa5RMrM3jn5x';
          break;

        default:
          return false;
      }

      let connectSettings = {
        "allow_dialogs": true,
        "use_absolute_destination_path": true
      };
      this.asperaWeb.startTransfer(transferSpec, connectSettings);

   }


}
