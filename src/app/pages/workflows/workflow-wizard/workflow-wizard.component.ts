import { Component, OnInit } from '@angular/core';
import {ActionViewModel} from '../../../core/dtos/landing-dialog-dtos';

@Component({
  selector: 'app-workflow-wizard',
  templateUrl: './workflow-wizard.component.html',
  styleUrls: ['./workflow-wizard.component.scss']
})
export class WorkflowWizardComponent implements OnInit {
  searchPlaceHolder: string = '';
  header: string = '';
  waiting: boolean = false;
  barActions: ActionViewModel[] = [];
  sideActions: ActionViewModel[] = [];
  mainActions: ActionViewModel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.waiting = true;
    setTimeout(() => this.waiting = false, 1000);
    this.setFakeData();
  }

  private setFakeData() {
    this.header = 'Choose or create a workflow to continue with';
    this.searchPlaceHolder = 'Search workflows';
    this.barActions = [
      {
        title: 'New Workflow',
        icon: 'ti ti-wand'
      },
      {
        title: 'Import Workflows',
        icon: 'ti ti-packge-import'
      }
    ];
    this.sideActions = [
      {
        title: 'Workflows',
        selected: true,
        subActions: [
          {
            selected: true,
            title: 'On new message received',
            subTitle: 'Send a welcome message if user is messaging fot the first time',
            url: '/app/123456790/workflows/123456790/designer',
            icon: 'ti ti-arrows-split-2'
          },
          {
            title: 'On consultation completed',
            subTitle: 'Send a quote to user when treatment plan is generated',
            url: '/app/123456790/workflows/123456790/designer',
            icon: 'ti ti-arrows-split-2'
          },
        ]
      },
      {
        title: 'Templates',
        subActions: [
          {
            title: 'Template 1',
            subTitle: 'This is a description for the showing template',
            icon: 'ti ti-shape-2'
          },
          {
            title: 'Template 2',
            subTitle: 'This is a description for the showing template',
            icon: 'ti ti-shape-2'
          },
          {
            title: 'Template 3',
            subTitle: 'This is a description for the showing template',
            icon: 'ti ti-shape-2'
          },
        ]
      },
      {
        title: 'Help',
        subActions: [
          {
            title: 'What is workflow',
            subTitle: 'This is a description for the showing template',
            icon: 'ti ti-alert-triangle'
          },
          {
            title: 'Micro services and integrations',
            subTitle: 'How can micro services are integrated to workflow engine',
            icon: 'ti ti-plug-connected'
          }
        ]
      }
    ];
    this.mainActions = [];
  }
}