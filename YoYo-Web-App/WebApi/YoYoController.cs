using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using YoYoBusinessEntities;

namespace YoYo_Web_App.WebApi
{
    [Route("api/Fitness")]
    [ApiController]
    public class YoYoController : ControllerBase
    {
        [Route("FitnessData")]
        [HttpGet]

        public List<FitnessBeep> GetFitnessBeeps()
        {
            string allText = System.IO.File.ReadAllText("fitnessrating_beeptest.json");
            List<FitnessBeep> list = JsonConvert.DeserializeObject<List<FitnessBeep>>(allText);

            return list;
        }
    }
}