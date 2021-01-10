import { Component, OnInit } from '@angular/core';
import { Iportfolio } from 'src/app/layout/models/iportfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public portfolioArr: Array<Iportfolio> = [
    {
      title: 'Ernest & Young',
      description: "Market Segmentation Database (MSD) Sistema para gestión interno de campañas comerciales para el seguimiento de clientes corporativos y reporte de estados que por medio de UI apoyado en tablas dinámicas con filtros, formularios para gestión de usuarios/ roles o clientes, gestión de tokens e integración con API.",
      tech: 'Angular | .Net Core',
      time: "10 Sprints ",
      specifications: '100% Migration Excel app to SPA',
      role: "Fontend Lead",
      link: "https://www.ey.com/es_co",
      image: "https://assets.ey.com/content/dam/ey-sites/ey-com/en_gl/generic/logos/20170526-EY-Digital-Brand.svg"
    },
    {
      title: 'Autodesk ',
      description: 'Fusion Life Cycle | FLC / PLM: Aplicación web de parametrización de objetos y gestión de sistemas mixtos basados en construcción de modelos 3D (Linea CAD: Maya, Inventor, Revit, 3DSMax ) ',
      tech: 'Angularjs | React | Java J2EE',
      time: '6 Sprints',
      specifications: 'Maintenance and components migration to React js',
      role: "Fontend Development",
      link: "https://www.autodeskfusionlifecycle.com/en/",
      image: "../../../assets/images/adsk.png"
    },
    {
      title: 'Direct TV',
      description: 'Desarrollo de plataforma  web Latam (Colombia, Argentina, Chile, Ecuador, Uruguay) para productos y esquema comercial mediante integración con CMS Adobe Experience Manager y Rhino/Java. Actividades: desarrollo de componentes UI, integración con API, gestión de roles, desarrollo de plantillas.  ',
      tech: 'AEM | JS | Java',
      time: "6 Sprints",
      specifications: 'UI components and templates for public sites',
      role: "Fontend Development",
      link: "https://www.directv.com.co/",
      image: "../../../assets/images/dtv.svg"
    },
    {
      title: 'Rimac',
      description: 'Desarrollo de sitio web y módulos para cotización de productos y servicios, creación de componentes editables, gestión de templates, desarrollo de Layout ',
      tech: 'AEM | JS | React | Java',
      time: "8 Sprints",
      specifications: 'Development UI components and templates for public site',
      role: "Fontend Development",
      link: "https://www.rimac.com/",
      image: "../../../assets/images/rimac.png"
    }
  ];

  public project: Iportfolio = this.portfolioArr[0];

  constructor() { }

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
