using KodskolaDecember.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;

namespace KodskolaDecember.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ExampleEF1()
        {
            using (var context = new KodskolaContext())
            {
                var model = context.Orders.ToList();
                return View(model);
            }
        }
    }
}