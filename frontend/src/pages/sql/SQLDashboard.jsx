import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent
} from "@mui/material";


function SQLDashboard() {

  const navigate = useNavigate();


  const modules = [
    {
      title:"📘 Learn SQL",
      path:"/sql-learn"
    },
    {
      title:"💻 SQL Playground",
      path:"/sql-playground"
    },
    {
      title:"📝 Practice Questions",
      path:"/sql-practice"
    },
    {
      title:"🤖 AI Tutor",
      path:"/sql-ai-tutor"
    },
    {
      title:"🎤 AI Viva",
      path:"/sql-viva"
    },
    {
      title:"📊 Progress",
      path:"/sql-progress"
    }
  ];


  return (

    <div style={{padding:"30px"}}>

      <h1>
        SQL Learning Dashboard
      </h1>

      <h3>
        Welcome to SQL Lab
      </h3>


      {
        modules.map((item)=>(

          <Card
            key={item.title}
            sx={{
              margin:"15px",
              cursor:"pointer"
            }}

            onClick={() =>
              navigate(item.path)
            }
          >

            <CardContent>
              {item.title}
            </CardContent>

          </Card>

        ))
      }

    </div>

  );
}

export default SQLDashboard;