import { Component, OnInit } from '@angular/core';
import { Iportfolio } from 'src/app/layout/models/iportfolio';
import { ReposService } from 'src/app/layout/services/repos.service';

export interface Ibehance {
  title: string;
  link: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public portfolioArr: Array<Iportfolio> = [
    {
      title: 'Ernest & Young',
      description: "Market Segmentation Database (MSD) System for internal management of commercial campaigns for monitoring corporate clients and status reporting through a UI supported by dynamic tables with filters, forms for user/role or client management, token management and integration with API.",
      tech: 'Angular | .Net Core',
      time: "10 Sprints ",
      specifications: '100% Migration Excel app to SPA',
      role: "Fontend Lead",
      link: "https://www.ey.com/es_co",
      image: "https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/generic/logos/20170526-EY-Digital-Brand.svg"
    },
    {
      title: 'Autodesk ',
      description: 'Fusion Life Cycle | FLC / PLM: Web application for object parameterization and management of mixed systems based on the construction of 3D models (CAD line: Maya, Inventor, Revit, 3DSMax) ',
      tech: 'Angularjs | React | Java J2EE',
      time: '6 Sprints',
      specifications: 'Maintenance and components migration to React js',
      role: "Fontend Development",
      link: "https://www.autodeskfusionlifecycle.com/en/",
      image: "../../../assets/images/adsk.png"
    },
    {
      title: 'Direct TV',
      description: 'Development of the Latam web platform (Colombia, Argentina, Chile, Ecuador, Uruguay) for products and commercial scheme through integration with CMS Adobe Experience Manager and Rhino/Java. Activities: UI component development, API integration, role management, template development. ',
      tech: 'AEM | JS | Java',
      time: "6 Sprints",
      specifications: 'UI components and templates for public sites',
      role: "Fontend Development",
      link: "https://www.directv.com.co/",
      image: "../../../assets/images/dtv.svg"
    },
    {
      title: 'Rimac',
      description: 'Development of a website and modules for the quotation of products and services, creation of editable components, management of templates, development of Layout',
      tech: 'AEM | JS | React | Java',
      time: "8 Sprints",
      specifications: 'Development UI components and templates for public site',
      role: "Fontend Development",
      link: "https://www.rimac.com/",
      image: "../../../assets/images/rimac.png"
    }
  ];



  public behanceArr: Array<Ibehance> = [
    {
      title: 'Kimed plataforma de gestión en salud',
      link: "https://www.behance.net/gallery/66109579/Plataforma-web-Kimed",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/b1f3ec66109579.Y3JvcCwxMzQ3LDEwNTQsMCww.jpg"
    },
    {
      title: 'UDI sitio Web institucional',
      link: "https://www.behance.net/gallery/29039283/Pagina-Web-UDI",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/9e26c729039283.55def5cba2a55.png"
    },
    {
      title: 'Gestualeap Interprete de Señas NUI ',
      link: "https://www.behance.net/gallery/62493263/Gestualeap-10-wwwgestualeapco",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/19623a62493263.Y3JvcCwxNDE3LDExMDksMTc4LDA.jpg"
    },
    {
      title: 'ESE Envíos Nacionales',
      link: "https://www.behance.net/gallery/66111313/Diseno-de-Plataforma-web-movil-%28UI-Design%29",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/c51bfa66111313.Y3JvcCw3MTYsNTYwLDEyOTAsMjI0.png"
    }
  ]

  public project: Iportfolio = this.portfolioArr[0];

  constructor(private repoService: ReposService) { }

  ngOnInit(): void {
  }

  getPortfolio(project: Iportfolio) {
    this.portfolioArr.map(item => {
      if (item.title === project.title) {
        this.project = item;
      }
    });
  }


}
