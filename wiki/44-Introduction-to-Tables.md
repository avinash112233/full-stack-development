There are many websites on the Internet that display information like stock prices, sports scores, invoice data, and more. This data is naturally tabular in nature, meaning that a table is often the best way of presenting the data.

In this part of the course, we’ll learn how to use the HTML `<table>` element to present information in a two-dimensional table to the users.

## Create a Table

Before displaying data, we must first create the table that will contain the data by using the ```<table>``` element.
```
<table>

</table>
```
The ```<table>``` element will contain all of the tabular data we plan on displaying.

## Table Rows
In many programs that use tables, the table is already predefined for you, meaning that it contains the rows, columns, and cells that will hold data. In HTML, all of these components must be created.

The first step in entering data into the table is to add rows using the table row element: ```<tr>```.
```
<table>
  <tr>
  </tr>
  <tr>
  </tr>
</table>
```

In the example above, two rows have been added to the table.

## Table Data

Rows aren’t sufficient to add data to a table. Each cell element must also be defined. In HTML, you can add data using the table data element: ```<td>```.

```
<table>
  <tr>
    <td>73</td>
    <td>81</td>
  </tr>
</table>
```

In the example above, two data points (```73``` and ```81```) were entered in the one row that exists. By adding two data points, we created two cells of data.

When the table were displayed in the browser, it would show a table with one row and two columns.

### Output:
#
>
>![table data](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/tableData.jpg)
>
# 
## Table Headings

Table data doesn’t make much sense without titles to describe what the data represents.

To add titles to rows and columns, you can use the *table heading* element: ```<th>```.

The table heading element is used just like a table data element, except with a relevant title. Just like table data, a table heading must be placed within a table row.
```
<table>
  <tr>
    <th></th>
    <th scope="col">Saturday</th>
    <th scope="col">Sunday</th>
  </tr>
  <tr>
    <th scope="row">Temperature</th>
    <td>73</td>
    <td>81</td>
  </tr>
</table>
```

### Output:
#
>
>![table data](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/tableHeading.jpg)
>
# 

What happened in the code above?

First, a new row was added to hold the three headings: a blank heading, a ```Saturday``` heading, and a ```Sunday``` heading. The blank heading creates the extra table cell necessary to align the table headings correctly over the data they correspond to.

In the second row, one table heading was added as a row title: ```Temperature```.

Note, also, the use of the scope attribute, which can take one of two values:

1. ```row``` - this value makes it clear that the heading is for a row.
2. ```col``` - this value makes it clear that the heading is for a column.

HTML code for tables may look a little strange at first, but analyzing it piece by piece helps make the code more understandable.

## Spanning Columns

What if the table contains data that spans multiple columns?

For example, a personal calendar could have events that span across multiple hours or even multiple days.

Data can span columns using the ```colspan``` attribute. The attributes accept an integer (greater than or equal to 1) to denote the number of columns it spans across.
```
<table>
  <tr>
    <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
  </tr>
  <tr>
    <td colspan="2">Out of Town</td>
    <td>Back in Town</td>
  </tr>
</table>
```
In the example above, the data ```Out of Town``` spans the ```Monday``` and ```Tuesday``` table headings using the value 2 (two columns). The data ```Back in Town``` appear only under the ```Wednesday``` heading.

### Output:
#
> 
>![table data](https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/spanningColumn.jpg)
>
# 