const express = require('express')
const bodyParser = require('body-parser')
const UserData = require('./userData/user')
const cors = require('cors')
const addressdata = require('./address/addressModal')
const subjectdata = require('./subject/subjectModal')

const app = express()

app.use(cors())

// user DAta APiS

app.post("/user", async (req, res) => {

  let user = new UserData(req.body)
  console.log(user)
  await user.save().then((data) => {
    res.send(data)
  }, (e) => {
    res.status(400).send(e)

  })
})
//   console.log("aaaa", request.body);
//   const user = new UserData(request.body);
//   console.log("user", user);

//   try {
//     await user.save();
//     response.send(user);
//   } catch (error) {
//     console.log("error", error);

//     response.status(500).send(error);
//   }
// });
app.get("/users", async (req, res) => {

  await UserData.find().then((user) => {
    // here i carried user word from the post api where i saved the enter data in user word
    res.send(user);
  }, (e) => {
    res.status(400).send(e);
  })
  // const users = await UserData.find({});
  // try {
  //   response.send(users);
  // } catch (error) {
  //   response.status(500).send(error);
  // }

});
app.put('/updateuser', async (req, res) => {

  let newid = req.body.id
  let newemail = req.body.email
  let newname = req.body.name
  let newlastname = req.body.lastname

  UserData.updateOne({ _id: newid }, { $set: { name: newname, email: newemail, lastname: newlastname } }, { new: true },
    (err, data) => {
      if (err) {
        res.send("ERROR")

      } else {
        if (data === null) {
          res.send("nothing found")
        } else {
          res.send(data)
          console.log(data)
        }
      }
    }
  )

})
app.delete('/user/:id', (req, res, next) => {
  let id = req.params.id;
  console.log("id", id);
  UserData.deleteOne({ _id: id }).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});


// apiS of address coloumn
app.post('/addAddress', async (req, res) => {
  let address = new addressdata(req.body)
  console.log(address)
  await address.save().then((data) => {
    res.send(data)
  }, (e) => {
    res.status(400).send(e)

  })
  //   console.log("bbb", req.body);
  //   const address = new addressdata(req.body);
  //   console.log("address", address);

  //   try {
  //     await address.save();
  //     res.send(address);
  //   } catch (error) {
  //     console.log("error", error);

  //     res.status(500).send(error);
  //   }
})
app.get("/getAddress", async (req, res) => {

  await addressdata.find().then((address) => {
    // here i carried address word from the post api where i saved the enter data in address word
    res.send(address);
  }, (e) => {
    res.status(400).send(e);
  })
  // const users = await addressdata.find({});
  // try {
  //   response.send(users);
  // } catch (error) {
  //   response.status(500).send(error);
  // }

});

// apis for subject coloumn

app.post('/addSub', async (req,res)=>{
  let sub = new subjectdata(req.body)
  console.log(sub)
  await sub.save().then((data)=>{
    res.send(data)
  } , (e)=>{
    res.status(400),send(e)
  })
})

app.get('/getSub', async (req,res)=>{

  await subjectdata.find().then((sub)=>{
    res.send(sub)
  },(e)=>{
    res.status(400).send(e);
  })
})

module.exports = app