import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  @ViewChild('sCanvas') sCanvas : ElementRef;
  //potentially problematic
  private context : CanvasRenderingContext2D;
  private editorVal: string = "";
  private userInput = "";


  constructor() { }

  ngOnInit() {
    this.context = (this.sCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
  }

  onSubmit(){


  }

  private clearCanvas(){
    this.context.clearRect(0, 0, (this.sCanvas.nativeElement as HTMLCanvasElement).width, (this.sCanvas.nativeElement as HTMLCanvasElement).height);
  }

  private drawCircle() {
    this.context.beginPath();
    this.context.arc(100, 100, 10, 0, 2 * Math.PI, false);
    this.context.fillStyle = 'green';
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#003300';
    this.context.stroke();

    this.context.beginPath();
    this.context.arc(100, 50, 5, 0, 2 * Math.PI, false);
    this.context.fillStyle = 'blue';
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#003300';
    this.context.stroke();
  }



}
