import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  goToLink(url: string) {
    window.open(url, '');
  }
  contact: any[] = [
    {
      id: 1,
      title: 'Contact',
      about:
        'If you want to collaborate on a project related to technology, you can contact me through social media below. Thank you for visiting my profile.',
      subContact: [
        {
          id: 1,
          title: 'Email',
          href: 'https://instagram.com/fahmi_ali13/',
        },
        {
          id: 2,
          title: 'Github',
          href: 'https://github.com/Fahmiali99',
        },
        {
          id: 3,
          title: 'Instagram',
          href: 'https://instagram.com/fahmi_ali13/',
        },

        {
          id: 4,
          title: 'Dribbble',
          href: 'https://dribbble.com/Fahmiali13',
        },
        {
          id: 5,
          title: 'Linkedin',
          href: 'https://linkedin.com/in/fahmialihusni/',
        },
      ],
    },
  ];
}
