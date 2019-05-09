import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  role: any [ ] = [ ];

  // FIND YOUR ROLE
  findRoles: any [ ] = [
    {
      id: '1',
      title: 'Archive',
      thumbnail: 'assets/archive.jpg'
    },
    {
      id: '2',
      title: 'Broadcaster Support',
      thumbnail: 'assets/broadcastersupport.jpg'
    },
    {
      id: '3',
      title: 'Commentary',
      thumbnail: 'assets/commentary.jpg'
    },
    {
      id: '4',
      title: 'Games Services',
      thumbnail: 'assets/games-timeservices.jpg'
    },
    {
      id: '5',
      title: 'Office Support',
      thumbnail: 'assets/finance.jpg'
    },
    {
      id: '6',
      title: 'Olympic Channel',
      thumbnail: 'assets/olympicchannel.jpg'
    },
    {
      id: '7',
      title: 'Production',
      thumbnail: 'assets/production.jpg'
    },
    {
      id: '8',
      title: 'Venue Operations',
      thumbnail: 'assets/venueoperations.jpg'
    }
  ];

  //HOME ROLES
  homeRoles: any [ ] = [
    {
      slide: '1',
      cards: [
        {
          id: '1',
          title: 'Archive',
          text: 'Every minute of Olympic action is captured and maintained in the official Olympic television archive. Become part of the team responsible for ensuring that not a moment is missed!',
          thumbnail: 'assets/archive.jpg'
        },
        {
          id: '2',
          title: 'Broadcaster Support',
          text: 'Upon arrival in the host city, the needs of the world’s broadcasters are addressed by Broadcaster Support, to ensure they have everything required to deliver the Games to their home countries.',
          thumbnail: 'assets/broadcastersupport.jpg'
        },
        {
          id: '3',
          title: 'Commentary',
          text: 'This is your chance to work directly with broadcasters from all over the world, as they deliver their own commentary of the action on the field, to the billions of viewers at home.',
          thumbnail: 'assets/commentary.jpg'
        }
      ]
    },
    {
      slide: '2',
      cards: [
        {
          id: '4',
          title: 'Games Services',
          text: 'Coordinating the services for thousands of employees is no easy task. The Games Services Department manages the day-to-day needs of all of the host broadcast personnel.',
          thumbnail: 'assets/games-timeservices.jpg'
        },
        {
          id: '5',
          title: 'Office Support',
          text: 'Office Support plays a key role when it comes to keeping things organised and running smoothly, contributing to the success of our operations.',
          thumbnail: 'assets/finance.jpg'
        },
        {
          id: '6',
          title: 'Olympic Channel',
          text: 'The Olympic Channel is a multi-platform destination for Olympic fans, available year round. During the Games, the Channel produces fun and unique content specifically designed for digital use.',
          thumbnail: 'assets/olympicchannel.jpg'
        }
      ]
    },
    {
      slide: '3',
      cards: [
        {
          id: '7',
          title: 'Production',
          text: 'Creating content is our core business. Help us produce compelling and engaging content and tell the story of the Games to our global audience.',
          thumbnail: 'assets/production.jpg'
        },
        {
          id: '8',
          title: 'Venue Operations',
          text: 'The competition venues are where all the sporting action happens, and providing the technical backbone and support is essential to delivering the Games to the world.',
          thumbnail: 'assets/venueoperations.jpg'
        }
      ]
    }
  ];

  // ROLES DETAIL
  roles: any = [
    {
      id: '1',
      title: 'Archive',
      banner: 'assets/archive-banner.jpg',
      description: 'We are the keepers of Olympic History',
      secondary_description: 'We are at the heart of the broadcast operation, capturing every piece of footage produced during the Games – thousands of hours of content, enriched with detailed metadata, that will contribute to the vast library of the Olympic audio-visual archive, and to the legacy of the Olympic Movement. You’ll be watching sport events and athletes’ interviews and describing the actions taking place during the competition, including what athletes have to say about their Olympic experience. Your hard work will allow easy retrieval of the desired material by producers and reporters worldwide.',
      skills: [
        {
          icon: 'assets/a-skills1.png',
          icon_text: 'You have a good attention span and a meticulous eye for detail'
        },
        {
          icon: 'assets/a-skills2.png',
          icon_text: 'You are flexible, proactive and with a good level of English'
        },
        {
          icon: 'assets/a-skills3.png',
          icon_text: 'You are interested in new technologies, broadcast environment and TV sport production'
        }
      ],
      contract: [
        {
          icon: 'assets/contract1.jpg',
          icon_text: '4-5 weeks'
        },
        {
          icon: 'assets/contract2.jpg',
          icon_text: 'up to 2 months'
        }
      ],
      positions: [
        {
          id: '1',
          position: 'Video Logger',
          duties: [
            'Create a real-time description of each live feed transmitted, using a logging software program that helps tag the key moments'
          ],
          location: 'IBC',
          area: 'Archive Services',
          english_level: [
            '100', '100', '100', '50', '0'
          ],
          video: ''
        },
        {
          id: '2',
          position: 'Mixed Zone Feed Operator',
          duties: [
            'Create clips of the various interviews given by the Olympic athletes in the Mixed Zone and add the relevant information for their publication and distribution to the various OBS media platforms'
          ],
          location: 'IBC',
          area: 'Archive Services',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        },
        {
          id: '3',
          position: 'Archive Assistant',
          duties: [
            'Assist and support the Archive Team with the daily operations and perform quality control of both footage and metadata generated during the Games under the guidance and instructions of the Management Team'
          ],
          location: 'IBC',
          area: 'Archive Services',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        }
      ]
    },
    {
      id: '2',
      title: 'Broadcaster Support',
      banner: 'assets/broadcastersupport-banner.jpg',
      description: 'We serve as the main point of contact with the Broadcasters',
      secondary_description: 'Broadcast Support brings together a diverse team, made up of several departments, all working towards one goal – to deliver a world-class service to the Broadcasters. Whether at the International Broadcast Centre (IBC) or the competition venues, you’ll answer questions, provide accurate information, and address concerns – all with the utmost sense of care. Together, we ensure the Broadcasters receive responsive service throughout the Games.',
      skills: [
        {
          icon: 'assets/bs-skills1.png',
          icon_text: 'You are service minded and enjoy interacting with people'
        },
        {
          icon: 'assets/bs-skills2.png',
          icon_text: 'You have excellent communication and social skills'
        },
        {
          icon: 'assets/bs-skills3.png',
          icon_text: 'You have the ability to multitask and are adept at problem solving'
        }
      ],
      contract: [
        {
          icon: 'assets/contract1.jpg',
          icon_text: '3 weeks'
        },
        {
          icon: 'assets/contract2.jpg',
          icon_text: 'Up to 3 months'
        }
      ],
      positions: [
        {
          id: '1',
          position: 'Broadcast Operations Centre (BOC) Assistant',
          duties: [
            'Process online reports, phone calls and e-mails on a daily basis',
            'Help to communicate precisely each issue that is raised in order to resolve them as quickly as possible',
            'Night shifts are included in this role: accommodation near the IBC is required',
          ],
          location: 'IBC',
          area: 'Broadcast Operations Centre (BOC)',
          english_level: [
            '100', '100', '100', '100', '50'
          ],
          video: ''
        },
        {
          id: '2',
          position: 'Bookings Assistant',
          duties: [
            'Attend to the Broadcasters at the Bookings Counter',
            'Assist in preparing and delivering various items that the Broadcasters require for their venue operations such as bibs, armbands, parking permits, camera stickers, access tickets for high-demand events, etc.'
          ],
          location: 'IBC',
          area: 'Bookings Office',
          english_level: [
            '100', '100', '100', '100', '50'
          ],
          video: ''
        },
        {
          id: '3',
          position: 'Liaison Officer',
          duties: [
            'Act as a point of contact to Broadcasters for information at the Broadcast Information Office (please note that additional languages besides English would be considered an asset)',
            'Assist the Broadcasters with their bookings/requirements',
            'Provide information/assistance to the Broadcasters in the commentary positions',
            'Manage the operation of the live interviews taking place in the Mixed Zone',
            'Monitor the Broadcasters’ camera positions',
          ],
          location: 'Competition Venues',
          area: 'Broadcast Information Office (BIO)',
          english_level: [
            '100', '100', '100', '100', '50'
          ],
          video: ''
        },
        {
          id: '4',
          position: 'Events Officer',
          duties: [
            'Provide generic and broadcast-related information to the Broadcasters at the Information Counter (please note that additional languages besides English would be considered an asset)',
            'Distribute access devices to non-accredited visitors through the Guest Pass Office',
            'Support and manage the Daily Briefing Room, which is used for daily meetings between OBS, the Organising Committee and the Broadcasters, as well as ad-hoc meetings',
            'Assist with IBC visits for VIP guests, top partners, official delegations, etc.'
          ],
          location: 'IBC',
          area: 'Information Counter or Guess Pass Office',
          english_level: [
            '100', '100', '100', '100', '50'
          ],
          video: ''
        },
        {
          id: '5',
          position: 'Information Assistant',
          duties: [
            'Monitor news articles',
            'Write press releases',
            'Assist with various communications matters',
            'Provide support to the Mobile App team, from handling user enquiries to updating data',
            'Provide support to the Photo team (please note that knowledge of Adobe Photoshop and Lightroom would be considered an asset, as well as previous photography experience)'
          ],
          location: 'IBC',
          area: 'Information Office',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        },
        {
          id: '6',
          position: 'New Technology Showroom Assistant',
          duties: [
            'Assist in managing the New Technology Showroom',
            'Coordinate the set-up of the equipment on a daily basis',
            'Ensure all the equipment is operational at all times',
            'Handle queries from visitors',
          ],
          location: 'IBC',
          area: 'New Technology Showcase',
          english_level: [
            '100', '100', '100', '100', '50'
          ],
          video: ''
        },
      ]
    },
    {
      id: '3',
      title: 'Commentary',
      banner: 'assets/commentary-banner.jpg',
      description: 'We provide the technical backbone for the world’s sports commentators',
      secondary_description: 'We provide the equipment and technical services to sports commentators from around the world to help them bring the Olympic Games to life for their audiences. Once we have set up the facilities, our mission is the day-to-day operations and maintenance of the commentary equipment at the venues. You will ensure that the commentators’ needs are met and respond to any issues.',
      skills: [
        {
          icon: 'assets/c-skills1.png',
          icon_text: 'You have excellent verbal communication skills'
        },
        {
          icon: 'assets/c-skills2.png',
          icon_text: 'You have good computer skills and enjoy learning new technical skills'
        },
        {
          icon: 'assets/c-skills3.png',
          icon_text: 'You have either a technical (Broadcasting, Sound Engineering, Engineering, Computer Science/IT) or media (Journalism, Communications, Language) background'
        }
      ],
      contract: [
        {
          icon: 'assets/contract1.jpg',
          icon_text: '3 weeks'
        },
        {
          icon: 'assets/contract2NA.jpg',
          icon_text: 'Yes – between 3 and 6 months'
        }
      ],
      positions: [
        {
          id: '1',
          position: 'IBC Commentary System Operator',
          duties: [
            'Assist with the testing and routing of commentary audio',
            'Provide support to the Broadcasters located in the IBC'
          ],
          location: 'IBC',
          area: 'Commentary Switching Centre (CSC)',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        },
        {
          id: '2',
          position: 'Venue Commentary System Operator',
          duties: [
            'Test the equipment before the start of each sport session',
            'Assist the CCR crew with trouble-shooting technical issues and operating the Commentary Control equipment during each broadcast',
            'Assist the OBS onsite technical crew with trouble-shooting technical issues and operating the Commentary Control equipment during each broadcast',
            'Provide assistance to the Broadcasters in the commentary positions'
          ],
          location: 'Competition venues',
          area: 'Commentary Control Room (CCR)',
          english_level: [
            '100', '100', '100', '100', '50'
          ],
          video: ''
        }
      ]
    },
    {
      id: '4',
      title: 'Games Services',
      banner: 'assets/gamesservices-banner.jpg',
      description: 'We ensure the complex coordination behind our operation goes off as planned',
      secondary_description: 'Meeting the service needs of thousands of personnel is necessary for the success of our operation. We handle air travel, accommodation, ground transportation, and many other arrangements, providing full support from beginning to end and making sure everything runs smoothly. Working in this area gives you a unique overview of everything happening behind-the-scenes, and the type of work is usually extremely varied.',
      skills: [
        {
          icon: 'assets/gs-skills1.png',
          icon_text: 'You have a “no task too small” and enthusiastic attitude'
        },
        {
          icon: 'assets/gs-skills2.png',
          icon_text: 'You are resourceful and plenty of initiative'
        },
        {
          icon: 'assets/gs-skills3.png',
          icon_text: 'You have good organisation and time management skills'
        }
      ],
      contract: [
        {
          icon: 'assets/contract1.jpg',
          icon_text: '3 weeks'
        },
        {
          icon: 'assets/contract2.jpg',
          icon_text: 'Up to 3.5 months'
        }
      ],
      positions: [
        {
          id: '1',
          position: 'Games Services Assistant',
          duties: [
            'Help with mailing the accreditations worldwide to OBS personnel before their departing flight',
            'Be part of the Airport "Meet & Greet" welcoming OBS personnel and helping them reach their accommodation',
            'Assist the OBS Transport Team in tasks related to bus operations and fleet management',
            'Assist the OBS Accommodation Team in confirming rooming lists with the hotels; providing guest support services at check-in/check-out and during the stay; coordinating services and publishing transport and breakfast schedules in the common area at each location',
            'Help with the preparation and distribution of the uniforms, as well as with size changes and tailoring services',
            'Replenish and maintain food and drinks in the break areas',
            'Assist with the distribution of meal cards/vouchers to IBC-based personnel',
            'Act as a courier',
            'Assist with translation/interpretation services',
            'Provide overall support including the local sourcing of items required by IBC personnel'
          ],
          location: 'IBC',
          area: 'Games Services',
          english_level: [
            '100', '100', '100', '50', '0'
          ],
          video: ''
        }

      ]
    },
    {
      id: '5',
      title: 'Office Support',
      banner: 'assets/finance-banner.jpg',
      description: 'We are at the heart of the entire OBS operation',
      secondary_description: 'An event on the scale of the Olympic Games needs to have well-organised machinery in place to be carried out successfully. From Finance to Human Resources to other essential offices, we jump in to provide support wherever it is needed and help ensure the smooth running of the operation. You’ll be part of the support team to manage our resources and personnel in an effective and sustainable manner.',
      skills: [
        {
          icon: 'assets/os-skills1.png',
          icon_text: 'You enjoy working in an office environment'
        },
        {
          icon: 'assets/os-skills2.png',
          icon_text: 'You have strong organisation and planning skills and the ability to multitask'
        },
        {
          icon: 'assets/os-skills3.png',
          icon_text: 'You have good communication skills'
        }
      ],
      contract: [
        {
          icon: 'assets/contract1.jpg',
          icon_text: '3 weeks'
        },
        {
          icon: 'assets/contract2NA.jpg',
          icon_text: ''
        }
      ],
      positions: [
        {
          id: '1',
          position: 'Finance Assistant',
          duties: [
            'Assist in processing financial paperwork and reporting',
            'Assist with timesheet management and petty cash operations',
            'Assist in the development and maintenance of spreadsheets (knowledge of Microsoft Excel required)'
          ],
          location: 'IBC',
          area: 'Finance',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        },
        {
          id: '2',
          position: 'Human Resources (HR) Assistant',
          duties: [
            'Assist with day to day operations of the HR functions and duties',
            'Act as the liaison between HR and employees, ensuring smooth communication and prompt resolution of requests and questions',
            'Assist with timesheet management and absences',
            'Provide support and communicate with local doctors/hospitals when an OBS employee requires medical assistance',
            'Compile and update employee records',
            'Assist with translation when liaising with third parties'
          ],
          location: 'IBC',
          area: 'Finance',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        },
        {
          id: '3',
          position: 'Office Support Assistant',
          duties: [
            'Provide administrative support to ensure efficient operation of the office',
            'Supports managers and employees through a variety of tasks related to organisation and communication',
            'Carry out administrative duties such as filing, typing, copying, binding, scanning etc',
            'Assist with translation when liaising with third parties'
          ],
          location: 'IBC',
          area: 'Finance',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        }
      ]
    },
    {
      id: '6',
      title: 'Olympic Channel',
      banner: 'assets/olympicchannel-banner.jpg',
      description: 'We bring fans closer to the Olympic Movement all year round',
      secondary_description: 'The Olympic Channel is a multi-platform media destination where fans can discover, engage and share in the power of sport and the excitement of the Olympic Games all year round. Through comprehensive coverage, original programming, never-before-seen footage and exclusive interviews, the Olympic Channel takes viewers outside the stadium, behind the scenes, and inside the minds of athletes. You will work across different departments and get a sense of how digital sports production works.',
      skills: [
        {
          icon: 'assets/oc-skills1.png',
          icon_text: 'You have creative thinking skills and are an active social media user'
        },
        {
          icon: 'assets/oc-skills2.png',
          icon_text: 'You have excellent communication and social skills'
        },
        {
          icon: 'assets/oc-skills3.png',
          icon_text: 'You have a background in Production, Media, Marketing/Communications/PR'
        }
      ],
      contract: [
        {
          icon: 'assets/contract1.jpg',
          icon_text: '3 weeks'
        },
        {
          icon: 'assets/contract2NA.jpg',
          icon_text: ''
        }
      ],
      positions: [
        {
          id: '1',
          position: 'Production Assistant',
          duties: [
            'Assist production departments with organisation, bookings and appointments of athletes and Olympic Committee members (please note that additional languages besides English would be considered an asset)',
            'Pick up and host the athletes and guests',
            'Help with the green room set-up, athlete’s needs, etc.',
            'Provide assistance to the ENG crews who will be covering stories both in and around the Olympic venues, including supporting the movement of the crews from location to location, translation and logging of footage',
            'Conduct research on athletes, sports, etc.',
            'Play an active role in the social media activities of the Olympic Channel',
            'Assist with general office management and administrative tasks (forms, expenses reports, drivers’ rotation etc.)',
            'Assist with translation'
          ],
          location: 'IBC / Competition Venues / Athletes’ Village / Around the city',
          area: 'Olympic Channel Office',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        },
        {
          id: '2',
          position: 'Olympic Channel Brand Ambassador',
          duties: [
            'Support Olympic Channel marketing and PR activities to promote brand awareness of the Channel, encourage engagement through its Mobile App, and assist the Communications department',
            'Represent the Olympic Channel as a “brand ambassador” at certain meetings and events to demonstrate the App’s features and show content',
            'Write advisories and manage distribution of copy through on-site channels such as “My Info” system',
            'Be in contact with media and RHB partners at the MPC and IBC to deliver Olympic Channel media alerts and messaging',
            'Distribute promotional materials such as pins and VIP packages',
            'Assist with administrative tasks'
          ],
          location: 'IBC / Media Press Centre (MPC) / Others',
          area: 'Olympic Channel Office',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        }
      ]
    },
    {
      id: '7',
      title: 'Production',
      banner: 'assets/production-banner.jpg',
      description: 'We are content creators',
      secondary_description: 'We originate and contribute to the production of a diverse range of Olympic content, spanning from athletes’ interviews to short-form video content optimised for digital platforms, to feature stories from behind-the-scenes and from around the host city, and more. You will work in a busy and bustling creative environment, learning about the production process and helping us tell the story of the Games.',
      skills: [
        {
          icon: 'assets/p-skills1.png',
          icon_text: 'You are a student in Broadcast Production, Journalism or Media'
        },
        {
          icon: 'assets/p-skills2.png',
          icon_text: 'You have excellent communication and social skills'
        },
        {
          icon: 'assets/p-skills3.png',
          icon_text: 'You have good time management and organisational skills'
        }
      ],
      contract: [
        {
          icon: 'assets/contract1.jpg',
          icon_text: '3 weeks'
        },
        {
          icon: 'assets/contract2NA.jpg',
          icon_text: ''
        }
      ],
      positions: [
        {
          id: '1',
          position: 'Crew Assistant',
          duties: [
            'Work with one of the camera crews either in a venue or around the city to arrange, film and edit a variety of feature stories and interviews',
            'Work with the camera crew to film interviews with athletes after competition',
            'Assist the Camera Operator with the movement and operation of camera equipment and microphones',
            'Propose ideas for feature stories',
            'Assist with translation'
          ],
          location: 'Competition Venues or around the city',
          area: 'Channel News Office',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        },
        {
          id: '2',
          position: 'Production Assistant',
          duties: [
            'Work with the production team to assist in the organisation and scheduling of camera crews, coordinating movement of crews and arranging transport',
            'Assist with the smooth running of the production office, acting as a runner where needed, and helping with the coordination and communication between IBC production, crews in the venues and other OBS departments',
            'Assist the camera crews on location, including assisting the Camera Operator with the movement and operation of camera equipment and microphones',
            'Act as fixer to arrange location shooting and relevant permissions',
            'Propose ideas for feature stories',
            'Assist with translation'
          ],
          location: 'IBC (with travel to venues and around the city required for some positions)',
          area: 'Olympic Channel News Office',
          english_level: [
            '100', '100', '100', '100', '0'
          ],
          video: ''
        }
      ]
    },
    {
      id: '8',
      title: 'Venue Operations',
      banner: 'assets/venueoperations-banner.jpg',
      description: 'We help keep the venue production operating efficiently',
      secondary_description: 'Venue Operations is a unique niche that blends the excitement of sports broadcasting with the hard work going on behind-the-scenes. We provide support to our venue broadcast teams in their day-to-day duties. Every day will be different as you will undertake a variety of tasks, from acting as a runner to handling cameras and dealing with the sound equipment.',
      skills: [
        {
          icon: 'assets/vo-skills1.png',
          icon_text: 'You have good communications and interpersonal skills'
        },
        {
          icon: 'assets/vo-skills2.png',
          icon_text: 'You have good organisation skills and the ability to adjust to change'
        },
        {
          icon: 'assets/vo-skills3.png',
          icon_text: 'You are willing to learn and perform on a variety of roles at a venue'
        }
      ],
      contract: [
        {
          icon: 'assets/contract1.jpg',
          icon_text: '3 weeks'
        },
        {
          icon: 'assets/contract2.jpg',
          icon_text: 'Yes - up to 3 months'
        }
      ],
      positions: [
        {
          id: '1',
          position: 'Venue Assistant',
          duties: [
            'Provide support to OBS crews across a wide range of areas: accreditation, ground transport, accommodation, uniforms and food services. Tasks can include: assisting with the distribution of the uniforms and size changes; ensuring the replenishment and maintenance of food and drink at the break areas; distributing the meal cards/vouchers; coordinating access control to meals; handling the supplementary access devices; helping with bus operations and accommodation services',
            'Assist with the daily installation and maintenance of the microphones and other electronic equipment',
            'Assist with the set-up and tear-down of cables and equipment including running audio and video cables, transporting and setting up cameras, ensuring that all equipment is working and monitoring that equipment',
            'Work closely with the Camera Operators by protecting the operator’s shot from people moving in front of the camera, eliminate potential obstacles, feed cable for a handheld operator and/or act as a spotter to alert the operator to hazards or good shot possibilities',
          ],
          location: 'Competition Venues',
          area: 'OBS Broadcast Office',
          english_level: [
            '100', '100', '100', '50', '0'
          ],
          video: ''
        },
      ]
    },
  ];

  constructor() { }

  // GET ROLE
  getRole(role) {
    console.log(role);
    for (let entry of this.roles) {
      if ( role === entry.id) {
        this.role = entry;
        console.log(this.role);
      }
    }
    return this.role;
  }

  // GET HOME ROLES
  getHomeRoles() {
    console.log(this.homeRoles);
    return this.homeRoles;
  }

  // GET FIND_YOUR ROLE ROLES
  getFindRoles() {
    console.log(this.findRoles);
    return this.findRoles;
  }
}
