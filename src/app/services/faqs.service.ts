import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  role: any [ ] = [ ];

  // QUESTIONS
  questions: any [ ] = [
    {
      theme: 'Application',
      questions: [
        {
          id: '1',
          question: 'What are the requirements to participate in the BTP?',
          answer: 'In order to take part in the BTP, students must be aged 18 years or over by Games-time (before their first day of employment); be a student in good standing enrolled at a Japanese university; and have at least an intermediate knowledge of English.',
        },
        {
          id: '2',
          question: 'How can I apply to the BTP?',
          answer: 'Completing the online application form is the only method to apply for the programme. Applications sent by email will not be considered.',
        },
        {
          id: '3',
          question: 'When does the application process start?',
          answer: 'The Online Application Portal will open in May 2019. If you don’t want to miss the launch date, sign up to our mailing list <a href="https://www.obs.tv/btp/apply">here</a> and receive an email notification.',
        },
        {
          id: '4',
          question: 'Is there a limit to the number of students that are admitted to the BTP?',
          answer: 'Yes. Applications are accepted on a first-come, first-served basis, on the condition that you satisfy the application requirements. Once full, OBS will close the online application portal and no further applications will be accepted.',
        },
        {
          id: '5',
          question: 'I am not sure about my level of English. Can I still apply?',
          answer: 'Yes, of course! The application process includes a quick English test to help assess your level. Please remember that, during Games-time, you will interact with people from all other the world and English will be your main working language. However, you are not expected to be perfectly fluent!',
        },
        {
          id: '6',
          question: 'My field of study is different from Broadcasting. Am I eligible for the programme?',
          answer: 'Yes. The BTP is not dedicated to students in Broadcasting. The OBS team is composed of people from various backgrounds. So are our BTP students!',
        },
        {
          id: '7',
          question: 'I am currently a Japanese exchange student overseas. Am I eligible for the programme?',
          answer: 'Yes. As long as you are currently enrolled in a Japanese university, you can apply for the BTP, whether you are currently residing in Japan or not.',
        },
        {
          id: '8',
          question: 'I am a foreign student studying in Japan. Can I apply?',
          answer: 'Yes. You can apply for the BTP on the condition you are enrolled to a full university programme in a Japanese university.',
        },
        {
          id: '9',
          question: 'I am a recent graduate from the university. Can I apply?',
          answer: 'Yes. You can apply for the BTP on the condition you have recently graduated from a Japanese university and been out of the university for less than two years.',
        },
        {
          id: '10',
          question: 'My university is not located in Tokyo. Can I still apply?',
          answer: 'Yes. You can apply on the condition you meet all the requirements and have the possibility to attend the training in Tokyo.',
        },
        {
          id: '11',
          question: 'What are the “partner” universities?',
          answer: 'OBS has entered into agreements with several Japanese universities, and students attending these institutions will be given priority placement in the training workshops. These universities include….. LIST',
        }
      ]
    },
    {
      theme: 'Training',
      questions: [
        {
          id: '1',
          question: 'What does the BTP training consist of?',
          answer: 'The BTP training workshops consist of a general session and, for most of the positions, a specialised training seminar.',
        },
        {
          id: '2',
          question: 'Can I choose the dates for the general session and specialised training?',
          answer: 'General sessions and training will be planned for different dates, including weekends, to ensure that you can participate. These sessions and training will be held from October-November 2019. You will be able to choose the dates that suit you best during the application process. However, as the positions are filled on a first-come, first-served basis, some sessions might no longer be available.',
        },
        {
          id: '3',
          question: 'Is attendance compulsory?',
          answer: 'Attendance to both the general session and training is mandatory. If you cannot attend the training you have been assigned to, please contact the BTP team, explaining the reason. <br> Please note some positions do not include a specialised training workshop. Attendance to the general session remains compulsory.',
        },
        {
          id: '4',
          question: 'Will the general session be held on the same day as the specialised training workshop?',
          answer: 'No. The general session will be held prior to your training workshop, on a separate day.',
        },
        {
          id: '5',
          question: 'How long do the general session and specialised training workshop last?',
          answer: 'The general session lasts between three and four hours and is organised either as a morning or afternoon session. The duration of the specialised training workshops varies depending on the area you will train for – between one and five days.',
        },
        {
          id: '6',
          question: 'Has the location for the training session been decided?',
          answer: 'The general sessions will take place in one of our partner universities. The location of the specialised training workshops may vary. Applicants will receive a confirmation email with the date, time and location of the session they are assigned to attend.',
        },
      ]
    },
    {
      theme: 'Games-time',
      questions: [
        {
          id: '1',
          question: 'Is the BTP a volunteer programme?',
          answer: 'No. BTP students will be working alongside the OBS teams in a paid position.',
        },
        {
          id: '2',
          question: 'I saw positions were either competition venue or IBC based. What does IBC mean?',
          answer: 'IBC stands for International Broadcast Centre. The IBC is the home base for the Rights Holding Broadcasters (RHBs) and the central location for all broadcast operations and the distribution of the television and radio signals for Olympic coverage. OBS is responsible for servicing the on-site requirements of the RHBs at the IBC. It is a key non-competition venue and one of the first to become fully operational. During Games-time, it is open 24/7. The IBC hosts a variety of technical and administrative facilities for both OBS and RHB personnel including edit suites, control rooms, studios and offices. For the Tokyo 2020 Olympics, the IBC is located at the Tokyo Big Sight convention centre.',
        },
      ]
    }

  ];

  constructor() { }

  // GET QUESTIONS
  getQuestions() {
    console.log(this.questions);
    return this.questions;
  }
}
