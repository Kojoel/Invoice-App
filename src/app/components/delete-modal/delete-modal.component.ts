import { Component } from '@angular/core';
import { DeleteModalService } from '../../services/delete-modal.service';

@Component({
  selector: 'app-delete-modal',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss'
})
export class DeleteModalComponent {

  constructor(public deleteModalService: DeleteModalService) {}


  
}
