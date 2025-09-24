 async function getQueryAnswer(){
        try {
            const divRef = document.querySelector("#weather");
             const queryInputRef = document.querySelector("#query");
             const query = queryInputRef.value;
             const res = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
                {
    "contents": [
      {
        "parts": [
            {
                text:"you are a good gammer and tell about gaming if other is asked said query is wrong ",

            },
          {
            text: query,
          },
        ],
      },
    ],
  },
  {
    headers: 
  {  "X-goog-api-key":"AIzaSyApmncPeFD46sQx80XS9ioN7RGnXQrM9UM",
    "Content-Type":" application/json",
},

  }
             );
             const answer = res.data.candidates[0].content.parts[0].text;
             divRef.innerHTML = answer;
            

        } catch (err){
            alert("Something went wrong");
        }
    }