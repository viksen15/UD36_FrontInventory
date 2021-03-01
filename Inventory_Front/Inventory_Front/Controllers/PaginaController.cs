using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Front.Controllers
{
    public class PaginaController : Controller
    {
        public IActionResult Usuarios()
        {
            return View();
        }
    }
}
