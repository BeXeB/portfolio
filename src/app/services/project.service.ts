import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      slug: 'angular-portfolio',
      name: 'Angular Portfolio',
      description: `My portfolio website built with Angular to showcase projects.
        It uses markdown files to store project details, which are loaded and rendered dynamically.`,
      imageUrl: '/assets/images/Angular.svg',
      repoUrl: 'https://github.com/BeXeB/portfolio',
      projectUrl: 'https://me.bexe.dev/',
      fileName: 'angular-portfolio.md',
    },
    {
      slug: 'graphite',
      name: 'Graphite',
      description: `A custom object-oriented programming language
        focused on simplifying graph manipulation with specialized operations
        and enabling graph visualization through DOT integration.`,
      imageUrl: '/assets/images/Graphite.svg',
      repoUrl: 'https://github.com/BeXeB/Graphite',
      fileName: 'graphite.md',
    },
    {
      slug: 'sc2-bot',
      name: 'MontyBot',
      description: `An intelligent agent capable of playing StarCraft II.
        The agent utilizes Monte-Carlo Tree Search for Action selection
        and Neural Networks to analyze the state of the game.`,
      imageUrl: '/assets/images/MontyBot.svg',
      repoUrl: 'https://github.com/BeXeB/SC2Bot',
      fileName: 'sc2-bot.md',
    },
    {
      slug: 'programmable-behaviours',
      name: 'Programmable Behaviours',
      description: `A system which allows developers to expose the code of objects,
        allowing players to interactively modify in-game behaviour
        through a custom scripting language.`,
      imageUrl: '/assets/images/ProgrammableBehaviours.svg',
      repoUrl: 'https://github.com/BeXeB/FinalProject',
      fileName: 'programmable-behaviours.md',
    },
    {
      slug: 'peregrination',
      name: 'Peregrination',
      description: `Peregrination is a game that teaches players the basics of programming.
         It introduces players the building blocks of all programs, such as statements, conditionals and loops.`,
      imageUrl: '/assets/images/Peregrination.svg',
      repoUrl: 'https://github.com/BeXeB/RoverGame',
      projectUrl: 'https://bexeb.itch.io/peregrination',
      fileName: 'peregrination.md',
    },
    {
      slug: 'xlsx-converter',
      name: 'XLSX Converter',
      description: `A tool that converts XLSX files of a custom format into a
      format suitable to import into a digital platform.`,
      imageUrl: '/assets/images/xlsx-converter.svg',
      repoUrl: 'https://github.com/BeXeB/xlsx-converter',
      projectUrl: 'https://bexe.dev/xlsx-converter/',
      fileName: 'xlsx-converter.md',
    },
    {
      slug: 'self-hosted-ai',
      name: 'Self-Hosted AI',
      description: `Experimenting with running LLMs locally using Ollama and LM Studio to reduce reliance on third-party APIs. Exploring the capabilities
        and limitations of the models that can be run on consumer hardware.`,
      imageUrl: '/assets/images/self-hosted-ai.svg',
      repoUrl: '',
      projectUrl: '',
      fileName: 'self-hosted-ai.md',
    },
    {
      slug: 'genshin-database-and-guides-site',
      name: 'Game Wiki Site (Genshin Impact)',
      description: `A Hungarian guide and wiki site for the game Genshin Impact,
        featuring character builds and gamepaly guides.`,
      imageUrl: '/assets/images/genshin-database-and-guides-site.svg',
      repoUrl: 'https://github.com/BeXeB/genshin-site',
      projectUrl: 'https://kk.bexe.dev/',
      fileName: 'genshin-database-site.md',
    },
  ];

  private projectMap: Map<string, Project> = new Map();

  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  private async loadProjects(): Promise<void> {
    for (const project of this.projects) {
      const content = await lastValueFrom(
        this.http.get(`assets/projects/${project.fileName}`, {
          responseType: 'text',
        }),
      );
      this.projectMap.set(project.slug, { ...project, content });
    }
  }

  getProjects(): Project[] {
    return this.projects;
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const cachedProject = this.projectMap.get(slug);
    if (cachedProject) {
      return cachedProject;
    }

    const project = this.projects.find((p) => p.slug === slug);

    if (!project) {
      return undefined;
    }

    const content = await lastValueFrom(
      this.http.get(`assets/projects/${project.fileName}`, {
        responseType: 'text',
      }),
    );

    const fullProject = { ...project, content };

    this.projectMap.set(slug, fullProject);
    return fullProject;
  }
}
