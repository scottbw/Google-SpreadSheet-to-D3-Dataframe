Google-SpreadSheet-to-D3-Dataframe
==================================

Converts Google Spreadsheet JSON into an array usable with D3

To use it, fetch Google Spreadsheet data using the JSON API (e.g. [using the JSONP method](https://blogs.it.ox.ac.uk/acit-rs-team/2014/10/08/how-to-get-data-out-of-a-google-spreadsheet-using-jsonp/)), and call this function like so:

    var dataframe = mapEntries(data,row_length,skip);

Where:

_data_ is the JSON object returned from the API

_row_length_ allows you to specify whether to restrict the data set to only rows with this number of cells (useful for ommitting summary rows), or set this to null to return rows of any number of cells.

_skip_ is the number of rows to skip at the beginning of the spreadsheet.

The function will return an array of arrays (i.e. a two-dimensional array) representing the spreadsheet cells. This makes it much easier to then process the cells using [D3js](http://d3js.org/).
