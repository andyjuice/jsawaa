import {Component, ViewChild} from '@angular/core';

@Component({
  selector:'app-editor',
  templateUrl: './editor.component.html'

})
export class EditorComponent {
  @ViewChild('editor') editor;
  text: string="";

  userInput="";

  ngAfterViewInit() {
       this.editor.setTheme("eclipse");

       this.editor.getEditor().setOptions({
           enableBasicAutocompletion: true
       });

       this.editor.getEditor().commands.addCommand({
           name: "showOtherCompletions",
           bindKey: "Ctrl-.",
           exec: function (editor) {

           }
       })
   }

  onSubmit(editor){
    this.userInput = this.text;
  }
}
