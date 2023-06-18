window.onload = function() {
    function createTableByArr(arr) {
      let table = document.createElement('table');
    
      for (let i = 0; i < arr.length; i++) {
        let row = table.insertRow();
        for (let j = 0; j < arr[i].length; j++) {
          let cell = row.insertCell();
          cell.textContent = arr[i][j];
        }
      }
    
      return table;
    }
    
    let div = document.querySelector('#elem');
    
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let table = createTableByArr(arr);
    
    div.appendChild(table);
    
    }