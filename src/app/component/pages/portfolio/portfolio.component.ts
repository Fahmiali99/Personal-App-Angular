import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolio: any[] = [
    {
      id: 1,
      title: 'Botnet Website',
      story:
        'A botnet is a personal branding website for organizations, with the goal of making the organization know.',
      href: 'https://botnet-web.netlify.app/',
      image: '/assets/image/portfolio/botnet.png',
      technology: [
        {
          id: 1,
          title: 'HTML',
        },
        {
          id: 2,
          title: 'CSS',
        },
        {
          id: 3,
          title: 'Bootstrap',
        },
        {
          id: 4,
          title: 'Laravel Mix',
        },
      ],
    },
    {
      id: 2,
      title: 'Widdu Service',
      story:
        'Widdu Service is an application that provides coding, vector, and logo services.',
      href: 'https://github.com/Fahmiali99/Widdu-Service-Final',
      image: '/assets/image/portfolio/widdu.png',
      technology: [
        {
          id: 1,
          title: 'HTML',
        },
        {
          id: 2,
          title: 'CSS',
        },
        {
          id: 3,
          title: 'Bootstrap',
        },
        {
          id: 4,
          title: 'Laravel',
        },
      ],
    },
    {
      id: 3,
      title: 'SDN 1 Watukebo',
      story:
        'SDN 1 Watukebo is a company profile website for online registration and information.',
      href: 'https://sdn1watukebo.sch.id/',
      image: '/assets/image/portfolio/sekolah.png',
      technology: [
        {
          id: 1,
          title: 'HTML',
        },
        {
          id: 2,
          title: 'CSS',
        },
        {
          id: 3,
          title: 'Bootstrap',
        },
        {
          id: 4,
          title: 'Laravel',
        },
      ],
    },
    {
      id: 4,
      title: 'Booklogia',
      story:
        'A book review platform that serves as a gathering place for seeking new readings for their collections.',
      href: 'https://booklogia.vercel.app/',
      image: '/assets/image/portfolio/booklogia.png',
      technology: [
        {
          id: 1,
          title: 'Bootstrap',
        },
        {
          id: 2,
          title: 'Redux',
        },
        {
          id: 3,
          title: 'JavaScript',
        },
        {
          id: 4,
          title: 'React JS',
        },
      ],
    },
    {
      id: 5,
      title: 'Spotify Playlist',
      story:
        'This application adds a list of favorite songs by utilizing the Spotify API documentation.',
      href: 'https://github.com/Fahmiali99/callData-Spotify',
      image: '/assets/image/portfolio/spotify.png',
      technology: [
        {
          id: 1,
          title: 'Bootstrap',
        },
        {
          id: 2,
          title: 'Redux',
        },
        {
          id: 3,
          title: 'TypeScript',
        },
        {
          id: 4,
          title: 'React JS',
        },
      ],
    },
    {
      id: 6,
      title: 'Weddingly',
      story:
        'With Weddingly, you can discover a more intelligent way to plan your dream wedding using simple and modern.',
      href: 'https://weddingly.vercel.app/',
      image: '/assets/image/portfolio/weddingly.png',
      technology: [
        {
          id: 1,
          title: 'Tailwind CSS',
        },
        {
          id: 2,
          title: 'Daisyui',
        },
        {
          id: 3,
          title: 'TypeScript',
        },
        {
          id: 4,
          title: 'Next JS',
        },
      ],
    },
  ];

  ngOnInit(): void {}
}
