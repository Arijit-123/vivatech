import React from 'react'
import * as Filesaver from 'file-saver';
import XLSX from 'sheetjs-style';
import {Tooltip} from 'react-tooltip';
const Excelexport = ({exceldata,fileName}) => {
    const fileType='application/vnd.openxmlformats-officedocument.spreadsheet.ml.sheet;charset=UTF-8';
    const fileExtension ='.xlsx';
    const exporttexcel=async()=>{
        const ws=XLSX.utils.json_to_sheet(exceldata);
        const wb={Sheets: {'data': ws},SheetNames:['data']};
        const excelBuffer=XLSX.write(wb,{ bookType:'xlsx',type:'array'});
        const data= new Blob([excelBuffer],{type:fileType});
        Filesaver.saveAs(data,  fileName + fileExtension);
    }
  return (
    <div>
     
      <button onClick={(e)=>exporttexcel(fileName)}>export to excel</button>
      
    </div>
  )
}

export default Excelexport
