import { Router } from "express";
import { checkHealth } from "../controller/healthcheck.controller.js";
const healthcheck = Router() 

healthcheck.get('/' ,checkHealth );

export default healthcheck ;
