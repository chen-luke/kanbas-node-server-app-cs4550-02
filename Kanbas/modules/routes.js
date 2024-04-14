import db from "../Database/index.js";
import * as dao from "../Modules/dao.js";
function ModuleRoutes(app) {


  // app.put("/api/modules/:mid", (req, res) => {
  //     const { mid } = req.params;
  //     const moduleIndex = db.modules.findIndex(
  //       (m) => m._id === mid);
  //     db.modules[moduleIndex] = {
  //       ...db.modules[moduleIndex],
  //       ...req.body
  //     };
  //     res.sendStatus(204);
  //   });


  // app.delete("/api/modules/:mid", (req, res) => {
  //     const { mid } = req.params;
  //     db.modules = db.modules.filter((m) => m._id !== mid);
  //     res.sendStatus(200);
  //   });


  // app.post("/api/courses/:cid/modules", (req, res) => {
  //     const { cid } = req.params;
  //     const newModule = {
  //         ...req.body,
  //         course: cid,
  //         _id: new Date().getTime().toString(),
  //     };
  //     db.modules.push(newModule);
  //     res.send(newModule);
  // });


  // app.get("/api/courses/:cid/modules", (req, res) => {
  //     const { cid } = req.params;
  //     const modules = db.modules
  //         .filter((m) => m.course === cid);
  //     res.send(modules);
  // });

  const createModule = async (req, res) => {
    const newModule = {
      ...req.body,
      course: req.params.cid,
    }
    const result = await dao.createModule(newModule);
    res.json(result);
  }

  const getModules = async (req, res) => {
    const modules = await dao.findModuleByClassId(req.params.cid)
    if (modules) {
      res.json(modules);
    }
    else { res.status(200); }
  }

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    const status = await dao.updateModule(mid, req.body)
    res.json(status);
  }

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid)
    res.json(status);
  }

  app.post("/api/courses/:cid/modules", createModule);
  app.get("/api/courses/:cid/modules", getModules);
  app.put("/api/modules/:mid", updateModule);
  app.delete("/api/modules/:mid", deleteModule);

}
export default ModuleRoutes;