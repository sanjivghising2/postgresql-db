
//create a hotel
app.post("/bookings/hotel", async (req, res) => {
    try {
      const { description } = req.body;
      const newHotel = await pool.query(
        "INSERT INTO hotel (description) VALUES($1) RETURNING *",
        [description]

      );

      res.json(newHotel.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

//get hotels

    app.get("/bookings/hotels", async(req,res)=>{
      try {
        const allHotel = await pool.query("SELECT * FROM hotel");
        res.json(allHotel.rows);
      } catch (err) {
        console.error(err.message)
      }
    })

//get a hotel
        app.get("/bookings/hotels/:id", async(req,res)=>{
          try {
            const { id } = req.params;
            const hotel = await pool.query("SELECT * FROM hotel WHERE hotel_id =$1",[id]);
            res.json(hotel.rows[0]);


          } catch (err) {
            console.error(err.message)
          }
        })
//update a hotel        

         app.put("/bookings/hotel/:id",async(req,res)=>{
          try {
            const { id } = req.params;
            const { description } = req.body;
            const updateHotel = await pool.query("UPDATE hotel SET description = $1 WHERE hotel_id = $2",
            [description, id]);
            res.json("hotel was updated")
          } catch (error) {
            console.error(err.message)
          }
         }) 
//delete hotel         
         app.delete("/bookings/hotels/:id",async(req,res)=>{
          try {
            const { id } = req.params;
            const deleteHotel = await pool.query("DELETE FROM hotel WHERE hotel_id = $1",
            [id]);
            res.json("hotel is deleted")
          } catch (error) {
            console.error(err.message)
          }
         }) 


         //create a room
app.post("/bookings/room", async (req, res) => {
    try {
      const { title, price, max_people, description, room_numbers } = req.body;
      const newRoom =await pool.query(
        "INSERT INTO rooms (title, price, max_people, description, room_numbers) VALUES ($1, $2, $3,  $4,  $5) RETURNING *",
        [title, price, max_people, description, room_numbers])
     

      res.json(newRoom.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

//get rooms

    app.get("/bookings/rooms", async(req,res)=>{
      try {
        const allRoom = await pool.query("SELECT * FROM rooms");
        res.json(allRoom.rows);
      } catch (err) {
        console.error(err.message)
      }
    })

//get a room
        app.get("/bookings/rooms/:id", async(req,res)=>{
          try {
            const { id } = req.params;
            const room = await pool.query("SELECT * FROM rooms WHERE room_id =$1",[id]);
            res.json(room.rows[0]);


          } catch (err) {
            console.error(err.message)
          }
        })
        app.post("/bookings/room", async (req, res) => {
            try {
              const { title, price, max_people, description, room_numbers } = req.body;
              const newRoom =await pool.query(
                "INSERT INTO rooms (title, price, max_people, description, room_numbers) VALUES ($1, $2, $3,  $4,  $5) RETURNING *",
                [title, price, max_people, description, room_numbers])
             
        
              res.json(newRoom.rows[0]);
            } catch (err) {
              console.error(err.message);
            }
          });
        
//update a room        

         app.put("/bookings/room/:id",async(req,res)=>{
          try {
            const { id } = req.params;
            const { title, price, max_people, description, room_numbers } = req.body;
            const updateRoom = await pool.query(
                "UPDATE rooms SET title = $1, price = $2, max_people= $3, description = $4,  room_numbers = $5 WHERE room_id = $6",

            [title, price, max_people, description, room_numbers, id]);
            res.json("room was updated")
          } catch (err) {
            console.error(err.message)
          }
         }) 
//delete room         
         app.delete("/bookings/rooms/:id",async(req,res)=>{
          try {
            const { id } = req.params;
            const deleteRoom = await pool.query("DELETE FROM rooms WHERE room_id = $1",
            [id]);
            res.json("room is deleted")
          } catch (error) {
            console.error(err.message)
          }
         }) 
