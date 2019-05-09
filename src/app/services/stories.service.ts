import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  // STORIES
  stories: any [ ] = [
    {
      id: '1',
      type: 'image',
      title: 'Lorem ipsum dolor',
      thumbnail: 'assets/stories/_46I1657.jpg',
      text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse blandit',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '2',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-white',
      video: '',
      videoThumb: '',
      blockquote: '“Being able to experience the Games from behind-the-scenes was truly incredible.\n' +
        'But personally, if you ask me about the best part of the BTP, it is that you can work\n' +
        'with people from all over the world and various backgrounds. One of my goals is to\n' +
        'work for a multinational company, and I got a first taste of working life in an\n' +
        'international environment, and how exhilarating it can be! I learnt so much from\n' +
        'everyone!”',
      blockquoteFooter: 'Semi, Audio Assistant',
    },
    {
      id: '3',
      type: 'video',
      title: '',
      thumbnail: '',
      text: '',
      class: '',
      video: 'assets/stories/videos/01/testimonial01.mp4',
      videoThumb: 'assets/stories/videos/01/thumb01.jpg',
      blockquote: '',
      blockquoteFooter: ''
    },
    {
      id: '4',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/_T3I4463.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '5',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/0E1A0296.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '6',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/1608211945_2C5A7087_GRD.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '7',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-og_blue',
      video: '',
      videoThumb: '',
      blockquote: '“Being a part of the BTP was the greatest choice I have made so far in life. In all\n' +
        'seriousness it not only taught me so many things about both broadcast and business,\n' +
        'but it was a whole month spent with a smile on my face - even when I had long days\n' +
        'at work! Being a part of the 2012 Games will be something I hold with me forever, will\n' +
        'compliment my CV perfectly, and was overall one of the most enjoyable experiences\n' +
        'I have ever encountered."',
      blockquoteFooter: 'Naomi, Production Assistant',
    },
    {
      id: '8',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/1608212002_2C5A7174_GRD.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '9',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-white',
      video: '',
      videoThumb: '',
      blockquote: '“When you are a BTP student, you kind of have first-hand experience in everything,\n' +
        'and because you work with people who have years and years of experience in the\n' +
        'media industry, you get to learn a lot from them.”',
      blockquoteFooter: 'Nur, Camera Assistant',
    },
    {
      id: '10',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/BTPweb.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '11',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/DSC07812.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '12',
      type: 'video',
      title: '',
      thumbnail: '',
      text: '',
      class: '',
      video: 'assets/stories/videos/04/testimonial04.mp4',
      videoThumb: 'assets/stories/videos/04/thumb04.jpg',
      blockquote: '',
      blockquoteFooter: ''
    },
    {
      id: '13',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-og_yellow',
      video: '',
      videoThumb: '',
      blockquote: '“THANK YOU VERY MUCH for this unique opportunity! Working at the Sochi Games\n' +
        'was a life-changing experience. Now I am sure about my career choice: I want to\n' +
        'work in sports broadcasting! The crew I worked with was amazing - so many\n' +
        'professionals taking time to explain to you how things work and ready to help you\n' +
        'anytime you needed. I’m very grateful.”',
      blockquoteFooter: 'Ekaterina, Venue Assistant',
    },
    {
      id: '14',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/1608211958_2C5A7158_GRD.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '15',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/image3.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '16',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-og_yellow',
      video: '',
      videoThumb: '',
      blockquote: '“The BTP was the greatest thing that I have ever done during my university life! Not\n' +
        'only me but also people around me are so proud of what I have done at the\n' +
        'Olympics. I learnt so much more than what I expected. To any prospective students, I\n' +
        'want to tell them not to hesitate a second, and join the programme, because this is a\n' +
        'unique experience.”',
      blockquoteFooter: 'Sung, Games Services Assistant',
    },
    {
      id: '17',
      type: 'video',
      title: '',
      thumbnail: '',
      text: '',
      class: '',
      video: 'assets/stories/videos/05/testimonial05.mp4',
      videoThumb: 'assets/stories/videos/05/thumb05.png',
      blockquote: '',
      blockquoteFooter: ''
    },
    {
      id: '18',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/London2012_BTP_2.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '19',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/News_BTP_Workshops.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '20',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-og_green',
      video: '',
      videoThumb: '',
      blockquote: '“Working at the Olympics was exhilarating, exhausting and completely excellent.\n' +
        'Knowing I contributed towards the broadcasting of the greatest show on earth, and\n' +
        'that as a team we succeeded, will always remain special to me. I learnt more than I\n' +
        'could have imagined; how to use professional camera equipment and editing\n' +
        'software, how the broadcasting industry operates and a super human ability to find\n' +
        'patience when sleep deprived and my chocolate had run out!”',
      blockquoteFooter: 'Chantelle, OCN Assistant',
    },
    {
      id: '21',
      type: 'image',
      title: 'Lorem ipsum dolor',
      thumbnail: 'assets/stories/_53A7463.jpg',
      text: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse blandit diam id',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '22',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-og_green',
      video: '',
      videoThumb: '',
      blockquote: '“To any future students considering taking part in the BTP, I would like to tell them\n' +
        'not to hesitate one second, it is a really rewarding opportunity. The BTP will give you\n' +
        'the opportunity to grow and learn so many valuable skills that you won\'t learn in the\n' +
        'classroom!”',
      blockquoteFooter: 'Sung, Human Resources Assistant',
    },
    {
      id: '23',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/newsTakeATour.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '24',
      type: 'video',
      title: '',
      thumbnail: '',
      text: '',
      class: '',
      video: 'assets/stories/videos/02/testimonial02.mp4',
      videoThumb: 'assets/stories/videos/02/thumb02.jpg',
      blockquote: '',
      blockquoteFooter: ''
    },
    {
      id: '25',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-og_red',
      video: '',
      videoThumb: '',
      blockquote: '“I gained invaluable experience in all aspects of broadcasting: from camera to the\n' +
        'best way to carry a tripod! No day is the same. Every day is exciting. It is hard work\n' +
        'but incredibly fun and rewarding.”',
      blockquoteFooter: 'Tom, Camera Assistant',
    },
    {
      id: '26',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/AFrontRow.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '27',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-og_black',
      video: '',
      videoThumb: '',
      blockquote: '"To work for the Olympics is a lifelong lasting memory that will not be beaten very\n' +
        'easily. Although the days are long and tiring and by the end of the four weeks you\n' +
        'need a duvet day (or two) to recover it is really worth it! After doing London 2012 I\n' +
        'have decided that staying in sports is a career direction I want to stay in for the time\n' +
        'being."',
      blockquoteFooter: 'Ruth, OCN Assistant',
    },
    {
      id: '28',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/image1.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '29',
      type: 'video',
      title: '',
      thumbnail: '',
      text: '',
      class: '',
      video: 'assets/stories/videos/03/testimonial03.mp4',
      videoThumb: 'assets/stories/videos/03/thumb03.jpg',
      blockquote: '',
      blockquoteFooter: ''
    },
    {
      id: '30',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/SPA_C23BTPteam.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '31',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-white',
      video: '',
      videoThumb: '',
      blockquote: '“Have you ever imagined working with people from all around the world? Or be part\n' +
        'of something bigger than you? Have you ever thought that you could do that at 20?\n' +
        'Thanks to OBS I had the most wonderful job with the most amazing crew, they\n' +
        'became my family and I miss them every day!”',
      blockquoteFooter: 'Luisa, Broadcaster Services Assistant',
    },
    {
      id: '32',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/_46I8580.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
    {
      id: '33',
      type: 'video',
      title: '',
      thumbnail: '',
      text: '',
      class: '',
      video: 'assets/stories/videos/02/testimonial02.mp4',
      videoThumb: 'assets/stories/videos/02/thumb02.jpg',
      blockquote: '',
      blockquoteFooter: ''
    },
    {
      id: '34',
      type: 'blockquote',
      title: '',
      thumbnail: '',
      text: '',
      class: 'bg-og_red',
      video: '',
      videoThumb: '',
      blockquote: '“When I first attended the training session, I did not imagine that working as a BTP\n' +
        'student in the Olympics would be such a turning point in my life and future career.\n' +
        'Working alongside very experienced broadcast professionals, I could learn a lot\n' +
        'about broadcast journalism: conducting interviews, finding feature story topics, and\n' +
        'interacting with people from different cultures and countries. This experience made\n' +
        'me realise how passionate I was about communications. As a result, I decided to\n' +
        'apply for a student reporter position a few weeks after the Games, and I got\n' +
        'accepted! I will also be grateful for the opportunity I was given to be part of the BTP\n' +
        'during the PyeongChang 2018 Games.”',
      blockquoteFooter: 'Yeeun, Production Assistant',
    },
    {
      id: '35',
      type: 'image',
      title: '',
      thumbnail: 'assets/stories/File859.jpg',
      text: '',
      class: '',
      video: '',
      videoThumb: '',
      blockquote: '',
      blockquoteFooter: '',
    },
  ];

  constructor() { }

  // GET STORIES
  getStories() {
    console.log(this.stories);
    return this.stories;
  }
}
