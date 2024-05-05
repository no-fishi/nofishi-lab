
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams        } from '@angular/common/http';

// Link preview content
interface LinkPreviewContent {
  title       : any;
  description : any;
  image       : any;
  url         : string;
}

// Social media list
interface SocialMediaWithLinkPreview {
  [ x : string ] : LinkPreviewContent; // DECLEAR THE TYPE OF INDEX AS 'string'
  deviantart     : LinkPreviewContent; // OR MAY CAUSE AN ERROR !!!
  bluesky        : LinkPreviewContent; // BUT I DO NOT WHY !!! F**K
  github         : LinkPreviewContent;
}

let SOCIALMEDIA_LINK_PREVIEW : SocialMediaWithLinkPreview = {
  x          : { title : null, description : null, image : null, url : 'https://twitter.com/nofissie/'                 },
  deviantart : { title : null, description : null, image : null, url : 'https://www.deviantart.com/nofishi/'           },
  bluesky    : { title : null, description : null, image : null, url : 'https://bsky.app/profile/nofishi.bsky.social/' },
  github     : { title : null, description : null, image : null, url : 'https://github.com/no-fishi/'                  },
};

const SOCIALMEDIA_NAME = [
  'x',
  'deviantart',
  'bluesky',
  'github',
];

// A function to stop program a few seconds
async function sleep( ms : number ) : Promise<void> {
  return new Promise(
    ( resolve ) => setTimeout( resolve, ms ) );
}

@Injectable({
  providedIn: 'root' 
})

@Component({
  selector    : 'app-socialmedia',
  templateUrl : './socialmedia.component.html',
  styleUrls   : ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {

  constructor(
    private httpClient : HttpClient,
  ) {}

  // API URL and Access key
  private accessKey : string = '89e365885dbcfce8dab89663a5de7c8c';
  private apiUrl    : string = 'https://api.linkpreview.net/';

  // Link preview result properties
  responseData    : any;
  linkTitle       : string = '';
  linkDescription : string = '';
  linkImage       : string = '';
  linkUrl         : string = '';

  // Link preview sleep
  sleep : boolean = false;

  ngOnInit(): void {
    // Get link preview, default Deviant Art
    this.getSocialMediaLinks();
  }

  // 
  async getSocialMediaLinks() {
    for ( var socialmediaName of SOCIALMEDIA_NAME ) {
      console.log( 'Target social media:', socialmediaName );
      // Set social media name as key of SocialMediaWithLinkPreview
      console.log( SOCIALMEDIA_LINK_PREVIEW[ socialmediaName ] );

      // Now get a link preview URLs via HTTP connection!
      // Set HTTP parameters
      const targetLink = SOCIALMEDIA_LINK_PREVIEW[ socialmediaName ].url;
      const httpParams = new HttpParams()
        .append( 'key', this.accessKey )
        .append( 'q',   targetLink     );
      // Go !!!
      this.httpClient.get<any>( this.apiUrl, { params : httpParams } ).subscribe(
        ( response ) => {
          // Assign response
          this.responseData = response;
          //console.log( 'Response result:', this.responseData );
          // Assign data to update link preview
          SOCIALMEDIA_LINK_PREVIEW[ socialmediaName ].title       = ( this.responseData ).title;
          SOCIALMEDIA_LINK_PREVIEW[ socialmediaName ].description = ( this.responseData ).description;
          SOCIALMEDIA_LINK_PREVIEW[ socialmediaName ].image       = ( this.responseData ).image;
        },
        ( error ) => {
          // Show error message
          console.log( 'Error:', error );
          // If Status 429 (too many errors), show alternative message
          console.log( 'Status:', error.status )
          if ( error.status === 429 ) {
          // Assign data to update link preview
          SOCIALMEDIA_LINK_PREVIEW[ socialmediaName ].title       = 'Sorry, the link preview is not available at the moment!';
          SOCIALMEDIA_LINK_PREVIEW[ socialmediaName ].description = 'But you can visit my social media via the link below anyway!👇';
          SOCIALMEDIA_LINK_PREVIEW[ socialmediaName ].image       = 'https://dogecoin.com/assets/images/doge.svg';
          }
        },
      );
      // After fetching one link previeew data, sleep 2 second
      // to avoid accessing too many requests (or it gets error 429)
      await sleep( 2000 );
    }
  }

  showLinkPreviewData( socialMediaName : string ) {
    const linkPreviewData = SOCIALMEDIA_LINK_PREVIEW[ socialMediaName ];
    console.log( 'linkPreviewData:', linkPreviewData );
    this.linkTitle       = linkPreviewData.title;
    this.linkDescription = linkPreviewData.description;
    this.linkImage       = linkPreviewData.image;
    this.linkUrl         = linkPreviewData.url;
  }

  /*
  async getLinkPreviewData( socialMediaName : string ) {
    // Show sleeping spinner
    this.sleep = true;

    // Set social media link
    switch ( socialMediaName ) {
      case 'x'          : this.socialMediaLink = LINK_X;          break;
      case 'deviantart' : this.socialMediaLink = LINK_DEVIANTART; break;
      case 'bluesky'    : this.socialMediaLink = LINK_BLUESKY;    break;
      case 'github'     : this.socialMediaLink = LINK_X;          break;
    }
    console.log( 'Social media link:', this.socialMediaLink );
    // Sleep 1 second to avoid accessing too many (or it gets error 429)
    this.sleep = true;
    await sleep( 1000 );

    // Request data to fetch link preview
    this.requestData( this.socialMediaLink );
  }
  */

  requestData( targetLink : string ) {
    // Set HTTP parameters
    const httpParams = new HttpParams()
    .append( 'key', this.accessKey )
    .append( 'q',   targetLink     );

    // Get URL preview data
    this.httpClient.get<any>( this.apiUrl, { params :httpParams } ).subscribe(
      ( response ) => {
        // Assign response
        this.responseData = response;
        //console.log( 'Response result:', this.responseData );

        // Assign data to update link preview
        this.linkTitle       = ( this.responseData ).title;
        this.linkDescription = ( this.responseData ).description;
        this.linkImage       = ( this.responseData ).image;
        this.linkUrl         = ( this.responseData ).url;

        // Hide spinner
        this.sleep = false;
      },
      ( error ) => {
        // Show error message
        console.log( 'Error:', error );

        // Hide spinner
        this.sleep = false;
      },
    );
  }
}
