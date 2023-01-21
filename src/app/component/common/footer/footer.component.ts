import { Component } from '@angular/core';
// import { FiInstagram } from 'react-icons/fi';
// import { FiLinkedin } from 'react-icons/fi';
// import { FiGithub } from 'react-icons/fi';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  goToLink(url: string) {
    window.open(url, '');
  }
  icon: any[] = [
    {
      id: 1,
      title: 'Instagram',
      Icons: 'fa-brands fa-instagram',
      href: 'https://www.instagram.com/fahmi_ali13/',
    },
    {
      id: 1,
      title: 'Linkedin',
      Icons: 'fa-brands fa-linkedin-in',
      href: 'https://www.linkedin.com/in/fahmialihusni/',
    },
    {
      id: 1,
      title: 'GitHub',
      Icons: 'fa-brands fa-github',
      href: 'https://github.com/Fahmiali99',
    },
  ];
}
