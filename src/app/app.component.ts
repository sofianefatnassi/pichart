import { Component } from '@angular/core';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl';

@Component({
    selector: 'my-app',
    template: `
    <kendo-chart>
      <kendo-chart-legend position="bottom"></kendo-chart-legend>
      <kendo-chart-series>
        <kendo-chart-series-item
          type="pie"
          [data]="pieData"
          field="value"
          categoryField="category">
            <kendo-chart-series-item-labels
            [content]="labelContent"
            color="#fff" background="transparent" position="center">
          </kendo-chart-series-item-labels>
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
    public pieData: any[] = [
        { category: 'test', value: '57,06' },
        { category: 'test2', value: '42,94' }
    ];

    constructor(private intl: IntlService) {
        this.labelContent = this.labelContent.bind(this);
    }

    public labelContent(args: LegendLabelsContentArgs): string {
        return `${(args.dataItem.value)+'%'}`;
    }
}
