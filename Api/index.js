const express = require("express");
const router = new express.Router();
const EmplyeeData = require("../Database/Models/index");

/*
Route           /employee
Description     add employee data
Access          PUBLIC
Parameter       NONE
Methods         post
*/
router.post("/employee", async (req, res) => {
  try {
    const addemp = new EmplyeeData(req.body);
    const empsave = await addemp.save();
    res.json(empsave);
  } catch (e) {
    res.json(e);
  }
});

/*
Route           /employee
Description     get employees 
Access          PUBLIC
Parameter       NONE
Methods         get
*/
try {
  router.get("/employee", async (req, res) => {
    const allemp = await EmplyeeData.find();
    return res.json(allemp);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /employee/
Description     get employee data using empId
Access          PUBLIC
Parameter       :empId
Methods         get
*/
try {
  router.get("/employee/:empid", async (req, res) => {
    const specdata = await EmplyeeData.findOne({ empId: req.params.empid });
    if (!specdata) {
      return res.send(`no employee found at empId ${req.params.empid}`);
    }
    return res.send(specdata);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /employee/
Description     update employee name using empid
Access          PUBLIC
Parameter       :empid
Methods         put
*/
try {
  router.put("/employee/update/:empid", async (req, res) => {
    const updateempl = await EmplyeeData.findOneAndUpdate(
      {
        empId: req.params.empid,
      },
      {
        name: req.body.name,
      },
      {
        new: true,
      }
    );
    return res.send(updateempl);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /employee/update/contactnumber
Description     add new contact number 
Access          PUBLIC
Parameter       :empid
Methods         put
*/
try {
  router.put("/employee/update/contactnumber/:empid", async (req, res) => {
    const updatenum = await EmplyeeData.findOneAndUpdate(
      {
        empId: req.params.empid,
      },
      {
        contactNumber: req.body.contactNumber,
      },
      {
        new: true,
      }
    );
    return res.send(updatenum);
  });
} catch (e) {
  res.send(e);
}

/*
Route           /employee/delete/
Description     delete a employee
Access          PUBLIC
Parameter       :empid
Methods         delete
*/
try {
  router.delete("/employee/delete/:empid", async (req, res) => {
    const deleteEmp = await EmplyeeData.findOneAndDelete({
      empId: req.params.empid,
    });
    res.send(deleteEmp);
  });
} catch (e) {
  res.send(e);
}

module.exports = router;
