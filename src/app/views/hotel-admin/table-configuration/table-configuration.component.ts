import { Component } from "@angular/core";
import { TableService } from "../../../service/table.service";
import { Hotel } from "../../../models/tabelConfiguration.model";
@Component({
    selector: 'app-table-configuration',
    templateUrl: './table-configuration.component.html',
})
export class TableConfigurationComponent {
    table: Hotel;
    tableList: Hotel[] = [];
    hallType: { label: string; value: boolean; }[];
    tableShape: { label: string; value: string; }[];
    constructor(public tableSvc: TableService){}
    ngOnInit(): void{
        this.hallType = [{ label: 'AC', value: true },
        { label: 'Non AC', value: false }];
        this.tableShape = [{ label: 'Sqaure', value: 'sqaure' },
        { label: 'Circle', value: 'circle' }];
        this.loadTabaleData();
    }

    loadTabaleData(){
        this.tableSvc.getTableData().subscribe(res => {
            this.tableList = res;
            console.log(this.tableList);
        })
    }

}