import { useState } from "react";

import Editor from "@monaco-editor/react";

import {
  Button,
  Paper,
  Typography,
} from "@mui/material";


import { executeQuery } from "../../services/sqlService";
import { debugSQL } from "../../services/aiService";


function SQLLab() {

  const [query, setQuery] = useState(
    "SELECT * FROM users;"
  );


  const [rows, setRows] = useState([]);

  const [aiResult, setAiResult] = useState(null);



  const handleRunQuery = async () => {

    try {

      const res = await executeQuery(query);


      setRows(res.rows);

      setAiResult(null);


    } catch (err) {


      setRows([]);


      try {

        const ai = await debugSQL(
          query,
          err.response?.data?.message || "SQL Error"
        );


        setAiResult(ai);


      } catch (error) {


        console.error(error);

        alert("AI Debugger Error");

      }

    }

  };



  return (

    <Paper
      sx={{
        p:3,
        m:3
      }}
    >


      <Typography
        variant="h4"
        gutterBottom
      >

        SQL Virtual Lab

      </Typography>



      <Editor

        height="300px"

        defaultLanguage="sql"

        value={query}

        onChange={(value)=>
          setQuery(value || "")
        }

      />



      <Button

        sx={{
          mt:2
        }}

        variant="contained"

        onClick={handleRunQuery}

      >

        Run Query

      </Button>





      {/* Query Result */}

      {rows.length > 0 && (

        <table

          border="1"

          width="100%"

          style={{
            marginTop:"20px",
            borderCollapse:"collapse"
          }}

        >

          <thead>

            <tr>

              {
                Object.keys(rows[0]).map((key)=>(

                  <th key={key}>
                    {key}
                  </th>

                ))
              }

            </tr>

          </thead>



          <tbody>

            {
              rows.map((row,index)=>(

                <tr key={index}>

                  {
                    Object.values(row).map((value,i)=>(

                      <td key={i}>
                        {String(value)}
                      </td>

                    ))
                  }

                </tr>

              ))
            }


          </tbody>


        </table>

      )}






      {/* AI SQL Debugger */}

      {aiResult && (

        <Paper

          sx={{
            mt:3,
            p:2
          }}

        >

          <Typography
            variant="h6"
          >

            AI SQL Debugger

          </Typography>



          <Typography sx={{mt:1}}>

            <b>Error:</b>

            {" "}

            {aiResult.databaseError}

          </Typography>



          <Typography sx={{mt:1}}>

            <b>Suggestion:</b>

            {" "}

            {aiResult.suggestion}

          </Typography>




          <Typography sx={{mt:1}}>

            <b>Explanation:</b>

            {" "}

            {aiResult.explanation}

          </Typography>


        </Paper>

      )}



    </Paper>

  );

}


export default SQLLab;