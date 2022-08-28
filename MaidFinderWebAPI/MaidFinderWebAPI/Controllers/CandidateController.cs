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
    public class CandidateController : ControllerBase
    {
        private readonly MaidFinderDbContext _context;

        public CandidateController(MaidFinderDbContext context)
        {
            _context = context;
        }


        // GET: api/Customer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Candidate>>> GetAllCandidate()
        {
            return await _context.Candidate.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Candidate>> CreateCandidate(Candidate candidate)
        {
            _context.Candidate.Add(candidate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFoodItems", new { id = candidate.CandidateID }, candidate);
        }


    }
}
