using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using YoYo_Web_App.Models;
using YoYoBusinessEntities;
using YoYoBusinessLogic;
using System.Threading;

namespace YoYo_Web_App.Controllers
{
    public class HomeController : Controller
    {
        private readonly IFitness _ifitness;
        public HomeController()
        {

            _ifitness = new Fitness();
        }

        public IActionResult Index()
        {

            ViewBag.SportsPersons = _ifitness.GetSportPerson();
            return View();
        }
        
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }


    }
}

