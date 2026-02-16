import express from "express";
import axios from "axios";


const app = express();
const Port = 5000;
const External_Api = "https://routegcp.dev.hiringhood.ai";
app.use(express.json());


app.get("/api/recruiter/interviewSchedule", async (req, res) => {
    try {
        const userId =req.query;

        if(!userId){

            return res.status(400).json({
                success:false,
                message:"User Id required to proceed further..!",
            });
        }
    } catch(error){
        console.log("Error fetching interview schedule:", error);
        res.status(500).json({
            success:false,
            message:"An error occurred while fetching interview schedule.",
        });
    }
})


app.listen(Port, async() => {
  console.log(`Server running on http://localhost:${Port}`);


  try {
    const respose = await axios.get(`${External_Api}/recruiter/interviewSchedule`,
        {
            params:{
                userId:"689325bfa0053e024e2aa56c"
            }
        }
    );


    console.log("External API response:", respose.data);

    
  } catch (error) {
    console.log("Error while external API call:",error);
    
  }

});
