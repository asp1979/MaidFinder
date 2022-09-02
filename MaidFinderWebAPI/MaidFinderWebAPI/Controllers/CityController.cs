using MaidFinderWebAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace MaidFinderWebAPI.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly MaidFinderDbContext _context;

        public CityController(MaidFinderDbContext context)
        {
            _context = context;
        }


        // GET: api/Customer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<City>>> GetAllCity()
        {
            return await _context.City.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Candidate>> CreateCandidate(City city)
        {
            _context.City.Add(city);
            await _context.SaveChangesAsync();

            return CreatedAtAction("success", new { id = city.CityID }, city);
        }


    }
}
