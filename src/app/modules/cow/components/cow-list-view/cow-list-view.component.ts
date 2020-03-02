import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CreateCow, DelCowById, GetCows, UpdateCow } from '../../redux/actions/cow-actions';
import { CowFilter } from '../../../../shared/models/cow-models';
import { cows } from '../../redux/reducers';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';


@Component({
  selector: 'app-cow-list-view',
  templateUrl: './cow-list-view.component.html',
  styleUrls: ['./cow-list-view.component.scss']
})
export class CowListViewComponent implements OnInit {

  public filter: CowFilter = {
    offset: 0,
    limit: 5
  };

  public cows$: Observable<any>;

  public displayedColumns = [
    'cowId',
    'healthIndex',
    'endDate',
    'minValueDateTime',
    'type',
    'animalId',
    'eventId',
    'deletable',
    'lactationNumber',
    'daysInLactation',
    'ageInDays',
    'startDateTime',
    'reportingDateTime',
    'action'
  ];


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private readonly store: Store<any>,
    public dialog: MatDialog
  ) {
    this.cows$ = this.store.pipe(select(cows));
  }

  ngOnInit() {
    this.getCows(this.filter);
  }

  public paginate(e): void {
    this.getCows({ offset: e.pageIndex, limit: e.pageSize });
  }

  private getCows(filter: CowFilter): void {
    this.store.dispatch(new GetCows(filter));
  }

  public openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      width: '300px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.createNewCow(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  private createNewCow(row): void {
    this.store.dispatch(new CreateCow(row));
  }
  private updateRowData(row): void {
    this.store.dispatch(new UpdateCow(row));
  }

  private deleteRowData(row): void {
    this.store.dispatch(new DelCowById(row.cowId));
  }

}
