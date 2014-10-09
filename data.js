/**
 * Maps the spreadsheet cells into a dataframe, consisting of an array of rows (i.e. a 2d array)
 * In many cases we have empty rows or incomplete rows, so you can skip those by including 
 * the realrowlength parameter - it will skip any rows that don't have this length.
 * Alternatively, you can just choose to skip the first 'n' rows by setting the skip parameter.
 */
function mapEntries(json, realrowlength, skip){
  if (!skip) skip = 0;
  var dataframe = new Array();
  
  var row = new Array();
  for (var i=0; i < json.feed.entry.length; i++) {

    var entry = json.feed.entry[i];
    if (entry.gs$cell.col == '1') {
      if (row != null) {
        if ((!realrowlength || row.length === realrowlength) && (skip  === 0)){
           dataframe.push(row);
        } else {
           if (skip > 0) skip--;
        }
      }

      var row = new Array();
    }
    row.push(entry.content.$t);
  } 
  dataframe.push(row);
  
  return dataframe;
}
