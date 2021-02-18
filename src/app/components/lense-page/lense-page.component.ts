import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lense-page',
  templateUrl: './lense-page.component.html',
  styleUrls: ['./lense-page.component.css']
})
export class LensePageComponent implements OnInit {
lenses: any[] = [{
  title: 'Bifocul',
  picture: 'data:image/png;base64,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',
  description: 'Great for reading and regular life',
},
{
  title: 'Bifocul',
  picture: 'data:image/png;base64,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',
  description: 'Great for reading and regular life',
},
{
  title: 'Bifocul',
  picture: 'data:image/png;base64,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',
  description: 'Great for reading and regular life',
}];

  constructor() { }

  ngOnInit(): void {
  }

}
