import { OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '../../models/action';
import { ActionConfig } from '../../models/action-config';
import { Filter } from '../../filter/filter';
import { FilterConfig } from '../../filter/filter-config';
import { FilterEvent } from '../../filter/filter-event';
import { SortConfig } from '../../sort/sort-config';
import { SortField } from '../../sort/sort-field';
import { SortEvent } from '../../sort/sort-event';
import { ToolbarConfig } from '../toolbar-config';
import { View } from '../../models/view';
import { ViewConfig } from '../../models/view-config';
export declare class ToolbarExampleComponent implements OnInit {
    private router;
    actionsTemplate: TemplateRef<any>;
    actionConfig: ActionConfig;
    actionsText: string;
    allItems: any[];
    filterConfig: FilterConfig;
    filtersText: string;
    items: any[];
    isAscendingSort: boolean;
    separator: Object;
    sortConfig: SortConfig;
    currentSortField: SortField;
    toolbarConfig: ToolbarConfig;
    viewConfig: ViewConfig;
    view: View;
    weekDayQueries: any[];
    monthVals: any;
    weekDayVals: any;
    constructor(router: Router);
    ngOnInit(): void;
    doAdd(): void;
    handleAction(action: Action): void;
    optionSelected(option: number): void;
    applyFilters(filters: Filter[]): void;
    filterChanged($event: FilterEvent): void;
    filterFieldSelected($event: FilterEvent): void;
    matchesFilter(item: any, filter: Filter): boolean;
    matchesFilters(item: any, filters: Filter[]): boolean;
    filterQueries($event: FilterEvent): void;
    compare(item1: any, item2: any): number;
    sortChanged($event: SortEvent): void;
    viewSelected(view: View): void;
}