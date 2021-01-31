## Table Body

Over time, a table can grow to contain a lot of data and become very long. When this happens, the table can be sectioned off so that it is easier to manage.

Long tables can be sectioned off using the table body element: ```<tbody>```.

The ```<tbody>``` element should contain all of the table’s data, excluding the table headings (more on this in a later exercise).
```
<table>
  <tbody>
    <tr>
      <th></th>
      <th>Saturday</th>
      <th>Sunday</th>
    </tr>
    <tr>
      <th>Morning</th>
      <td rowspan="1">Work</td>
      <td rowspan="1">Relax</td>
    </tr>
    <tr>
     <th>Afternoon</th>
    </tr>
    <tr>
      <th>Evening</th>
      <td>Dinner</td>
    </tr>
  </tbody>
</table>
```

### Output:
#
>
>![table body](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/table.jpg)
>
#

In the example above, all of the table data is contained within a table body element. Note, however, that the headings were also kept in the table’s body — we’ll change this in the next exercise.

## Table Head


In the last exercise, the table’s headings were kept inside of the table’s body. When a table’s body is sectioned off, however, it also makes sense to section off the table’s column headings using the ```<thead>``` element.

```
<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col">Saturday</th>
      <th scope="col">Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Morning</th>
      <td rowspan="1">Work</td>
      <td rowspan="1">Relax</td>
    </tr>
    <tr>
     <th scope="row">Afternoon</th>
    </tr>
    <tr>
      <th scope="row">Evening</th>
      <td>Dinner</td>
    </tr>
  </tbody>
</table>
```

### Output:
#
>
>![table body](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/table.jpg)
>
#

In the example above, the only new element is ```<thead>```. The table headings are contained inside of this element. Note that the table’s head still requires a row in order to contain the table headings.

Additionally, only the column headings go under the ```<thead>``` element. We can use the ```scope``` attribute on ```<th>``` elements to indicate whether a ```<th>``` element is being used as a ```"row"``` heading or a ```"col"``` heading.

## Table Footer

The bottom part of a long table can also be sectioned off using the ```<tfoot>``` element.

```
<table>
  <thead>
    <tr>
      <th>Quarter</th>
      <th>Revenue</th>
      <th>Costs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Q1</th>
      <td>$10M</td>
      <td>$7.5M</td>
    </tr>
    <tr>
      <th>Q2</th>
      <td>$12M</td>
      <td>$5M</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Total</th>
      <td>$22M</td>
      <td>$12.5M</td>
    </tr>
  </tfoot>
</table>
```

### Output:
#
>
>![table body](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/tableFooter.jpg)
>
#

In the example above, the footer contains the totals of the data in the table. Footers are often used to contain sums, differences, and other data results.